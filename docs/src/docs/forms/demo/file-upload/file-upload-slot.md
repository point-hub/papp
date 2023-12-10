::: raw

<ClientOnly>
  <FileUploadSlot />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseFileUpload, BaseButton, BaseIcon } from '@point-hub/papp'
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
  <component
    :is="BaseFileUpload"
    @change="onUpload"
    label="Label"
    description="Horizontal Layout"
    layout="horizontal"
  >
    <template v-slot="{ fileRef }">
      <component :is="BaseButton" size="sm" @click="fileRef.click()">
        <component :is="BaseIcon" icon="i-far-arrow-up-from-bracket" /> Choose File
      </component>
      <p class="ml-2" v-if="files">
        {{ files.length === 1 ? files[0].name : files.length + ' files' }}
      </p>
      <component
        v-if="files"
        :is="BaseIcon"
        icon="i-far-xmark"
        class="ml-2 btn"
        @click="() => (files = null)"
      />
    </template>
  </component>
</template>
```

:::
