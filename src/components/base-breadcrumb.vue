<script setup lang="ts">
export interface BaseBreadcrumbItemInterface {
  name: string
  path?: string
}
export type BaseBreadcrumbSeparatoryType = 'angle' | 'arrow' | 'slash'

const props = withDefaults(
  defineProps<{
    items: BaseBreadcrumbItemInterface[]
    separator: BaseBreadcrumbSeparatoryType
  }>(),
  {
    separator: 'angle'
  }
)
</script>

<template>
  <ul class="breadcrumb-ul">
    <li v-for="(item, index) in props.items" :key="index" class="breadcrumb-li">
      <span class="whitespace-nowrap" :class="{ 'breadcrumb-link': item.path }">
        <slot :index="index" :item="item"></slot>
      </span>
      <i v-if="index + 1 < props.items.length" class="block breadcrumb-separator" :class="{
        'i-fa7-solid:angle-right': separator === 'angle',
        'i-fa7-solid:arrow-right': separator === 'arrow',
        'i-fa7-solid:slash-forward': separator === 'slash'
      }"></i>
    </li>
  </ul>
</template>

<style scoped>
@import url('../assets/css/components/breadcrumb.css');
</style>
