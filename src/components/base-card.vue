<script setup lang="ts">
export type BaseCardShapeType = 'sharp' | 'rounded'

withDefaults(
  defineProps<{
    title?: string
    bgColor?: string
    titleColor?: string
    bodyColor?: string
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
  <div class="card" :class="{ 'card-shadow ': shadow, 'card-rounded': shape === 'rounded' }"
    :style="{ backgroundColor: bgColor, color: titleColor }">
    <div class="card-header">
      <div class="flex justify-between items-center text-xs uppercase font-semibold">
        <div>
          <slot name="header">{{ title }}</slot>
        </div>
        <div>
          <slot name="header-button"></slot>
        </div>
      </div>
    </div>
    <div v-if="title" class="border-b border-slate-200 dark:border-slate-700 -mx-4 my-4" />
    <div class="card-body" :style="{ color: bodyColor }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/card.css');
</style>
