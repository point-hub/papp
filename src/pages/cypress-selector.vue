<script setup lang="ts">
import { ref } from 'vue'
import { inject, type Ref } from 'vue'

import type { IToastRef } from '@/app.vue'
const toastRef = inject<Ref<IToastRef>>('toastRef')

const inputText = ref('')
const inputTextarea = ref('')
const inputMask = ref('')
const inputNumber = ref(0)
const inputDate = ref('')
const inputCheckbox = ref(false)
const inputSwitch = ref(false)

const choosenOptions = ref([
  { _id: '1', label: 'Jane' },
  { _id: '2', label: 'John Doe' },
  { _id: '3', label: 'Charles' },
  { _id: '4', label: 'Jonathan' },
  { _id: '5', label: 'Kimberly' }
])
const choosenSelected = ref()

const selectOptions = [
  { _id: '1', label: 'Durward Reynolds' },
  { _id: '2', label: 'Kenton Towne' },
  { _id: '3', label: 'Therese Wunsch' },
  { _id: '4', label: 'Benedict Kessler' }
]
const selectSelected = ref()

const radioOptions = [
  { label: 'Option 1', value: 'Value 1' },
  { label: 'Option 2', value: 'Value 2' },
  { label: 'Option 3', value: 'Value 3' }
]
const radioSelected = ref()

const inputRange = ref(0)

const onSubmit = () => {
  toastRef?.value.toast('Submit Success', { color: 'success' })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <base-card title="Cypress Selector">

      <div class="flex flex-col gap-2">
        <base-input layout="horizontal" label="Input Text" v-model="inputText" border="full" data-testid="input-text" />

        <base-textarea layout="horizontal" label="Input Textarea" v-model="inputTextarea" border="full"
          data-testid="input-textarea" />

        <base-input-mask layout="horizontal" label="Input Mask" v-model="inputMask" :options="{ creditCard: true }"
          placeholder="**** **** **** ****" border="full" data-testid="input-mask" />

        <base-input-number layout="horizontal" label="Input Number" v-model="inputNumber" border="full" align="left"
          data-testid="input-number" />

        <base-datepicker label="Input Date" layout="horizontal" v-model="inputDate" border="full"
          data-testid="input-date" />

        <base-choosen label="Choosen" layout="horizontal" title="Example" :options="choosenOptions"
          v-model:selected="choosenSelected" border="full" data-testid="choosen" />

        <base-select label="Select" layout="horizontal" v-model="selectSelected" :options="selectOptions" border="full"
          data-testid="select" />

        <base-file-upload label="File Upload" layout="horizontal" data-testid="file-upload" />

        <base-radio label="Radio" layout="horizontal" :options="radioOptions" v-model="radioSelected"
          data-testid="radio" />

        <base-switch label="Switch" layout="horizontal" v-model="inputSwitch" data-testid="switch" />

        <base-checkbox label="Checkbox" layout="horizontal" text="Agree" v-model="inputCheckbox" align="left"
          data-testid="input-checkbox" />

        <base-range label="Range" layout="horizontal" v-model="inputRange" data-testid="input-range" showText />
      </div>
    </base-card>

    <base-button data-testid="submit-button" @click="onSubmit" color="primary" variant="filled" size="sm" block>
      Submit
    </base-button>
  </div>
</template>

<style scoped lang="postcss"></style>
