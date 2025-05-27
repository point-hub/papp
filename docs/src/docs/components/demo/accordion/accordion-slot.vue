<template>
  <Demo>
    <base-accordion>
      <base-accordion-item :item-id="1">
        <template #title>Accordion #1</template>
        <template #default>Hello World</template>
      </base-accordion-item>
      <base-accordion-item :item-id="2">
        <template #title>Accordion #2</template>
        <template #default>Hello World</template>
      </base-accordion-item>
      <base-accordion-item :item-id="3">
        <template #title>Accordion #3</template>
        <template #default>Hello World</template>
      </base-accordion-item>
    </base-accordion>
  </Demo>
</template>
