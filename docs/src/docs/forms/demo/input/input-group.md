::: raw

<ClientOnly>
  <InputGroup />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseInput } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  name: '',
  password: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseInput"
        required
        v-model="form.name"
        label="Name"
        placeholder="Placeholder Name"
      >
        <template #prefix>
          <base-icon icon="i-far-user mx-2" />
        </template>
      </component>
      <component :is="BaseInput" required v-model="form.password" label="Password" type="password">
        <template #suffix>
          <component :is="BaseButton" variant="text">
            <base-icon icon="i-far-eye mx-2" />
          </component>
        </template>
      </component>
    </form>
  </Demo>
</template>
```

:::
