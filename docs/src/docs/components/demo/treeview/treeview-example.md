Breadcrumb can have a various separator icon.

::: raw

<ClientOnly>
  <TreeviewExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseTreeview } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseTreeview" title="Parent 1" :is-open="true">
      <component :is="BaseTreeview" title="Child 1" :is-open="true">
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.3</p>
        </component>
      </component>
      <component :is="BaseTreeview" title="Child 2">
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.3</p>
        </component>
      </component>
    </component>
    <component :is="BaseTreeview" title="Parent 2">
      <component :is="BaseTreeview" title="Child 1">
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.3</p>
        </component>
      </component>
      <component :is="BaseTreeview" title="Child 2">
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.3</p>
        </component>
      </component>
    </component>
  </Demo>
</template>
```

:::
