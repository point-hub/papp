---
outline: deep
---

<script setup lang="ts">
import IconIconify from './demo/icon/icon-iconify.vue'
</script>

# Icon

We use Iconify as our data source of icons.

## Iconify

You can refer to [Iconify](https://icon-sets.iconify.design/) or [Icônes](https://icones.js.org/) for all the collections available.

<!--@include: ./demo/icon/icon-iconify.md-->

## Icon API

### Props

| Name       | Type    | Default | Description                   |
| ---------- | ------- | ------- | ----------------------------- |
| icon       | string  |         | Icon attribute is `required`. |
| fixedWidth | boolean | true    | Icon fixed width.             |
