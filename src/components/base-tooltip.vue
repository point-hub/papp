<script setup lang="ts">
import { Tippy } from 'vue-tippy'

export interface Props {
  content?: string
  interactive?: boolean
  zIndex?: number
}

withDefaults(defineProps<Props>(), {
  interactive: true,
  zIndex: 9999
})
</script>

<template>
  <tippy :content="content" :interactive="true" :z-index="zIndex">
    <slot></slot>
    <template #content v-if="!content">
      <slot name="content"></slot>
    </template>
  </tippy>
</template>
