<script setup lang="ts">
import { BaseSwitch } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseSwitch" v-model="form.checked1" text="Label" />
      <component :is="BaseSwitch" v-model="form.checked2" text="Label" text-position="right" />
    </form>
  </Demo>
</template>
