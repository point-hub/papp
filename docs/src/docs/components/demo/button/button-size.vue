<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary" size="xs">Button xs</component>
    <component :is="BaseButton" color="primary" size="sm">Button sm</component>
    <component :is="BaseButton" color="primary" size="md">Button md</component>
    <component :is="BaseButton" color="primary" size="lg">Button lg</component>
    <component :is="BaseButton" color="primary" size="xl">Button xl</component>
  </Demo>
</template>
