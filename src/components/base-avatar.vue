<script setup lang="ts">
import { computed } from 'vue'

export type BaseAvatarColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type BaseAvatarShapeType = 'square' | 'squircle' | 'circle'

const props = withDefaults(
  defineProps<{
    name: string
    src?: string
    color?: BaseAvatarColorType
    colorIndicator?: BaseAvatarColorType
    shape?: BaseAvatarShapeType
    size?: string | number
    indicator?: boolean
    animate?: boolean
    indicatorScale?: string
  }>(),
  {
    color: 'secondary',
    colorIndicator: 'success',
    shape: 'circle',
    size: 64,
    indicator: false,
    animate: false,
    indicatorScale: '15%'
  }
)

const avatarStyle = computed(() => {
  let sizeValue = props.size

  if (typeof sizeValue === 'number' || /^\d+$/.test(String(sizeValue))) {
    sizeValue = `${sizeValue}px`
  }

  return {
    width: sizeValue,
    height: sizeValue,
    '--indicator-size': props.indicatorScale
  }
})

const avatarClasses = computed(() => {
  const classes: string[] = []

  if (props.animate) {
    classes.push('animate-slide-y')
  }

  return classes
})

const shapeColorClasses = computed(() => {
  const classes: string[] = []

  // Shape classes
  if (props.shape === 'circle') {
    classes.push('rounded-full')
  } else if (props.shape === 'square') {
    classes.push('rounded-lg')
  } else if (props.shape === 'squircle') {
    classes.push('mask mask-squircle')
  }

  // Color classes
  if (props.color === 'primary') {
    classes.push('bg-primary text-white')
  }
  // ... (rest of color logic)
  else if (props.color === 'secondary') {
    classes.push('bg-secondary text-white')
  } else if (props.color === 'info') {
    classes.push('bg-info text-white')
  } else if (props.color === 'success') {
    classes.push('bg-success text-white')
  } else if (props.color === 'warning') {
    classes.push('bg-warning text-white')
  } else if (props.color === 'danger') {
    classes.push('bg-danger text-white')
  }

  return classes
})

const indicatorClasses = computed(() => {
  return [`bg-${props.colorIndicator}`]
})


const initial = (name: string) => {
  if (name) {
    const arrName = name.split(' ', 2)
    if (arrName.length === 2) {
      return arrName[0]!.substring(0, 1) + arrName[1]!.substring(0, 1)
    }

    return name.substring(0, 2)
  }
  return ''
}
</script>

<template>
  <div class="avatar" :class="avatarClasses" :style="avatarStyle">
    <img v-if="src" class="avatar-ring h-full w-full" :src="src" :class="shapeColorClasses" />
    <span v-else class="avatar-initial h-full w-full" :class="shapeColorClasses">
      {{ initial(name) }}
    </span>
    <span v-if="indicator" class="avatar-indicator" :class="indicatorClasses"></span>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/avatar.css');
@import url('../assets/css/components/mask.css');
</style>
