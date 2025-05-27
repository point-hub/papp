::: raw

<ClientOnly>
  <FileUploadInput />
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
  <base-file-upload @change="onUpload" />
</template>
```

:::
