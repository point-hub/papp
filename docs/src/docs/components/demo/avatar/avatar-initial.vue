<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseAvatar" name="John" />
    <component :is="BaseAvatar" name="John Doe" />
    <component :is="BaseAvatar" name="John Doe Rock" />
  </Demo>
</template>
