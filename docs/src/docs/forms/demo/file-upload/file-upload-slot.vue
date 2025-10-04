<script setup lang="ts">
import { ref } from 'vue'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement
}

const files = ref()
const onUpload = (e: HTMLInputEvent) => {
  files.value = e.target.files
}
</script>

<template>
  <Demo>
    <base-file-upload @change="onUpload" label="Label" description="Horizontal Layout" layout="horizontal">
      <template v-slot="{ fileRef }">
        <base-button size="sm" @click="fileRef.click()">
          <base-icon icon="i-fa7-regular:arrow-up-from-bracket" /> Choose File
        </base-button>
        <p class="ml-2" v-if="files">
          {{ files.length === 1 ? files[0].name : files.length + ' files' }}
        </p>
        <base-icon v-if="files" icon="i-fa7-regular:xmark" class="ml-2 btn" @click="() => (files = null)" />
      </template>
    </base-file-upload>
  </Demo>
</template>
