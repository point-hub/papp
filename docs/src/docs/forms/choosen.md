---
outline: deep
---

<script setup lang="ts">
import ChoosenExample from './demo/choosen/choosen-example.vue'
</script>

# Choosen

Choosen is select with modal dialog gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

## Examples

### Choosen

<!--@include: ./demo/choosen/choosen-example.md-->

## Choosen API

### Props

| Name           | Type                    | Default    | Description                    |
|----------------|-------------------------|------------|--------------------------------|
| v-model        | string                  |            | v-model is `required`.         |
| v-model:errors | string[]                |            | Input error message.           |
| mode           | `input` `text`          | `input`    | Choosen mode.                  |
| label          | string                  |            | Choosen label.                 |
| label          | string                  |            | Choosen label.                 |
| text           | string                  |            | Choosen text.                  |
| description    | string                  |            | Input description.             |
| placeholder    | string                  |            | Input placeholder.             |
| layout         | `horizontal` `vertical` | `vertical` | Input layout.                  |
| required       | boolean                 | false      | if true choosen is `required`. |
| disabled       | boolean                 | false      | if true choosen is `disabled`. |
| helpers        | string[]                |            | Input helper message.          |
