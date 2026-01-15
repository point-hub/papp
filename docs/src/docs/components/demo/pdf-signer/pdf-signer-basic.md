Drag user chips into the canvas area to pin a signature where it belongs. In this demo, the page only provides persistence callbacks. `SignPdf` takes care of the upload UI, drag/drop, and saving signature fields automatically.

How it works:
- Upload a PDF using the built-in upload control.
- Drag a signer into the PDF to create a signature field.
- The component saves fields as they are created or updated.

::: raw

<ClientOnly>
  <PdfSignerBasic />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { SignPdf } from '@point-hub/papp'

const demoUsers = [
  { id: 'alya', name: 'Alya Rahma', initials: 'AR', label: 'Menyetujui' },
  { id: 'dimas', name: 'Dimas Pratama', initials: 'DP', label: 'Mengetahui' }
]
const currentUser = demoUsers[0]

const persistence = {
  uploadPdf: async (file: File) => {
    // Upload to your storage and return the PDF URL.
    return { pdfUrl: 'https://.../your.pdf', fileUrl: 'storage/..', fileName: file.name }
  },
  createDocument: async ({ title, fileUrl, ownerId }) => {
    // Save document metadata to your DB and return the document ID.
    return 'docId'
  },
  saveSignatureField: async ({ docId, signature }) => {
    // Persist each field (page, x, y, width, height, assignedTo, signed, signedAt).
  }
}
</script>

<template>
  <SignPdf :users="demoUsers" :current-user="currentUser" :persistence="persistence" />
</template>
```

:::
