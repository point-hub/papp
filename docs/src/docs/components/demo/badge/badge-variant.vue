<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseBadge" variant="fill">Filled</component>
    <component :is="BaseBadge" variant="outline">Outlined</component>
    <component :is="BaseBadge" variant="light">Light</component>
  </Demo>
</template>
