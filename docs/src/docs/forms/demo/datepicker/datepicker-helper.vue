<script setup lang="ts">
import { BaseDatepicker } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  date: ''
})

const errors = ref(['Error Example'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseDatepicker" v-model="form.date" label="Date" required />
      <component
        :is="BaseDatepicker"
        v-model="form.date"
        label="Date"
        description="Description Example"
      />
      <component
        :is="BaseDatepicker"
        v-model="form.date"
        label="Date"
        :helpers="['Helper Example']"
      />
      <component :is="BaseDatepicker" v-model="form.date" label="Date" v-model:errors="errors" />
      <component
        :is="BaseDatepicker"
        v-model="form.date"
        label="Date"
        description="Disabled"
        disabled
      />
    </form>
  </Demo>
</template>
