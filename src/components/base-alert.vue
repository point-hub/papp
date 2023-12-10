<script setup lang="ts">
import { ref } from 'vue'

export type colorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
export type iconType = 'info' | 'success' | 'warning' | 'danger'
export type variantType = 'fill' | 'light' | 'outline'

const props = withDefaults(
  defineProps<{
    title?: string
    icon?: string
    color?: colorType
    variant?: variantType
    isClosed?: boolean
    isDismissable?: boolean
  }>(),
  {
    title: '',
    icon: '',
    color: 'primary',
    variant: 'fill',
    isClosed: false,
    isDismissable: false
  }
)

const classes: string[] = []

classes.push('alert')

// Alert Variant
let alertColor = ''
if (props.variant === 'fill') {
  alertColor = `alert-${props.color}`
}
if (props.variant === 'light') {
  alertColor = `alert-light-${props.color}`
}
if (props.variant === 'outline') {
  alertColor = `alert-outline-${props.color}`
}
classes.push(`${alertColor}`)

const closed = ref(props.isClosed)

const onClose = () => {
  closed.value = true
}
</script>

<template>
  <div :class="classes" v-if="!closed">
    <div class="alert-icon-container">
      <div v-if="icon" class="alert-icon">
        <i
          v-if="icon === 'warning' || icon === 'danger'"
          class="block i-far-triangle-exclamation"
        ></i>
        <i v-if="icon === 'info'" class="block i-far-circle-info"></i>
        <i v-if="icon === 'success'" class="block i-far-circle-check"></i>
      </div>
      <div class="alert-text">
        <div>
          <slot name="title">
            <span class="font-extrabold">{{ props.title }}</span>
          </slot>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <button v-if="isDismissable" type="button" class="close-button" @click="onClose()">
      <i class="i-fas-xmark"></i>
    </button>
  </div>
</template>
