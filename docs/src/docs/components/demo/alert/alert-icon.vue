<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAlert" variant="light" color="info" icon="info" title="Important Info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut velit atque mollitia,
      adipisci deserunt, eaque, itaque iste et illo corporis nulla quos nostrum ducimus excepturi
      eveniet possimus? Asperiores, pariatur.
    </component>
  </Demo>
</template>
