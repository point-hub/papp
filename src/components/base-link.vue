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
export type BaseButtonSizeType = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type BaseButtonAlign = 'left' | 'middle' | 'right'

const props = withDefaults(
  defineProps<{
    href: string
    size?: BaseButtonSizeType
    color?: BaseButtonColorType
    variant?: BaseButtonVariantType
    shape?: BaseButtonShapeType
    align?: BaseButtonAlign
    isBlock?: boolean
  }>(),
  {
    size: 'md',
    color: 'none',
    shape: 'rounded',
    align: 'left',
    variant: 'filled',
    isBlock: false
  }
)

const classes: string[] = []

// Button Variant
let linkColor = ''
if (props.variant === 'filled') {
  linkColor = `link-${props.color}`
}
if (props.variant === 'light') {
  linkColor = `link-light-${props.color}`
}
if (props.variant === 'outlined') {
  linkColor = `link-outline-${props.color}`
}
if (props.variant === 'text') {
  linkColor = `link-text-${props.color}`
}
classes.push(`${linkColor}`)

// Button Shape
let linkShape = ''
if (props.shape === 'sharp') {
  linkShape = 'rounded-none'
}
if (props.shape === 'rounded') {
  linkShape = 'rounded-lg'
}
if (props.shape === 'pill') {
  linkShape = 'rounded-full'
}
classes.push(`${linkShape}`)

// Button Block
if (props.isBlock) {
  classes.push(`link-block`)
}

// Button Size
if (props.size !== 'none') {
  classes.push(`link-${props.size}`)
}

// Button Align
if (props.align) {
  classes.push(`text-${props.align}!`)
}
</script>

<template>
  <a :href="props.href" class="link" :class="classes">
    <!-- Render Link Content -->
    <slot></slot>
  </a>
</template>

<style scoped>
@import url('../assets/css/components/link.css');
</style>
