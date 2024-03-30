<script setup lang="ts">
export type BaseButtonColorType =
  | 'none'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type BaseButtonVariantType = 'filled' | 'light' | 'outlined' | 'text'
export type BaseButtonShapeType = 'sharp' | 'rounded' | 'pill'
export type BaseButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type BaseButtonType = 'submit' | 'button' | 'reset'

const props = withDefaults(
  defineProps<{
    href: string
    type?: BaseButtonType
    size?: BaseButtonSizeType
    color?: BaseButtonColorType
    variant?: BaseButtonVariantType
    shape?: BaseButtonShapeType
    isBlock?: boolean
  }>(),
  {
    type: 'button',
    size: 'md',
    color: 'none',
    shape: 'rounded',
    variant: 'filled',
    isBlock: false
  }
)

const classes: string[] = []

// Button Variant
let buttonColor = ''
if (props.variant === 'filled') {
  buttonColor = `btn-${props.color}`
}
if (props.variant === 'light') {
  buttonColor = `btn-light-${props.color}`
}
if (props.variant === 'outlined') {
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
if (props.shape === 'rounded') {
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
  <a :href="props.href" class="btn" :type="type" :class="classes">
    <!-- Render Link Content -->
    <slot></slot>
  </a>
</template>

<style scoped>
@import url('../assets/css/components/button.css');
</style>
