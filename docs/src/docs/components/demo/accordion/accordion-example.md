A basic accordion function.

::: raw

<ClientOnly>
  <AccordionExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAccordion, BaseAccordionItem } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseAccordion">
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
</template>
```

:::
