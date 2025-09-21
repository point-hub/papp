<script setup lang="ts">
export type BaseAvatarColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type BaseAvatarShapeType = 'square' | 'squircle' | 'circle'
export type BaseAvatarSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const props = withDefaults(
  defineProps<{
    name: string
    src?: string
    color?: BaseAvatarColorType
    colorIndicator?: BaseAvatarColorType
    shape?: BaseAvatarShapeType
    size?: BaseAvatarSizeType
    indicator?: boolean
    animate?: boolean
  }>(),
  {
    color: 'secondary',
    colorIndicator: 'success',
    shape: 'circle',
    size: 'md',
    indicator: false,
    animate: false
  }
)

const avatarClasses: string[] = []
const classes: string[] = []

if (props.animate) {
  avatarClasses.push('animate-slide-y')
}

if (props.shape === 'circle') {
  classes.push('rounded-full')
} else if (props.shape === 'square') {
  classes.push('rounded-lg')
} else if (props.shape === 'squircle') {
  classes.push('mask mask-squircle')
}

if (props.color === 'primary') {
  classes.push(`bg-primary text-white`)
} else if (props.color === 'secondary') {
  classes.push(`bg-secondary text-white`)
} else if (props.color === 'info') {
  classes.push(`bg-info text-white`)
} else if (props.color === 'success') {
  classes.push(`bg-success text-white`)
} else if (props.color === 'warning') {
  classes.push(`bg-warning text-white`)
} else if (props.color === 'danger') {
  classes.push(`bg-danger text-white`)
}

const indicatorClasses: string[] = []
indicatorClasses.push(`bg-${props.colorIndicator}`)
if (props.size === 'xs') {
  indicatorClasses.push('h-3 w-3')
  avatarClasses.push('avatar-xs')
} else if (props.size === 'sm') {
  indicatorClasses.push('h-3 w-3')
  avatarClasses.push('avatar-sm')
} else if (props.size === 'md') {
  indicatorClasses.push('h-4 w-4')
  avatarClasses.push('avatar-md')
} else if (props.size === 'lg') {
  indicatorClasses.push('h-5 w-5')
  avatarClasses.push('avatar-lg')
} else if (props.size === 'xl') {
  indicatorClasses.push('h-6 w-6')
  avatarClasses.push('avatar-xl')
} else if (props.size === '2xl') {
  indicatorClasses.push('h-7 w-7')
  avatarClasses.push('avatar-2xl')
}

const initial = (name: string) => {
  if (name) {
    const arrName = name.split(' ', 2)
    if (arrName.length === 2) {
      return arrName[0]!.substring(0, 1) + arrName[1]!.substring(0, 1)
    }

    return name.substring(0, 2)
  }
}
</script>

<template>
  <div class="avatar" :class="avatarClasses">
    <img v-if="src" class="avatar-ring avatar-2xl" :src="src" :class="classes" />
    <span v-else class="avatar-initial" :class="classes">
      {{ initial(name) }}
    </span>
    <span v-if="indicator" class="avatar-indicator" :class="indicatorClasses"></span>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/avatar.css');
@import url('../assets/css/components/mask.css');
</style>
