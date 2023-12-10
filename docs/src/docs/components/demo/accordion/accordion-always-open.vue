<script setup lang="ts">
import { BaseAccordion } from '@point-hub/papp'
import { BaseAccordionItem } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAccordion" :alwaysOpen="true">
      <component
        :is="BaseAccordionItem"
        :item-id="1"
        title="Accordion #1"
        content="Hello World"
      ></component>
      <component
        :is="BaseAccordionItem"
        :item-id="2"
        title="Accordion #2"
        content="Hello World"
      ></component>
      <component
        :is="BaseAccordionItem"
        :item-id="3"
        title="Accordion #3"
        content="Hello World"
      ></component>
    </component>
  </Demo>
</template>
