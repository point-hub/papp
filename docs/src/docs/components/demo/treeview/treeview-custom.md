Customize treeview content using slot

::: raw

<ClientOnly>
  <TreeviewCustom />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseTreeview } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseTreeview" :is-open="true">
      <template #header="slotProps">
        <base-icon v-if="!slotProps.isOpen" icon="i-far-folder" class="w-4 h-4" />
        <base-icon v-if="slotProps.isOpen" icon="i-far-folder-open" class="w-4 h-4" />
        <p class="flex-1 text-left">Parent 1</p>
      </template>
      <component :is="BaseTreeview" :is-open="true">
        <template #header="slotProps">
          <base-icon v-if="!slotProps.isOpen" icon="i-far-folder" class="w-4 h-4" />
          <base-icon v-if="slotProps.isOpen" icon="i-far-folder-open" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1</p>
        </template>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.3</p>
        </component>
      </component>
      <component :is="BaseTreeview">
        <template #header="slotProps">
          <i
            class="i-far-folder"
            :class="{
              'i-far-folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 2</p>
        </template>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.3</p>
        </component>
      </component>
    </component>
    <component :is="BaseTreeview">
      <template #header="slotProps">
        <base-icon v-if="!slotProps.isOpen" icon="i-far-folder" class="w-4 h-4" />
        <base-icon v-if="slotProps.isOpen" icon="i-far-folder-open" class="w-4 h-4" />
        <p class="flex-1 text-left">Parent 2</p>
      </template>
      <component :is="BaseTreeview">
        <template #header="slotProps">
          <i
            class="i-far-folder"
            :class="{
              'i-far-folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 1</p>
        </template>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.3</p>
        </component>
      </component>
      <component :is="BaseTreeview">
        <template #header="slotProps">
          <i
            class="i-far-folder"
            :class="{
              'i-far-folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 2</p>
        </template>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.1</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.2</p>
        </component>
        <component :is="BaseButton" is-block class="space-x-4">
          <base-icon icon="i-far-file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.3</p>
        </component>
      </component>
    </component>
  </Demo>
</template>
```

:::
