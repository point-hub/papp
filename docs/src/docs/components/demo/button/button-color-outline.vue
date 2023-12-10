<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" variant="outline" color="primary">Primary</component>
    <component :is="BaseButton" variant="outline" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="outline" color="info">Info</component>
    <component :is="BaseButton" variant="outline" color="success">Success</component>
    <component :is="BaseButton" variant="outline" color="warning">Warning</component>
    <component :is="BaseButton" variant="outline" color="danger">Danger</component>
  </Demo>
</template>
