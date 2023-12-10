<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAlert" color="danger" title="Alert">This is alert message</component>
  </Demo>
</template>
