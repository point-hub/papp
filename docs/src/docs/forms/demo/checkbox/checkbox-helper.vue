<script setup lang="ts">
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)

const errors = ref(['Error example'])
</script>

<template>
  <Demo>
    <base-checkbox v-model="checkbox1" text="Checkbox" label="Label" layout="horizontal" required />
    <base-checkbox
      v-model="checkbox2"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Description example"
    />
    <base-checkbox
      v-model="checkbox3"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      :helpers="['Helper example']"
    />
    <base-checkbox
      v-model="checkbox4"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      v-model:errors="errors"
    />
    <base-checkbox
      v-model="checkbox5"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Disabled"
      disabled
    />
  </Demo>
</template>
