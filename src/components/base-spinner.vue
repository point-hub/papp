<script setup lang="ts">
export type colorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white'
export type sizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const props = withDefaults(
  defineProps<{
    size?: sizeType
    color?: colorType
  }>(),
  {
    size: 'md',
    color: 'primary'
  }
)

const classes: string[] = []

classes.push('spinner')
classes.push(`spinner-${props.color}`)
classes.push(`spinner-${props.size}`)
</script>

<template>
  <span :class="classes" />
</template>
