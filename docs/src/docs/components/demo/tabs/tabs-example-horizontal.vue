<template>
  <Demo>
    <base-tab-group as="div" class="flex flex-row gap-6">
      <base-tab-list class="flex flex-col gap-2 w-48">
        <base-tab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Home
          </a>
        </base-tab>
        <base-tab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Profile
          </a>
        </base-tab>
        <base-tab as="template" v-slot="{ selected }">
          <a
            href="javascript:void(0);"
            class="block rounded-md px-4 py-2 transition-all duration-300 !outline-none"
            :class="{ '!bg-primary text-white': selected }"
          >
            Contact
          </a>
        </base-tab>
      </base-tab-list>
      <base-tab-panels class="flex-1 text-sm">
        <base-tab-panel>
          <h4 class="text-2xl font-semibold">Home</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </base-tab-panel>
        <base-tab-panel>
          <h4 class="text-2xl font-semibold">Profile</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum
            velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Lectus arcu bibendum at
            varius vel pharetra vel. Consectetur lorem donec massa sapien faucibus et.
          </p>
        </base-tab-panel>
        <base-tab-panel>
          <h4 class="text-2xl font-semibold">Contact</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet.
            Ultrices vitae auctor eu augue ut lectus arcu bibendum.
          </p>
        </base-tab-panel>
      </base-tab-panels>
    </base-tab-group>
  </Demo>
</template>
