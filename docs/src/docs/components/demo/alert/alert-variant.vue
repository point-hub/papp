<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAlert" variant="fill">Filled</component>
    <component :is="BaseAlert" variant="outline">Outlined</component>
    <component :is="BaseAlert" variant="light">Light</component>
  </Demo>
</template>
