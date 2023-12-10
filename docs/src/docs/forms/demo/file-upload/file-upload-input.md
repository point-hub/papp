::: raw

<ClientOnly>
  <FileUploadInput />
</ClientOnly>

:::

::: details Code

```vue
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
  <component :is="BaseFileUpload" @change="onUpload" />
</template>
```

:::
