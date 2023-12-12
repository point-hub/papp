<script setup lang="ts">
import Popper from 'vue3-popper'

export type BasePopoverPlacementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export interface Props {
  placement?: BasePopoverPlacementType
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'bottom'
})
</script>

<template>
  <component :is="Popper" v-bind="$attrs" :placement="props.placement">
    <slot />
    <template #content="contentProps">
      <slot name="content" v-bind="contentProps" />
    </template>
  </component>
</template>
