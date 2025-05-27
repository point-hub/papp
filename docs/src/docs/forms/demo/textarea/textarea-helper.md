::: raw

<ClientOnly>
  <TextareaHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: ''
})

const errors = ref(['Error Example'])
</script>

<template>
  <form @submit.prevent="">
    <base-textarea required label="Label" v-model="form.text1" />
    <base-textarea placeholder="Placeholder Example" label="Label" v-model="form.text2" />
    <base-textarea description="Description Example" label="Label" v-model="form.text3" />
    <base-textarea :helpers="['Helper Example']" label="Label" v-model="form.text4" />
    <base-textarea v-model:errors="errors" label="Label" v-model="form.text5" />
    <base-textarea label="Label" v-model="form.text6" description="Disabled" disabled />
  </form>
</template>
```

:::
