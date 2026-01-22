Drag user chips into the canvas area to pin a signature where it belongs. This demo keeps signature positions in JSON so you can copy/paste them to restore after refresh. `SignPdf` handles upload, drag/drop, and signing UI.

::: raw

<ClientOnly>
  <PdfSignerBasic />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BasePdfSigner } from '@point-hub/papp'

const demoUsers = [
  { id: 'alya', name: 'Alya Rahma', initials: 'AR', label: 'Menyetujui' },
  { id: 'dimas', name: 'Dimas Pratama', initials: 'DP', label: 'Mengetahui' }
]
const currentUser = demoUsers[0]
const signaturesJson = ref('')
</script>

<template>
  <SignPdf v-model:signaturesJson="signaturesJson" :users="demoUsers" :current-user="currentUser" />
  <base-textarea
    v-model="signaturesJson"
    label="Signature JSON"
    layout="vertical"
    description="Paste to restore positions."
    class="mt-4"
    :minHeight="180"
    placeholder="Paste signature JSON di sini..."
    spellcheck="false"
  />
</template>
```

:::
