<script setup lang="ts">
import { BaseCheckbox } from '@point-hub/papp'
import { ref } from 'vue'

const primaryCheckbox = ref(false)
const secondaryCheckbox = ref(false)
const infoCheckbox = ref(false)
const successCheckbox = ref(false)
const warningCheckbox = ref(false)
const dangerCheckbox = ref(false)
</script>

<template>
  <Demo is-row>
    <component :is="BaseCheckbox" v-model="primaryCheckbox" theme="primary" />
    <component :is="BaseCheckbox" v-model="secondaryCheckbox" theme="secondary" />
    <component :is="BaseCheckbox" v-model="infoCheckbox" theme="info" />
    <component :is="BaseCheckbox" v-model="successCheckbox" theme="success" />
    <component :is="BaseCheckbox" v-model="warningCheckbox" theme="warning" />
    <component :is="BaseCheckbox" v-model="dangerCheckbox" theme="danger" />
  </Demo>
</template>
