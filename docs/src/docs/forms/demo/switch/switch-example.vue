<script setup lang="ts">
import { BaseSwitch } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  checked: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseSwitch" v-model="form.checked" />
    </form>
  </Demo>
</template>
