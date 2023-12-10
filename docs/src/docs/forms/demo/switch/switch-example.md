::: raw

<SwitchExample />

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
    <component :is="BaseSwitch" v-model="form.checked" />
  </form>
</template>
```

:::
