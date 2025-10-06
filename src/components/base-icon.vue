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
  <span :class="[icon, 'inline-block', 'text-xl', { 'w-1.2em': fixedWidth }]"></span>
</template>
