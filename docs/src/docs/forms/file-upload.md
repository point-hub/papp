---
outline: deep
---

<script setup lang="ts">
import FileUploadInput from './demo/file-upload/file-upload-input.vue'
import FileUploadLabel from './demo/file-upload/file-upload-label.vue'
import FileUploadHelper from './demo/file-upload/file-upload-helper.vue'
import FileUploadSlot from './demo/file-upload/file-upload-slot.vue'
</script>

# File Upload

Input elements with type "file" let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission.

## Examples

### Input

<!--@include: ./demo/file-upload/file-upload-input.md-->

### Label

<!--@include: ./demo/file-upload/file-upload-label.md-->

### Helper

<!--@include: ./demo/file-upload/file-upload-helper.md-->

### Slot

<!--@include: ./demo/file-upload/file-upload-slot.md-->

## File Upload API

### Types

```ts
export type BaseFileUploadBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                     | Default    | Description                  |
|----------------|--------------------------|------------|------------------------------|
| v-model:errors | string[]                 |            | Input error message.         |
| id             | string                   |            | Input id.                    |
| label          | string                   |            | Input label.                 |
| description    | string                   |            | Input description.           |
| border         | BaseFileUploadBorderType | `full`     | Input border.                |
| layout         | BaseFormLayoutType       | `vertical` | Input layout.                |
| multiple       | boolean                  | false      | Upload multiple files.       |
| autofocus      | boolean                  | false      | Focus input on page load.    |
| required       | boolean                  | false      | if true input is `required`. |
| disabled       | boolean                  | false      | if true input is `disabled`. |
| helpers        | string[]                 |            | Input helper message.        |

### Slot

`#default` slot for rendering custom file upload

### Event

`@change` event for choosen file upload
