<script setup lang="ts">
import { BaseAvatar, BaseAvatarGroup } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseAvatarGroup">
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" />
      <component
        :is="BaseAvatar"
        src="https://placehold.co/150"
        name="John Doe"
        colorIndicator="danger"
      />
    </component>
  </Demo>
</template>
