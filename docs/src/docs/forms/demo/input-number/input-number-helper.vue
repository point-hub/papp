<script setup lang="ts">
import { BaseInputNumber } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  number1: 0,
  number2: 0,
  number3: 0,
  number4: 0,
  number5: 0,
  number6: 10000
})

const errors = ref(['Error example'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseInputNumber" v-model="form.number1" label="Label" required />
      <component
        :is="BaseInputNumber"
        v-model="form.number2"
        label="Label"
        placeholder="Placeholder example"
      />
      <component
        :is="BaseInputNumber"
        v-model="form.number3"
        label="Label"
        description="Description example"
      />
      <component
        :is="BaseInputNumber"
        v-model="form.number4"
        label="Label"
        :helpers="['Helper example']"
      />
      <component
        :is="BaseInputNumber"
        v-model="form.number5"
        label="Label"
        v-model:errors="errors"
      />
      <component :is="BaseInputNumber" v-model="form.number6" label="Label" disabled />
    </form>
  </Demo>
</template>
