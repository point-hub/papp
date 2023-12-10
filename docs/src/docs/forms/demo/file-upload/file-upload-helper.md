::: raw

<ClientOnly>
  <FileUploadHelper />
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
  <component :is="BaseFileUpload" @change="onUpload" label="Label" required />
  <component
    :is="BaseFileUpload"
    @change="onUpload"
    label="Label"
    description="Description Example"
  />
  <component :is="BaseFileUpload" @change="onUpload" label="Label" helper="Helper Example" />
  <component :is="BaseFileUpload" @change="onUpload" label="Label" error="Error Example" />
</template>
```

:::
