<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

export type BaseDropdownPosition = 'left' | 'right'

export interface Props {
  position?: BaseDropdownPosition
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  text: 'Options'
})
</script>

<template>
  <Menu as="div" class="dropdown-menu">
    <div>
      <MenuButton>
        <slot name="trigger">
          <div class="dropdown-trigger-button">
            <span>{{ text }}</span>
            <i class="i-far-angle-down"></i>
          </div>
        </slot>
      </MenuButton>
    </div>

    <transition>
      <MenuItems
        class="dropdown-items"
        :class="{ 'left-0': props.position === 'left', 'right-0': props.position === 'right' }"
      >
        <slot></slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
