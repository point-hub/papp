<script setup lang="ts">
import { BaseDropdown, BaseDropdownItem } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseDropdown">
      <template #trigger>
        <div class="bg-red-500 text-white rounded px-4 py-2">Custom Trigger</div>
      </template>
      <component :is="BaseDropdownItem" text="Option 1" />
      <component :is="BaseDropdownItem" text="Option 2" />
      <component :is="BaseDropdownItem" text="Option 3" />
      <component :is="BaseDropdownItem" text="Option 4" />
    </component>
  </Demo>
</template>
