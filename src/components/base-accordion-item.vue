<script setup lang="ts">
import { inject, type Ref, ref, watch } from 'vue'

const alwaysOpen = inject('alwaysOpen') as Ref
const activeItemId = inject('activeItemId') as Ref

const PADDING_HEIGHT = 32

const contentRef = ref()
const height = ref(0)
const activeState = ref(false)

watch(activeItemId, () => {
  updateHeight()
  if (height.value === 0) {
    activeState.value = false
  }
})

const updateHeight = () => {
  if (activeState.value && height.value === 0) {
    height.value = contentRef.value.scrollHeight + PADDING_HEIGHT
  } else {
    height.value = 0
  }
}

const toggleCollapse = () => {
  activeState.value = !activeState.value
  if (alwaysOpen.value) {
    updateHeight()
    return
  }

  if (activeItemId.value !== props.itemId) {
    activeItemId.value = props.itemId
  } else {
    activeItemId.value = 0
  }
}

const props = withDefaults(
  defineProps<{
    itemId: number
    title?: string
    content?: string
  }>(),
  { title: '', content: '' }
)
</script>

<template>
  <div class="accordion-item">
    <base-button @click="toggleCollapse()" class="accordion-title" v-bind="$attrs">
      <slot name="title">
        <span>{{ props.title }}</span>
      </slot>
      <i
        class="accordion-collapse-item-icon i-fas-angle-down"
        :class="{
          'accordiont-collapse-item-icon-active': activeState
        }"
      ></i>
    </base-button>
    <div
      ref="contentRef"
      class="accordion-content"
      :class="{
        'accordion-content-active': activeState
      }"
      :style="{
        height: `${height}px`
      }"
    >
      <slot>
        {{ props.content }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/accordion.css');
</style>
