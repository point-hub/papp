<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
    />
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="square"
      name="John Doe"
    />
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="squircle"
      name="John Doe"
    />
  </Demo>
</template>
