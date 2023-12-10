---
outline: deep
---

<script setup lang="ts">
import BreadcrumbExample from './demo/breadcrumb/breadcrumb-example.vue'
</script>

# Breadcrumb

The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

## Examples

<!--@include: ./demo/breadcrumb/breadcrumb-example.md-->

## Breadcrumb API

### Types

::: code-group

```ts [ItemInterface]
interface ItemInterface {
  name: string
  path?: string
}
```

```ts [SeparatorType]
type SeparatoryType = 'angle' | 'arrow' | 'slash'
```

:::

### Props

| Name      | Type            | Default | Description                     |
| --------- | --------------- | ------- | ------------------------------- |
| items     | ItemInterface[] |         | Breadcrumb items is `required`. |
| separator | SeparatorType   | `angle` | Breadcrumb Separator.           |

### Slot

`#default` slot for rendering breadcrumb content
