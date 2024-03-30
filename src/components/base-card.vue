<script setup lang="ts">
export type BaseCardShapeType = 'sharp' | 'round'

withDefaults(
  defineProps<{
    shadow?: boolean
    shape?: BaseCardShapeType
  }>(),
  {
    shadow: true,
    shape: 'round'
  }
)
</script>

<template>
  <div class="card" :class="{ 'card-shadow ': shadow, 'card-sharp': shape === 'sharp' }">
    <div class="card-header">
      <h1>
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/card.css');
</style>
