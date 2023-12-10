<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary" disabled>Disabled</component>
    <component :is="BaseButton" color="secondary" disabled>Disabled</component>
    <component :is="BaseButton" color="info" disabled>Disabled</component>
    <component :is="BaseButton" color="success" disabled>Disabled</component>
    <component :is="BaseButton" color="warning" disabled>Disabled</component>
    <component :is="BaseButton" color="danger" disabled>Disabled</component>
  </Demo>
</template>
