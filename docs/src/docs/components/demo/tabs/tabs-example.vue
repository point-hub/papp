<script setup lang="ts">
import { BaseTab, BaseTabGroup, BaseTabList, BaseTabPanel, BaseTabPanels } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <BaseTabGroup as="div" class="bg-slate-100 dark:bg-slate-800">
      <BaseTabList
        class="flex overflow-x-auto overflow-y-hidden pt-4 border-b border-slate-200 dark:border-[#191e3a] scrollbar-hidden"
      >
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-house" />
            Home
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-circle-user" />
            Profile
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none whitespace-nowrap"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-phone" />
            Contact 1
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none whitespace-nowrap"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-phone" />
            Contact 2
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none whitespace-nowrap"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-phone" />
            Contact 3
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none whitespace-nowrap"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-phone" />
            Contact 4
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="flex pb-2 px-4 gap-2 items-center -mb-[1px] !outline-none whitespace-nowrap"
            :class="{ 'border-b-3 !border-slate-500': selected }"
          >
            <base-icon icon="i-far-phone" />
            Contact 5
          </a>
        </BaseTab>
      </BaseTabList>
      <BaseTabPanels class="flex-1 text-sm p-4">
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Home</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Profile</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum
            velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Lectus arcu bibendum at
            varius vel pharetra vel. Consectetur lorem donec massa sapien faucibus et.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Contact 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Contact 2</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Contact 3</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Contact 4</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="mb-4 text-2xl font-semibold">Contact 5</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </BaseTabPanel>
      </BaseTabPanels>
    </BaseTabGroup>
  </Demo>
</template>
