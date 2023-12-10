::: raw

<ModalExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseModal } from '@point-hub/papp'

const showModal = ref(false)
</script>

<template>
  <!-- Trigger Button -->
  <button class="btn btn-primary btn-md rounded-lg" @click="showModal = true">Open Modal</button>
  <!-- Modal Dialog -->
  <component :is="BaseModal" :is-open="showModal" @on-close="showModal = false">
    <div class="max-h-90vh overflow-auto p-4">
      <h2 class="py-4 text-2xl font-bold">Lorem Ipsum</h2>
      <div class="space-y-8">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium provident,
          blanditiis quam pariatur repellat? Animi ducimus fugit, similique libero et rem, quod
          repellat sunt itaque voluptas nihil saepe laboriosam?
        </p>
        <button class="btn btn-sm rounded-lg btn-primary btn-block" @click="showModal = false">
          Close
        </button>
      </div>
    </div>
  </component>
</template>
```

:::
