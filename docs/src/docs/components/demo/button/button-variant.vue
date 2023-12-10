<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" variant="fill">Filled</component>
    <component :is="BaseButton" variant="outline">Outlined</component>
    <component :is="BaseButton" variant="light">Light</component>
    <component :is="BaseButton" variant="text">Text</component>
  </Demo>
</template>
