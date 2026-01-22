---
outline: deep
---

<script setup lang="ts">
import PdfSignerBasic from './demo/pdf-signer/pdf-signer-basic.vue'
</script>

# Pdf Signer

Drag-and-drop PDF signing with fixed placement, non-overlapping markers, and PDF export. The layout combines upload controls, zoom, signer list, and a JSON sync channel so you can restore signature positions after reload.

## Example

<!--@include: ./demo/pdf-signer/pdf-signer-basic.md-->

## Pdf Signer API

### Types

```ts
export interface PdfSignerUser {
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

```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `users` | `PdfSignerUser[]` | built-in demo list | Signers that can be dragged to the canvas. |
| `currentUser` | `PdfSignerUser | null` | `null` | Active signer (locks signing to this user). |
| `pdfUrl` | `string` | `''` | PDF source URL to load immediately. |
| `enableUpload` | `boolean` | `true` | Show or hide the built-in upload control. |
| `signaturesJson` | `string` | `''` | JSON string representing signatures (used with `v-model:signaturesJson`). |

### Events

This component emits `update:signaturesJson` for v-model sync and signature lifecycle events. See the source if you need to hook into them.
