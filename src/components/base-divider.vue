<script setup lang="ts">
export type BaseDividerOrientation = 'horizontal' | 'vertical'

const props = defineProps<{
  text?: string
  orientation: BaseDividerOrientation
}>()
</script>

<template>
  <div
    :class="{
      'divider-horizontal': props.orientation === 'horizontal',
      'divider-vertical': props.orientation === 'vertical'
    }"
  >
    <div
      :class="{
        'divider-horizontal-line': props.orientation === 'horizontal',
        'divider-vertical-line': props.orientation === 'vertical'
      }"
    />
    <p v-if="text" class="text-xs text-slate-500">{{ props.text }}</p>
    <div
      v-if="text"
      :class="{
        'divider-horizontal-line': props.orientation === 'horizontal',
        'divider-vertical-line': props.orientation === 'vertical'
      }"
    />
  </div>
</template>

<style scoped>
@import url('../assets/css/components/divider.css');
</style>
