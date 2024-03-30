<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary" variant="filled">Filled</component>
    <component :is="BaseButton" color="primary" variant="outlined">Outlined</component>
    <component :is="BaseButton" color="primary" variant="light">Light</component>
    <component :is="BaseButton" color="primary" variant="text">Text</component>
  </Demo>
</template>
