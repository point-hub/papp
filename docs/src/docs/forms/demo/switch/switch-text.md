::: raw

<ClientOnly>
  <SwitchText />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseSwitch } from '@point-hub/papp'

const form = ref({
  checked: false
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseSwitch" v-model="form.checked" text="Label" />
    <component :is="BaseSwitch" v-model="form.checked" text="Label" text-position="right" />
  </form>
</template>
```

:::
