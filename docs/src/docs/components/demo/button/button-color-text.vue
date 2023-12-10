<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" variant="text" color="primary">Primary</component>
    <component :is="BaseButton" variant="text" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="text" color="info">Info</component>
    <component :is="BaseButton" variant="text" color="success">Success</component>
    <component :is="BaseButton" variant="text" color="warning">Warning</component>
    <component :is="BaseButton" variant="text" color="danger">Danger</component>
  </Demo>
</template>
