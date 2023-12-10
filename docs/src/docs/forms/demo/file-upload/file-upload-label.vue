<script setup lang="ts">
import { BaseFileUpload } from '@point-hub/papp'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement
}

const onUpload = (e: HTMLInputEvent) => {
  console.log(e.target.files)
}
</script>

<template>
  <Demo>
    <component
      :is="BaseFileUpload"
      @change="onUpload"
      label="Label"
      description="Vertical Layout"
      layout="vertical"
    />
    <component
      :is="BaseFileUpload"
      @change="onUpload"
      label="Label"
      description="Horizontal Layout"
      layout="horizontal"
    />
  </Demo>
</template>
