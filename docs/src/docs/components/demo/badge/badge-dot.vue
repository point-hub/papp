<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseBadge" withDot variant="filled">Filled</component>
    <component :is="BaseBadge" withDot variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot variant="light">Light</component>
    <component :is="BaseBadge" withDot color="secondary" variant="filled">Filled</component>
    <component :is="BaseBadge" withDot color="secondary" variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot color="secondary" variant="light">Light</component>
  </Demo>
  <Demo is-row>
    <component :is="BaseBadge" withDot color="info" variant="filled">Filled</component>
    <component :is="BaseBadge" withDot color="info" variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot color="info" variant="light">Light</component>
    <component :is="BaseBadge" withDot color="success" variant="filled">Filled</component>
    <component :is="BaseBadge" withDot color="success" variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot color="success" variant="light">Light</component>
  </Demo>
  <Demo is-row>
    <component :is="BaseBadge" withDot color="warning" variant="filled">Filled</component>
    <component :is="BaseBadge" withDot color="warning" variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot color="warning" variant="light">Light</component>
    <component :is="BaseBadge" withDot color="danger" variant="filled">Filled</component>
    <component :is="BaseBadge" withDot color="danger" variant="outlined">Outlined</component>
    <component :is="BaseBadge" withDot color="danger" variant="light">Light</component>
  </Demo>
</template>
