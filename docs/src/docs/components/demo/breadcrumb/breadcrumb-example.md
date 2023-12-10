Breadcrumb can have a various separator icon.

::: raw

<BreadcrumbExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseBreadcrumb } from '@point-hub/papp'

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
    <component :is="BaseBreadcrumb" :items="items" separator="angle" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </component>
    <component :is="BaseBreadcrumb" :items="items" separator="arrow" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </component>
    <component :is="BaseBreadcrumb" :items="items" separator="slash" v-slot="{ item }">
      <router-link v-if="item.path" :class="{ 'breadcrumb-link': item.path }" :to="item.path">
        {{ item.name }}
      </router-link>
      <span v-else>{{ item.name }}</span>
    </component>
  </div>
</template>
```

:::
