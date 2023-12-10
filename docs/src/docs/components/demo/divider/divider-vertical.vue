<script setup lang="ts">
import { BaseDivider } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <div class="flex flex-col">
      Left Content
      <component :is="BaseDivider" orientation="vertical" />
      Middle Content
      <component :is="BaseDivider" orientation="vertical" />
      Right Content
    </div>
  </Demo>
</template>
