The Collapse component is used to create regions of content that can expand/collapse with a simple animation. It helps to hide content that's not immediately relevant to the user.

::: raw

<AccordionAlwaysOpen />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAccordion, BaseAccordionItem } from '@point-hub/papp'
</script>

<template>
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
</template>
```

:::
