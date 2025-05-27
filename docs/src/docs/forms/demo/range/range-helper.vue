<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  volume: 50
})

const errors = ref(['Example Error'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-range description="Example Description" v-model="form.volume" label="Volume" />
      <base-range :helpers="['Example Helper']" v-model="form.volume" label="Volume" />
      <base-range v-model:errors="errors" v-model="form.volume" label="Volume" />
    </form>
  </Demo>
</template>
