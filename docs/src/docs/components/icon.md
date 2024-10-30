---
outline: deep
---

<script setup lang="ts">
import IconFontawesome from './demo/icon/icon-fontawesome.vue'
import IconIcones from './demo/icon/icon-icones.vue'
</script>

# Icon

We use Iconify and Fontawesome as our data source of icons.

## Fontawesome

Font Awesome is the Internet's icon library

<!--@include: ./demo/icon/icon-fontawesome.md-->

## Icones

You can refer to [Icônes](https://icones.js.org/) or [Iconify](https://icon-sets.iconify.design/) for all the collections available.

<!--@include: ./demo/icon/icon-icones.md-->

## Icon API

### Props

| Name       | Type    | Default | Description                   |
| ---------- | ------- | ------- | ----------------------------- |
| icon       | string  |         | Icon attribute is `required`. |
| fixedWidth | boolean | true    | Icon fixed width.             |
