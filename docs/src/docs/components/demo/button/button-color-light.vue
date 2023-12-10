<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" variant="light" color="primary">Primary</component>
    <component :is="BaseButton" variant="light" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="light" color="info">Info</component>
    <component :is="BaseButton" variant="light" color="success">Success</component>
    <component :is="BaseButton" variant="light" color="warning">Warning</component>
    <component :is="BaseButton" variant="light" color="danger">Danger</component>
  </Demo>
</template>
