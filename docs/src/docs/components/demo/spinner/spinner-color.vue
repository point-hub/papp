<script setup lang="ts">
import { BaseSpinner } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseSpinner" color="primary">Primary</component>
    <component :is="BaseSpinner" color="secondary">Secondary</component>
    <component :is="BaseSpinner" color="info">Info</component>
    <component :is="BaseSpinner" color="success">Success</component>
    <component :is="BaseSpinner" color="warning">Warning</component>
    <component :is="BaseSpinner" color="danger">Danger</component>
  </Demo>
</template>
