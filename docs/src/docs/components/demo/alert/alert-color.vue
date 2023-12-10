<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAlert" color="primary">Primary</component>
    <component :is="BaseAlert" color="secondary">Secondary</component>
    <component :is="BaseAlert" color="info">Info</component>
    <component :is="BaseAlert" color="success">Success</component>
    <component :is="BaseAlert" color="warning">Warning</component>
    <component :is="BaseAlert" color="danger">Danger</component>
  </Demo>
</template>
