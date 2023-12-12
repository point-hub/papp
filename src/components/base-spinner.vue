<script setup lang="ts">
export type BaseSpinnerColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white'

export type BaseSpinnerSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const props = withDefaults(
  defineProps<{
    size?: BaseSpinnerSizeType
    color?: BaseSpinnerColorType
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
