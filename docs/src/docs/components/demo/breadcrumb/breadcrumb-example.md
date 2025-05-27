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
  {
    name: 'Template',
    path: '/template'
  },
  {
    name: 'Component',
    path: '/template/component'
  },
  {
    name: 'Breadcrumb'
  }
]
</script>

<template>
  <div>
    <base-breadcrumb :items="items" separator="angle" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </base-breadcrumb>
    <base-breadcrumb :items="items" separator="arrow" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </base-breadcrumb>
    <base-breadcrumb :items="items" separator="slash" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </base-breadcrumb>
  </div>
</template>
```

:::
