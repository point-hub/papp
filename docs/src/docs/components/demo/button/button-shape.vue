<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" shape="sharp">Sharp</component>
    <component :is="BaseButton" shape="round">Round</component>
    <component :is="BaseButton" shape="pill">Pill Button</component>
  </Demo>
</template>
