<script setup lang="ts">
import { BaseIcon } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseIcon" icon="i-fas-spinner" class="h-8 w-8 animate-spin" />
    <component :is="BaseIcon" icon="i-fas-spinner-third" class="h-8 w-8 animate-spin" />
    <component :is="BaseIcon" icon="i-fas-arrows-spin" class="h-8 w-8 animate-spin" />
    <component :is="BaseIcon" icon="i-fas-gear" class="h-8 w-8 animate-spin" />
  </Demo>
</template>
