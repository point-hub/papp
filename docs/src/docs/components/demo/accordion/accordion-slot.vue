<script setup lang="ts">
import { BaseAccordion, BaseAccordionItem } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAccordion">
      <component :is="BaseAccordionItem" :item-id="1">
        <template #title>Accordion #1</template>
        <template #default>Hello World</template>
      </component>
      <component :is="BaseAccordionItem" :item-id="2">
        <template #title>Accordion #2</template>
        <template #default>Hello World</template>
      </component>
      <component :is="BaseAccordionItem" :item-id="3">
        <template #title>Accordion #3</template>
        <template #default>Hello World</template>
      </component>
    </component>
  </Demo>
</template>
