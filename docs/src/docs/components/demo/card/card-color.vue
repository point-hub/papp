<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <Demo class="flex-row">
    <component :is="BaseCard" bg-color="#0000FF" title-color="white" body-color="white">
      <template #header>Blue</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>

    <component :is="BaseCard" bg-color="red" title-color="white" body-color="white">
      <template #header>Red</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>
  </Demo>
</template>
