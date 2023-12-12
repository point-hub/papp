<script setup lang="ts">
import { BaseDropdown, BaseDropdownItem } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseDropdown">
      <component :is="BaseDropdownItem" v-slot="{ active }">
        <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
          <base-icon icon="i-far-pen-to-square" />
          <span>Edit</span>
        </div>
      </component>
      <component :is="BaseDropdownItem" v-slot="{ active }">
        <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
          <base-icon icon="i-far-copy" />
          <span>Duplicate</span>
        </div>
      </component>
    </component>
  </Demo>
</template>
