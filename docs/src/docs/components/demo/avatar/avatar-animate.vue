<script setup lang="ts">
import { BaseAvatar, BaseAvatarGroup } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseAvatarGroup">
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component
        :is="BaseAvatar"
        src="https://placehold.co/150"
        name="John Doe"
        animate
        colorIndicator="danger"
      />
    </component>
  </Demo>
</template>
