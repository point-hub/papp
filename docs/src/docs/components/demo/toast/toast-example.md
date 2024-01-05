::: raw

<ClientOnly>
  <ToastExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseToast } from '@point-hub/papp'
import { ref } from 'vue'

const toastRef = ref()
</script>

<template>
  <Demo is-row>
    <component
      :is="BaseButton"
      color="primary"
      @click="
        toastRef.toast('Primary toast message', { color: 'primary', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="secondary"
      @click="
        toastRef.toast('Secondary toast message', {
          color: 'secondary',
          autoClose: false,
          timer: 0
        })
      "
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="info"
      @click="toastRef.toast('Info toast message', { color: 'info', autoClose: false, timer: 0 })"
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="success"
      @click="
        toastRef.toast('Success toast message', { color: 'success', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="warning"
      @click="
        toastRef.toast('Warning toast message', { color: 'warning', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="danger"
      @click="
        toastRef.toast('Danger toast message', { color: 'danger', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </component>
    <component
      :is="BaseButton"
      color="primary"
      @click="
        toastRef.toast('Close after 3 second', { color: 'primary', autoClose: true, timer: 3000 })
      "
    >
      Close after 3 second
    </component>
    <component :is="BaseToast" ref="toastRef" />
  </Demo>
</template>
```

:::
