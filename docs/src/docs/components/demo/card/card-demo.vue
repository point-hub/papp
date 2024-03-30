<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseCard">
      <template #header>Card Title</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis porro laudantium ea quisquam
      nulla recusandae quidem sit obcaecati incidunt expedita temporibus voluptatibus quas cumque
      doloribus, enim magni nobis dolorum libero.
    </component>
  </Demo>
</template>
