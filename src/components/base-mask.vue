<script setup lang="ts">
export type BaseMaskShapeType =
  | 'squircle'
  | 'diamond'
  | 'reuleaux-triangle'
  | 'hexagon'
  | 'hexagon-2'
  | 'heart'
  | 'octagon'
  | 'star'
  | 'star-2'

interface Props {
  shape: BaseMaskShapeType
  src: string
}

defineProps<Props>()
</script>

<template>
  <img
    class="mask"
    :class="{
      'mask-squircle': shape === 'squircle',
      'mask-diamond': shape === 'diamond',
      'mask-reuleaux-triangle': shape === 'reuleaux-triangle',
      'mask-hexagon': shape === 'hexagon',
      'mask-hexagon-2': shape === 'hexagon-2',
      'mask-heart': shape === 'heart',
      'mask-octagon': shape === 'octagon',
      'mask-star': shape === 'star',
      'mask-star-2': shape === 'star-2'
    }"
    :src="src"
  />
</template>

<style scoped>
@import url('../assets/css/components/mask.css');
</style>
