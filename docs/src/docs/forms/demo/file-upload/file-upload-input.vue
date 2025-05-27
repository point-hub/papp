<script setup lang="ts">
interface HTMLInputEvent extends Event {
  target: HTMLInputElement
}

const onUpload = (e: HTMLInputEvent) => {
  console.log(e.target.files)
}
</script>

<template>
  <Demo>
    <base-file-upload @change="onUpload" />
  </Demo>
</template>
