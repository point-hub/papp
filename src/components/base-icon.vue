<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    fixedWidth?: boolean
  }>(),
  {
    fixedWidth: true
  }
)
</script>

<template>
  <span :class="[icon, 'inline-block', { 'w-1.2em': fixedWidth }]"></span>
</template>
