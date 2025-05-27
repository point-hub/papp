<script setup lang="ts">
const items = [
  {
    name: 'Template',
    path: '/docs/components/breadcrumb'
  },
  {
    name: 'Component',
    path: '/docs/components/breadcrumb'
  },
  {
    name: 'Breadcrumb'
  }
]
</script>

<template>
  <Demo>
    <div class="flex flex-col">
      <base-breadcrumb :items="items" separator="angle" v-slot="{ item }">
        <!-- 
          Replacing <router-link :to=""> with <a :href=""> in this example because this error.
          "Failed to resolve component: router-link. If this is a native custom element, 
          make sure to exclude it from component resolution via compilerOptions.isCustomElement."
        -->
        <a v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          {{ item.name }}
        </a>
        <span v-else>{{ item.name }}</span>
      </base-breadcrumb>
      <base-breadcrumb :items="items" separator="arrow" v-slot="{ item }">
        <a v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          {{ item.name }}
        </a>
        <span v-else>{{ item.name }}</span>
      </base-breadcrumb>
      <base-breadcrumb :items="items" separator="slash" v-slot="{ item }">
        <a v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          {{ item.name }}
        </a>
        <span v-else>{{ item.name }}</span>
      </base-breadcrumb>
    </div>
  </Demo>
</template>
