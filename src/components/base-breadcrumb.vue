<script setup lang="ts">
export interface ItemInterface {
  name: string
  path?: string
}
export type SeparatoryType = 'angle' | 'arrow' | 'slash'

const props = withDefaults(
  defineProps<{
    items: ItemInterface[]
    separator: SeparatoryType
  }>(),
  {
    separator: 'angle'
  }
)
</script>

<template>
  <ul class="breadcrumb-ul">
    <li v-for="(item, index) in props.items" :key="index" class="breadcrumb-li">
      <slot :index="index" :item="item"></slot>
      <i
        v-if="index + 1 < props.items.length"
        class="block breadcrumb-separator"
        :class="{
          'i-fas-angle-right': separator === 'angle',
          'i-fas-arrow-right': separator === 'arrow',
          'i-fas-slash-forward': separator === 'slash'
        }"
      ></i>
    </li>
  </ul>
</template>
