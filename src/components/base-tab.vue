<script setup lang="ts">
import { Tab } from '@headlessui/vue'
</script>

<template>
  <Tab as="template" v-slot="{ selected }">
    <slot :selected="selected"></slot>
  </Tab>
</template>
