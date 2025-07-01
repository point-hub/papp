<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    label: 'Label 1',
    value: 'Value 1'
  },
  {
    label: 'Label 2',
    value: 'Value 2'
  },
  {
    label: 'Label 3',
    value: 'Value 3'
  }
]

const form = ref({
  selected1: null,
  selected2: null,
  selected3: null,
  selected4: null,
  selected5: options[0],
  selected6: options[0]
})

const errors = ref(['Error Example'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-radio :options="options" v-model="form.selected1" label="Label" required />
      <base-radio
        :options="options"
        v-model="form.selected2"
        label="Label"
        description="Description example"
      />
      <base-radio
        :options="options"
        v-model="form.selected3"
        label="Label"
        :helpers="['Helper example']"
      />
      <base-radio
        :options="options"
        v-model="form.selected4"
        label="Label"
        v-model:errors="errors"
      />
      <base-radio
        :options="options"
        v-model="form.selected5"
        label="Label"
        description="Readonly"
        readonly
      />
      <base-radio
        :options="options"
        v-model="form.selected6"
        label="Label"
        description="Disabled"
        disabled
      />
    </form>
  </Demo>
</template>
