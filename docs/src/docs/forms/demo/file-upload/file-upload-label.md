::: raw

<ClientOnly>
  <FileUploadLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
interface HTMLInputEvent extends Event {
  target: HTMLInputElement
}

const onUpload = (e: HTMLInputEvent) => {
  console.log(e.target.files)
}
</script>

<template>
  <base-file-upload
    @change="onUpload"
    label="Label"
    description="Vertical Layout"
    layout="vertical"
  />
  <base-file-upload
    @change="onUpload"
    label="Label"
    description="Horizontal Layout"
    layout="horizontal"
  />
</template>
```

:::
