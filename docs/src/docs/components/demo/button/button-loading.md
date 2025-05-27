Button can have loading indicator. Click the button to trigger loading start / stop.

::: raw

<ClientOnly>
  <ButtonLoading />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(true)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>

<template>
  <div>
    <base-button @click="toggleLoading()" :is-loading="isLoading" color="primary" variant="filled">
      Filled Button
    </base-button>
    <base-button @click="toggleLoading()" :is-loading="isLoading" color="primary" variant="light">
      Light Button
    </base-button>
    <base-button
      @click="toggleLoading()"
      :is-loading="isLoading"
      color="primary"
      variant="outlined"
    >
      Outlined Button
    </base-button>
    <base-button @click="toggleLoading()" :is-loading="isLoading" color="primary" variant="text">
      Text Button
    </base-button>
  </div>
</template>
```

:::
