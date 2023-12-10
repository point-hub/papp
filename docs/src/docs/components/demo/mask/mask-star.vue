<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseMask" shape="star" src="https://via.placeholder.com/150" />
    <component :is="BaseMask" shape="star-2" src="https://via.placeholder.com/150" />
  </Demo>
</template>
