<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'

export interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: ''
})
</script>

<template>
  <MenuItem v-slot="{ active }">
    <slot :active="active">
      <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
        {{ text }}
      </div>
    </slot>
  </MenuItem>
</template>

<style scoped>
@import url('../assets/css/components/dropdown.css');
</style>
