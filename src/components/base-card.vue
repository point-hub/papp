<script setup lang="ts">
withDefaults(
  defineProps<{
    shadow?: boolean
  }>(),
  {
    shadow: true
  }
)
</script>

<template>
  <div class="card" :class="{ 'card-shadow ': shadow }">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
