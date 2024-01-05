<script setup lang="ts"></script>

<template>
  <div class="timeline-body">
    <div class="timeline-point">
      <slot name="point"></slot>
    </div>
    <div class="timeline-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/timeline.css');
</style>
