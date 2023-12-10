<script setup lang="ts">
import { BaseDivider } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <div class="flex">
      Left Content
      <component :is="BaseDivider" orientation="horizontal" />
      Middle Content
      <component :is="BaseDivider" orientation="horizontal" />
      Right Content
    </div>
  </Demo>
</template>
