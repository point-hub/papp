<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <Demo class="flex-row">
    <component :is="BaseCard">
      <template #header>Rounded</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>

    <component :is="BaseCard" shape="sharp">
      <template #header>Sharp</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>
  </Demo>
</template>
