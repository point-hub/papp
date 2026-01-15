---
outline: deep
---

<script setup lang="ts">
import PdfSignerBasic from './demo/pdf-signer/pdf-signer-basic.vue'
</script>

# SignPdf

Drag-and-drop PDF signing with fixed placement, non-overlapping markers, and PDF export. The layout combines upload controls, zoom, signer list, and a detail panel so users aged 20–45 can review and finish documents without switching pages.

## Example

<!--@include: ./demo/pdf-signer/pdf-signer-basic.md-->

## SignPdf API

### Types

```ts
export interface SignPdfUser {
  id: number | string
  name: string
  initials?: string
  role?: string
  label?: string
}

export interface PdfSignerSignature {
  id: string
  x: number
  y: number
  width: number
  height: number
  page: number
  userId: number | string | null
  name: string
  initials: string
  label?: string
  signed: boolean
}

export interface PdfSignerPersistence {
  uploadPdf?: (file: File) => Promise<{ pdfUrl: string; fileUrl?: string; fileName?: string }>
  createDocument?: (payload: { title: string; fileUrl?: string; ownerId: number | string | null }) => Promise<string>
  saveSignatureField?: (payload: {
    docId: string | null
    signature: PdfSignerSignature
    action: 'create' | 'update' | 'sign'
  }) => Promise<void>
  lockSignatures?: (docId: string | null, signatures: PdfSignerSignature[]) => Promise<void>
}
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `users` | `SignPdfUser[]` | built-in demo list | Signers that can be dragged to the canvas. |
| `fontUrl` | `string` | `/fonts/DancingScript.ttf` | Font used when exporting signed fields with Dancing Script initials. |
| `initialScale` | `number` | `0.8` | Initial zoom for the rendered page. |
| `minScale` | `number` | `0.6` | Minimum zoom level. |
| `maxScale` | `number` | `2.4` | Maximum zoom level. |
| `currentUser` | `SignPdfUser | null` | `null` | Active signer (locks signing to this user). |
| `pdfUrl` | `string` | `''` | PDF source URL to load immediately. |
| `documentId` | `string | null` | `null` | Existing document ID for persistence hooks. |
| `persistence` | `PdfSignerPersistence` | `undefined` | Optional persistence hooks (upload, save fields, etc.). |
| `enableUpload` | `boolean` | `true` | Show or hide the built-in upload control. |

### Events

| Event | Payload | When |
| --- | --- | --- |
| `signature:create` | `PdfSignerSignature` | A signature field is added to the canvas. |
| `signature:update` | `PdfSignerSignature` | A signature field finishes moving. |
| `signature:sign` | `PdfSignerSignature` | A signature field is signed by the active user. |

### Exposed methods

| Method | Returns | Description |
| --- | --- | --- |
| `getSignatures()` | `PdfSignerSignature[]` | Read all signature fields on the canvas. |
| `getDocumentId()` | `string | null` | Read the active document ID used by persistence. |
| `lockPositions()` | `void` | Lock signature positions to prevent dragging. |
