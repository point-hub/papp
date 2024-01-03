<script setup lang="ts">
import { BaseCheckbox } from '@point-hub/papp'
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)
</script>

<template>
  <Demo>
    <component
      :is="BaseCheckbox"
      v-model="checkbox1"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      required
    />
    <component
      :is="BaseCheckbox"
      v-model="checkbox2"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Description example"
    />
    <component
      :is="BaseCheckbox"
      v-model="checkbox3"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      :helpers="['Helper example']"
    />
    <component
      :is="BaseCheckbox"
      v-model="checkbox4"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      :errors="['Error example']"
    />
    <component
      :is="BaseCheckbox"
      v-model="checkbox5"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Disabled"
      disabled
    />
  </Demo>
</template>
