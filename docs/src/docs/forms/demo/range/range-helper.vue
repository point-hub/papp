<script setup lang="ts">
import { BaseRange } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  volume: 50
})

const errors = ref(['Example Error'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseRange"
        description="Example Description"
        v-model="form.volume"
        label="Volume"
      />
      <component
        :is="BaseRange"
        :helpers="['Example Helper']"
        v-model="form.volume"
        label="Volume"
      />
      <component :is="BaseRange" v-model:errors="errors" v-model="form.volume" label="Volume" />
    </form>
  </Demo>
</template>
