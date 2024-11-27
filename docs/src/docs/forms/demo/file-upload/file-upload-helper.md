::: raw

<ClientOnly>
  <FileUploadHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseFileUpload } from '@point-hub/papp'
import { ref } from 'vue'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement
}

const onUpload = (e: HTMLInputEvent) => {
  console.log(e.target.files)
}

const errors = ref<string[]>(['Errors'])
</script>

<template>
  <component :is="BaseFileUpload" @change="onUpload" label="Label" required />
  <component
    :is="BaseFileUpload"
    @change="onUpload"
    label="Label"
    description="Description Example"
  />
  <component
      :is="BaseFileUpload"
      @change="onUpload"
      label="Label"
      :helpers="['Helper Example']"
    />
    <component :is="BaseFileUpload" @change="onUpload" label="Label" v-model:errors="errors" />
</template>
```

:::
