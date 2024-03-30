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
import { BaseButton } from '@point-hub/papp'

const isLoading = ref(true)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>

<template>
  <div>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="filled"
    >
      Filled Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="light"
    >
      Light Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="outlined"
    >
      Outlined Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="text"
    >
      Text Button
    </component>
  </div>
</template>
```

:::
