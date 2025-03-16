<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="primary"
    />
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="secondary"
    />
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="info"
    />
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="success"
    />
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="warning"
    />
    <component
      :is="BaseAvatar"
      src="https://placehold.co/150"
      name="John Doe"
      indicator
      colorIndicator="danger"
    />
  </Demo>
</template>
