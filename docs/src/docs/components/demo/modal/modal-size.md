::: raw

<ClientOnly>
  <ModalSize />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { type BaseModalSizeType } from '@point-hub/papp'
import { ref } from 'vue'

const showModal = ref(false)
let sizeModal: BaseModalSizeType = 'md'
const openModal = (size: BaseModalSizeType) => {
  sizeModal = size
  showModal.value = true
}
</script>

<template>
  <Demo is-row>
    <base-button size="md" color="primary" @click="openModal('sm')">SM</base-button>
    <base-button size="md" color="primary" @click="openModal('md')">MD</base-button>
    <base-button size="md" color="primary" @click="openModal('lg')">LG</base-button>
    <base-button size="md" color="primary" @click="openModal('xl')">XL</base-button>
    <base-button size="md" color="primary" @click="openModal('full')"> Full </base-button>
    <base-button size="md" color="primary" @click="openModal('maximize')"> Maximize </base-button>
    <base-modal :is-open="showModal" @on-close="showModal = false" :size="sizeModal">
      <div class="max-h-90vh overflow-auto p-4">
        <h2 class="py-4 text-2xl font-bold">Lorem Ipsum</h2>
        <div class="space-y-8">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium provident,
            blanditiis quam pariatur repellat? Animi ducimus fugit, similique libero et rem, quod
            repellat sunt itaque voluptas nihil saepe laboriosam?
          </p>
          <base-button size="md" color="primary" @click="showModal = false" is-block>
            Close
          </base-button>
        </div>
      </div>
    </base-modal>
  </Demo>
</template>
```

:::
