<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary">Primary</component>
    <component :is="BaseButton" color="secondary">Secondary</component>
    <component :is="BaseButton" color="info">Info</component>
    <component :is="BaseButton" color="success">Success</component>
    <component :is="BaseButton" color="warning">Warning</component>
    <component :is="BaseButton" color="danger">Danger</component>
  </Demo>
</template>
