<script setup lang="ts">
export type BaseCardShapeType = 'sharp' | 'rounded'

const bgColor = defineModel<string>('bgColor')
const titleColor = defineModel<string>('titleColor')
const bodyColor = defineModel<string>('bodyColor')

withDefaults(
  defineProps<{
    shadow?: boolean
    shape?: BaseCardShapeType
  }>(),
  {
    shadow: false,
    shape: 'sharp'
  }
)
</script>

<template>
  <div
    class="card"
    :class="{ 'card-shadow ': shadow, 'card-rounded': shape === 'rounded' }"
    :style="{ backgroundColor: bgColor, color: titleColor }"
  >
    <div class="card-header">
      <h1>
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="card-body" :style="{ color: bodyColor }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/card.css');
</style>
