<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseBadge" variant="fill">
      Available Books <base-icon icon="i-fad-books" />
    </component>
    <component :is="BaseBadge" variant="fill" color="success">
      <base-icon icon="i-far-check" /> Success
    </component>
  </Demo>
</template>
