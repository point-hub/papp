::: raw

<TabsExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseTabGroup, BaseTabList, BaseTab, BaseTabPanels, BaseTabPanel } from '@point-hub/papp'
</script>

<template>
  <BaseTabGroup as="div" class="bg-slate-100">
    <BaseTabList class="flex flex-wrap pt-4 border-b border-slate-200 dark:border-[#191e3a]">
      <BaseTab as="template" v-slot="{ selected }">
        <a
          href="javascript:void(0);"
          class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none"
          :class="{ 'border-b-2 !border-slate-500': selected }"
        >
          <i class="i-far-house"></i>
          Home
        </a>
      </BaseTab>
      <BaseTab as="template" v-slot="{ selected }">
        <a
          href="javascript:void(0);"
          class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none"
          :class="{ 'border-b-2 !border-slate-500': selected }"
        >
          <i class="i-far-circle-user"></i>
          Profile
        </a>
      </BaseTab>
      <BaseTab as="template" v-slot="{ selected }">
        <a
          href="javascript:void(0);"
          class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none"
          :class="{ 'border-b-2 !border-slate-500': selected }"
        >
          <i class="i-far-phone"></i>
          Contact
        </a>
      </BaseTab>
    </BaseTabList>
    <BaseTabPanels class="flex-1 text-sm p-4">
      <BaseTabPanel>
        <h4 class="mb-4 text-2xl font-semibold">Home</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </BaseTabPanel>
      <BaseTabPanel>
        <h4 class="mb-4 text-2xl font-semibold">Profile</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit. Nunc sed
          blandit libero volutpat sed cras ornare arcu. Lectus arcu bibendum at varius vel pharetra
          vel. Consectetur lorem donec massa sapien faucibus et.
        </p>
      </BaseTabPanel>
      <BaseTabPanel>
        <h4 class="mb-4 text-2xl font-semibold">Contact</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Ultrices
          vitae auctor eu augue ut lectus arcu bibendum.
        </p>
      </BaseTabPanel>
    </BaseTabPanels>
  </BaseTabGroup>
</template>
```

:::
