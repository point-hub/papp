<script setup lang="ts">
import { BaseTimeline, BaseTimelineContent } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseTimeline">
      <component :is="BaseTimelineContent">
        <template #point>
          <img src="https://placehold.co/150" alt="" class="mx-auto h-12 w-12 rounded-full" />
        </template>
        <template #content>
          <div>
            <h4 class="text-base font-bold">John Doe</h4>
            <p class="text-sm font-light">5 second</p>
          </div>
          <p class="font-light -mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </template>
      </component>
      <component :is="BaseTimelineContent">
        <template #point>
          <img src="https://placehold.co/150" alt="" class="mx-auto h-12 w-12 rounded-full" />
        </template>
        <template #content>
          <div>
            <h4 class="text-base font-bold">John Doe</h4>
            <p class="text-sm font-light">35 minute</p>
          </div>
          <p class="font-light -mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </template>
      </component>
    </component>
  </Demo>
</template>
