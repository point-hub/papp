<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary" shape="sharp">Sharp</component>
    <component :is="BaseButton" color="primary" shape="rounded">Rounded</component>
    <component :is="BaseButton" color="primary" shape="pill">Pill Button</component>
  </Demo>
</template>
