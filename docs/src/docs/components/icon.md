---
outline: deep
---

<script setup lang="ts">
import IconExample from './demo/icon/icon-example.vue'
</script>

# Icon

We use Iconify and Fontawesome as our data source of icons. You can refer to [Icônes](https://icones.js.org/) or [Iconify](https://icon-sets.iconify.design/) for all the collections available.

## Examples

<!--@include: ./demo/icon/icon-example.md-->

## Icon API

### Props

| Name       | Type    | Default | Description               |
| ---------- | ------- | ------- | ------------------------- |
| icon       | string  |         | Icon class is `required`. |
| fixedWidth | boolean | true    | Icon fixed width.         |
