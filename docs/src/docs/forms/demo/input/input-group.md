::: raw

<ClientOnly>
  <InputGroup />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  password: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-input required v-model="form.name" label="Name" placeholder="Placeholder Name">
        <template #prefix>
          <base-icon icon="i-far-user mx-2" />
        </template>
      </base-input>
      <base-input required v-model="form.password" label="Password" type="password">
        <template #suffix>
          <base-button variant="text">
            <base-icon icon="i-far-eye mx-2" />
          </base-button>
        </template>
      </base-input>
    </form>
  </Demo>
</template>
```

:::
