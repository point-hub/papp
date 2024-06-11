<script setup lang="ts">
export type BaseBadgeColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
export type BaseBadgeVariantType = 'filled' | 'light' | 'outlined'

const props = withDefaults(
  defineProps<{
    color?: BaseBadgeColorType
    variant?: BaseBadgeVariantType
    withDot?: boolean
  }>(),
  {
    color: 'primary',
    variant: 'filled',
    withDot: false
  }
)

const classes: string[] = []

// Badge Variant
let buttonColor = ''
if (props.variant === 'filled') {
  buttonColor = `badge-${props.color}`
}
if (props.variant === 'light') {
  buttonColor = `badge-light-${props.color}`
}
if (props.variant === 'outlined') {
  buttonColor = `badge-outline-${props.color}`
}
classes.push(`${buttonColor}`)
</script>

<template>
  <span class="badge" :class="classes">
    <div v-if="withDot" class="h-2 w-2 rounded-full bg-current"></div>
    <!-- Render Badge Content -->
    <slot></slot>
  </span>
</template>

<style scoped>
@import url('../assets/css/components/badge.css');
</style>
