---
outline: deep
---

<script setup lang="ts">
import PaginationExample from './demo/pagination/pagination-example.vue'
</script>

# Pagination

A pagination is a structured set of data made up of rows and columns (tabular data). A pagination allows you to quickly and easily look up values that indicate some kind of connection between different types of data

## Examples

<!--@include: ./demo/pagination/pagination-example.md-->

## Pagination API

### Props

| Name           | Type   | Default | Description                   |
| -------------- | ------ | ------- | ----------------------------- |
| v-model        | number |         | Page number is `required`.    |
| page-size      | number |         | Page size is `required`.      |
| total-document | number |         | Total document is `required`. |
| max-button     | number | 5       | Number of max buttons show.   |

### Event

`@update:model-value` event for choosen page
