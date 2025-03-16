<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseMask" shape="squircle" src="https://placehold.co/150" />
  </Demo>
</template>
