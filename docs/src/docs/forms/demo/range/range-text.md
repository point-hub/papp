Show value text

::: raw

<ClientOnly>
  <RangeText />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  volume: 50
})
</script>

<template>
  <form @submit.prevent="">
    <base-range v-model="form.volume" label="Volume" showText />
  </form>
</template>
```

:::
