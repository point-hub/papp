<script setup lang="ts">
import { BaseTab, BaseTabGroup, BaseTabList, BaseTabPanel, BaseTabPanels } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <BaseTabGroup as="div" class="flex flex-row gap-6">
      <BaseTabList class="flex flex-col gap-2 w-48">
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Home
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Profile
          </a>
        </BaseTab>
        <BaseTab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Contact
          </a>
        </BaseTab>
      </BaseTabList>
      <BaseTabPanels class="flex-1 text-sm">
        <BaseTabPanel>
          <h4 class="text-2xl font-semibold">Home</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="text-2xl font-semibold">Profile</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum
            velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Lectus arcu bibendum at
            varius vel pharetra vel. Consectetur lorem donec massa sapien faucibus et.
          </p>
        </BaseTabPanel>
        <BaseTabPanel>
          <h4 class="text-2xl font-semibold">Contact</h4>
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
