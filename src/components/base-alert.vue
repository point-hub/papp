<script setup lang="ts">
import { ref } from 'vue'

export type BaseAlertColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
export type BaseAlertIconType = 'info' | 'success' | 'warning' | 'danger'
export type BaseAlertVariantType = 'fill' | 'light' | 'outline'

const props = withDefaults(
  defineProps<{
    title?: string
    icon?: BaseAlertIconType
    color?: BaseAlertColorType
    variant?: BaseAlertVariantType
    isClosed?: boolean
    isDismissable?: boolean
  }>(),
  {
    title: '',
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
        <i v-if="icon === 'success'" class="block i-far-circle-check"></i>
        <base-icon v-if="icon === 'info'" icon="i-far-circle-info"></base-icon>
        <base-icon v-if="icon === 'success'" icon="i-far-circle-check"></base-icon>
        <base-icon v-if="icon === 'warning'" icon="i-far-circle-exclamation"></base-icon>
        <base-icon v-if="icon === 'danger'" icon="i-far-triangle-exclamation"></base-icon>
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
      <base-icon icon="i-fas-xmark"></base-icon>
    </button>
  </div>
</template>
