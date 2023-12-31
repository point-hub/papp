<script setup lang="ts">
export type BaseButtonColorType =
  | 'none'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type BaseButtonVariantType = 'fill' | 'light' | 'outline' | 'text'
export type BaseButtonShapeType = 'sharp' | 'round' | 'pill'
export type BaseButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type BaseButtonType = 'submit' | 'button' | 'reset'

const props = withDefaults(
  defineProps<{
    type?: BaseButtonType
    size?: BaseButtonSizeType
    color?: BaseButtonColorType
    variant?: BaseButtonVariantType
    shape?: BaseButtonShapeType
    isBlock?: boolean
    isLoading?: boolean
  }>(),
  {
    type: 'button',
    size: 'md',
    color: 'none',
    shape: 'round',
    variant: 'fill',
    isBlock: false,
    isLoading: false
  }
)

const classes: string[] = []

// Button Variant
let buttonColor = ''
if (props.variant === 'fill') {
  buttonColor = `btn-${props.color}`
}
if (props.variant === 'light') {
  buttonColor = `btn-light-${props.color}`
}
if (props.variant === 'outline') {
  buttonColor = `btn-outline-${props.color}`
}
if (props.variant === 'text') {
  buttonColor = `btn-text-${props.color}`
}
classes.push(`${buttonColor}`)

// Button Shape
let buttonShape = ''
if (props.shape === 'sharp') {
  buttonShape = 'rounded-none'
}
if (props.shape === 'round') {
  buttonShape = 'rounded-lg'
}
if (props.shape === 'pill') {
  buttonShape = 'rounded-full'
}
classes.push(`${buttonShape}`)

// Button Block
if (props.isBlock) {
  classes.push(`btn-block`)
}

// Button Size
classes.push(`btn-${props.size}`)
</script>

<template>
  <button class="btn" :type="type" :class="classes">
    <!-- Render Button Content -->
    <slot></slot>
    <!-- :Loading Spinner -->
    <span
      v-if="isLoading && (variant === 'text' || variant === 'outline')"
      class="spinner spinner-black spinner-xs"
    />
    <span
      v-if="isLoading && (variant === 'fill' || variant === 'light')"
      class="spinner spinner-white spinner-xs"
    />
  </button>
</template>

<style scoped>
@import url('../assets/css/components/button.css');
</style>
