<script setup lang="ts">
withDefaults(
  defineProps<{
    shadow?: boolean
  }>(),
  {
    shadow: true
  }
)
</script>

<template>
  <div class="card" :class="{ 'card-shadow ': shadow }">
    <div class="card-header">
      <h1>
        <slot name="header"></slot>
      </h1>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/card.css');
</style>
