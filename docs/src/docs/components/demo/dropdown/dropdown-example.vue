<script setup lang="ts">
import { BaseDropdown, BaseDropdownItem } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseDropdown" text="Options">
      <component :is="BaseDropdownItem" text="Option 1" />
      <component :is="BaseDropdownItem" text="Option 2" />
      <component :is="BaseDropdownItem" text="Option 3" />
      <component :is="BaseDropdownItem" text="Option 4" />
    </component>
  </Demo>
</template>
