<script setup lang="ts">
import { BaseDatepicker } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  date1: '',
  date2: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseDatepicker"
        v-model="form.date1"
        label="Date"
        layout="vertical"
        description="Vertical Layout"
      />
      <component
        :is="BaseDatepicker"
        v-model="form.date2"
        label="Date"
        layout="horizontal"
        description="Horizontal Layout"
      />
    </form>
  </Demo>
</template>
