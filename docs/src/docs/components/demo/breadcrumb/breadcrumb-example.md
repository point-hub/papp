Breadcrumb can have a various separator icon.

::: raw

<ClientOnly>
  <BreadcrumbExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
const items = [
  { name: 'Home',path: '/' },
  { name: 'Template',path: '/docs/components/breadcrumb' },
  { name: 'Component',path: '/docs/components/breadcrumb' },
  { name: 'Breadcrumb' }
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

        <a class="flex items-center" v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          <base-icon v-if="item.path === '/'" icon="i-fa7-solid-house" />
          <span v-else>{{ item.name }}</span>
        </a>
        <span class="flex items-center" v-else>{{ item.name }}</span>
      </base-breadcrumb>
      <base-breadcrumb :items="items" separator="arrow" v-slot="{ item }">
        <a class="flex items-center" v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          <base-icon v-if="item.path === '/'" icon="i-fa7-solid-house" />
          <span v-else>{{ item.name }}</span>
        </a>
        <span class="flex items-center" v-else>{{ item.name }}</span>
      </base-breadcrumb>
      <base-breadcrumb :items="items" separator="slash" v-slot="{ item }">
        <a class="flex items-center" v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :href="item.path">
          <base-icon v-if="item.path === '/'" icon="i-fa7-solid-house" />
          <span v-else>{{ item.name }}</span>
        </a>
        <span class="flex items-center" v-else>{{ item.name }}</span>
      </base-breadcrumb>
    </div>
  </Demo>
</template>
```

:::
