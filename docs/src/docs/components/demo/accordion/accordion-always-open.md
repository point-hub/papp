The Collapse component is used to create regions of content that can expand/collapse with a simple animation. It helps to hide content that's not immediately relevant to the user.

::: raw

<ClientOnly>
  <AccordionAlwaysOpen />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-accordion :alwaysOpen="true">
    <base-accordion-item :item-id="1" title="Accordion #1" content="Hello World" />
    <base-accordion-item :item-id="2" title="Accordion #2" content="Hello World" />
    <base-accordion-item :item-id="3" title="Accordion #3" content="Hello World" />
  </base-accordion>
</template>
```

:::
