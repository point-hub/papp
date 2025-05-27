<script setup lang="ts">
import { ref } from 'vue'
import { inject, type Ref } from 'vue'

import type { IToastRef } from '@/app.vue'
const toastRef = inject<Ref<IToastRef>>('toastRef')

const name = ref('')
const number = ref(0)
const checkboxAgreement = ref(false)

const onSubmit = () => {
  toastRef?.value.toast('Submit Success', { color: 'success' })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <base-card>
      <div class="flex flex-col gap-4">
        <base-input label="Input Text" v-model="name" data-testid="input-name" />
        <div class="background-code">
          <div class="highlight-code">{{ `// Write in code` }}</div>
          <div class="highlight-code">{{ `<base-input data-testid="input-name" />` }}</div>
          <div class="highlight-code">{{ `// Write in cypress` }}</div>
          <div class="highlight-code">
            {{ `cy.get('[data-testid="input-name"]').type('Hello World')` }}
          </div>
        </div>
      </div>
    </base-card>
    <base-card>
      <div class="flex flex-col gap-4">
        <base-input-number
          label="Input Number"
          v-model="number"
          align="left"
          data-testid="input-age"
        />
        <div class="background-code">
          <div class="highlight-code">{{ `// Write in code` }}</div>
          <div class="highlight-code">{{ `<base-input-number data-testid="input-age" />` }}</div>
          <div class="highlight-code">{{ `// Write in cypress` }}</div>
          <div class="highlight-code">
            {{ `cy.get('[data-testid="input-age"]').type(25)` }}
          </div>
        </div>
      </div>
    </base-card>
    <base-card>
      <div class="flex flex-col gap-4">
        <base-checkbox
          text="Agree"
          v-model="checkboxAgreement"
          align="left"
          data-testid="checkbox-agreement"
        />
        <div class="background-code">
          <div class="highlight-code">{{ `// Write in code` }}</div>
          <div class="highlight-code">
            {{ `<base-checkbox data-testid="checkbox-agreement" />` }}
          </div>
          <div class="highlight-code">{{ `// Write in cypress` }}</div>
          <div class="highlight-code">
            {{ `cy.get('[data-testid="checkbox-agreement"]').click()` }}
          </div>
        </div>
      </div>
    </base-card>
    <base-card>
      <div class="flex flex-col gap-4">
        <base-button data-testid="submit-button" @click="onSubmit" color="primary" variant="filled">
          Submit
        </base-button>
        <div class="background-code">
          <div class="highlight-code">{{ `// Write in code` }}</div>
          <div class="highlight-code">
            {{ `<base-button data-testid="submit-button">Submit</base-button>` }}
          </div>
          <div class="highlight-code">{{ `// Write in cypress` }}</div>
          <div class="highlight-code">
            {{ `cy.get('[data-testid="submit-button"]').click()` }}
          </div>
        </div>
      </div>
    </base-card>
  </div>
</template>

<style scoped lang="postcss"></style>
