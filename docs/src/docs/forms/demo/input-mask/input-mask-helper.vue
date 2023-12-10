<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputMask } from '@point-hub/papp'

const form = ref({
  number1: null,
  number2: null,
  number3: null,
  number4: null,
  number5: 10000
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseInputMask"
        v-model="form.number1"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        required
      ></component>
      <component
        :is="BaseInputMask"
        v-model="form.number2"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        description="Description example"
      ></component>
      <component
        :is="BaseInputMask"
        v-model="form.number2"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        placeholder="1,234,567"
        description="Placeholder"
      ></component>
      <component
        :is="BaseInputMask"
        v-model="form.number3"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        :helpers="['Helper example']"
      ></component>
      <component
        :is="BaseInputMask"
        v-model="form.number4"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        :errors="['Error example']"
      ></component>
      <component
        :is="BaseInputMask"
        v-model="form.number5"
        :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
        label="Label"
        description="Disabled"
        disabled
      ></component>
    </form>
  </Demo>
</template>
