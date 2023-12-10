::: raw

<TextareaHelper />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextarea } from '@point-hub/papp'

const form = ref({
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseTextarea" required label="Label" v-model="form.text1" />
    <component
      :is="BaseTextarea"
      placeholder="Placeholder Example"
      label="Label"
      v-model="form.text2"
    />
    <component
      :is="BaseTextarea"
      description="Description Example"
      label="Label"
      v-model="form.text3"
    />
    <component
      :is="BaseTextarea"
      :helpers="['Helper Example']"
      label="Label"
      v-model="form.text4"
    />
    <component
      :is="BaseTextarea"
      label="Label"
      v-model="form.text6"
      description="Disabled"
      disabled
    />
  </form>
</template>
```

:::
