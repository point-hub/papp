<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import type { OnClickOutsideOptions } from '@vueuse/core'
import { isDefined } from '@vueuse/core'
import { type Ref, ref } from 'vue'
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

const ignoreOutsideRef: Ref<HTMLElement | null> = ref(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onClickOutsideHandler: [(evt: any) => void, OnClickOutsideOptions] = [
  () => {
    toggle(false)
  },
  {
    ignore: [ignoreOutsideRef]
  }
]

const isOpen = defineModel('is-open', { default: false })
const toggle = (val?: boolean) => {
  if (isDefined(val)) {
    isOpen.value = val
    return
  }
  isOpen.value = !isOpen.value
}

defineExpose({ toggle, isOpen })
</script>

<template>
  <component :is="Popper" v-bind="$attrs" :placement="props.placement" :show="isOpen">
    <button ref="ignoreOutsideRef">
      <slot />
    </button>

    <template #content="contentProps">
      <div v-on-click-outside="onClickOutsideHandler">
        <slot name="content" v-bind="contentProps" />
      </div>
    </template>
  </component>
</template>
