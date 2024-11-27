<script setup lang="ts">
export interface ISitemap {
  title: string
  subtitle: string
  homepage: {
    link?: string
    name: string
    desc?: string
  }
  menu: {
    link?: string
    name: string
    desc?: string
    child?: {
      link?: string
      name: string
      desc?: string
      child?: {
        link?: string
        name?: string
        desc?: string
      }[]
    }[]
  }[]
}

const sitemap = defineModel<ISitemap>('sitemap', { required: true })
</script>

<template>
  <div class="sitemap">
    <h1 v-if="sitemap.title">{{ sitemap.title }}</h1>
    <h2 v-if="sitemap.subtitle">{{ sitemap.subtitle }}</h2>

    <nav class="primary">
      <ul>
        <li id="home">
          <a :href="sitemap.homepage.link">
            {{ sitemap.homepage.name }}
            <small v-if="sitemap.homepage.desc">{{ sitemap.homepage.desc }}</small>
          </a>
          <ul>
            <li v-for="level1 in sitemap.menu" :key="level1.name">
              <a :href="level1.link ?? ''">
                {{ level1.name }} <small>{{ level1.desc }}</small>
              </a>
              <ul v-if="level1.child">
                <li v-for="level2 in level1.child" :key="level2.name">
                  <a :href="level2.link ?? ''">
                    {{ level2.name }} <small>{{ level2.desc }}</small>
                  </a>
                  <ul v-if="level2.child">
                    <li v-for="level3 in level2.child" :key="level3.name">
                      <a :href="level3.link ?? ''" class="multi">
                        {{ level3.name }} <small>{{ level3.desc }}</small>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  border-style: none;
}

body {
  background: #f9fafc;
  color: #333;
  font-family: 'proxima-nova', sans-serif;
  font-size: 12px;
  line-height: 1;
}

h1 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0 0 5px 0;
}

h2 {
  font-family: 'Lucida Grande', Verdana, sans-serif;
  font-size: 10px;
  color: #777777;
  margin: 0 0 40px 0;
}

a {
  text-decoration: none;
}

ol,
ul {
  list-style: none;
}

/* ------------------------------------------------------------
	Sitemap Styles
------------------------------------------------------------ */

.sitemap {
  display: inline-block;
  min-width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: 24px;
}

li a,
li a.multi:after {
  position: relative;
  display: block;
  margin: 0;
  padding: 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  white-space: normal;
  color: #333;
  background-color: white;
  border-top: 4px solid #95a5a6;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  z-index: 1;
}

li a {
  -webkit-box-shadow: 1px 1px 2px rgba(106, 113, 127, 0.2);
  -moz-box-shadow: 1px 1px 2px rgba(106, 113, 127, 0.2);
  box-shadow: 1px 1px 2px rgba(106, 113, 127, 0.2);
}

li a.multi:after {
  content: ' ';
  position: absolute;
  left: 6px;
  top: 6px;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-color: #eee;
  border-top-width: 0 !important;
  border-left-width: 0 !important;
  background-color: transparent;
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-bottom-right-radius: 8px;
  -moz-border-bottom-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  z-index: -1;
}

li a:before {
  content: ' ' attr(href) ' ';
  display: block;
  text-transform: lowercase;
  font-size: 8px;
  font-weight: bold;
  word-wrap: break-word;
  color: #95a5a6;
}

li a small {
  display: block;
  font-weight: normal;
  font-size: 12px;
  margin-top: 10px;
}

.sitemap .fa {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 16px;
  vertical-align: middle;
}

/* --- Root --- */
ul,
li {
  position: relative;
  display: inline-block;
}

.primary ul li:before,
.primary ul li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-color: #ddd;
  border-width: 1px;
  z-index: 0;
}

.primary ul li a {
  border-top-color: #e74c3c;
  width: auto;
}
.primary ul li a:before,
.primary ul li .fa {
  color: #e74c3c;
}

/* --- Level 1 --- */
.primary ul ul {
  white-space: nowrap;
}

.primary ul ul li {
  position: relative;
  vertical-align: top;
  padding-top: 20px;
  margin-right: 20px;
  white-space: normal;
  width: 100%;
}

.primary ul ul li:last-child {
  padding-right: 0;
}

.primary ul ul li:before {
  border-top-style: solid;
  width: 30px;
  top: 50px;
  margin: 0 0 0 -30px;
}

.primary ul ul li:first-child:before {
  border-top-style: none;
  border-left-style: solid;
  width: 0;
  height: 30px;
  top: 0;
  left: 45px;
  margin: 0 0 0 -30px;
}

.primary ul ul li a {
  border-top-color: #3498db;
  width: auto;
}
.primary ul ul li a:before,
.primary ul ul li .fa {
  color: #3498db;
}

/* --- Level 2 --- */
.primary ul ul ul {
  display: block;
  white-space: normal;
}

.primary ul ul ul li {
  display: block;
  position: relative;
  width: 100%;
  padding-left: 30px;
  margin-right: 0;
}

.primary ul ul ul li:before,
.primary ul ul ul li:first-child:before {
  border-top-style: none;
  border-left-style: solid;
  height: 100%;
  top: 0;
  left: 45px;
}

.primary ul ul ul li:last-child:before {
  height: 50px;
}

.primary ul ul ul li:after {
  border-top-style: solid;
  top: 50px;
  left: 15px;
  width: 15px;
}

.primary ul ul ul li a {
  border-top-color: #2ecc71;
  width: auto;
}
.primary ul ul ul li a:before,
.primary ul ul ul li .fa {
  color: #2ecc71;
}

/* --- Level 3 --- */
.primary ul ul ul ul li a {
  border-top-color: #e67e22;
}
.primary ul ul ul ul li a:before,
.primary ul ul ul ul li .fa {
  color: #e67e22;
}

/* --- Level 4 --- */
.primary ul ul ul ul ul li a {
  border-top-color: #9b59b6;
}
.primary ul ul ul ul ul li a:before,
.primary ul ul ul ul ul li .fa {
  color: #9b59b6;
}

/* --- Widths --- */
.primary > ul > li > a,
.primary > ul > li > ul > li {
  width: 250px;
}

/* Fix prevent vp-doc add margin on list */
.sitemap li > ul {
  margin-top: 0 !important;
  padding-left: 0 !important;
}

/* Fix prevent vp-doc add margin on list */
.sitemap li + li {
  margin-top: 0 !important;
}
</style>
