<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <Demo class="flex-row">
    <component :is="BaseCard" :shadow="true">
      <template #header>With Shadow</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>

    <component :is="BaseCard">
      <template #header>Without Shadow</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </component>
  </Demo>
</template>
