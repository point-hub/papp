<script setup lang="ts">
import { BaseBadge, BaseIcon } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseBadge" variant="fill">
      Available Books <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseBadge" variant="fill" color="success">
      <component :is="BaseIcon" icon="i-far-check" /> Success
    </component>
  </Demo>
</template>
