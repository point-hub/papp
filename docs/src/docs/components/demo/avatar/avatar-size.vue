<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="2xl"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="xl"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="lg"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="md"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="sm"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="xs"
    />
  </Demo>
</template>
