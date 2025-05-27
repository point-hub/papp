::: raw

<ClientOnly>
  <FileUploadHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
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
  <base-file-upload @change="onUpload" label="Label" required />
  <base-file-upload @change="onUpload" label="Label" description="Description Example" />
  <base-file-upload @change="onUpload" label="Label" :helpers="['Helper Example']" />
  <base-file-upload @change="onUpload" label="Label" v-model:errors="errors" />
</template>
```

:::
