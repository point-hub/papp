<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" isBlock color="primary">Primary</component>
    <component :is="BaseButton" isBlock color="secondary">Secondary</component>
    <component :is="BaseButton" isBlock color="info">Info</component>
    <component :is="BaseButton" isBlock color="success">Success</component>
    <component :is="BaseButton" isBlock color="warning">Warning</component>
    <component :is="BaseButton" isBlock color="danger">Danger</component>
  </Demo>
</template>
