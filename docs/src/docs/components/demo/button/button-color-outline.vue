<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" variant="outlined" color="primary">Primary</component>
    <component :is="BaseButton" variant="outlined" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="outlined" color="info">Info</component>
    <component :is="BaseButton" variant="outlined" color="success">Success</component>
    <component :is="BaseButton" variant="outlined" color="warning">Warning</component>
    <component :is="BaseButton" variant="outlined" color="danger">Danger</component>
  </Demo>
</template>
