<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

import BaseButton from './base-button.vue'

export type BaseToastColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'

export interface Options {
  color?: BaseToastColorType
  autoClose?: boolean
  timer?: number
}

const listData = ref<any[]>([])

const toast = (message: string, options?: Options) => {
  const id = uuidv4()
  listData.value.push({
    id: id,
    message: message,
    color: options?.color ?? 'primary'
  })
  if (options?.autoClose ?? true) {
    setTimeout(
      () => {
        remove(id)
      },
      options?.timer ?? 3000
    )
  }
}

const remove = (id: string) => {
  const objWithIdIndex = listData.value.findIndex((obj) => obj.id === id)

  if (objWithIdIndex > -1) {
    listData.value.splice(objWithIdIndex, 1)
  }
}

defineExpose({ toast, remove })
</script>

<template>
  <div class="toast-container">
    <template v-for="data in listData" :key="data">
      <slot :data="data">
        <div
          class="toast"
          :class="{
            'toast-primary': data.color === 'primary',
            'toast-secondary': data.color === 'secondary',
            'toast-info': data.color === 'info',
            'toast-success': data.color === 'success',
            'toast-warning': data.color === 'warning',
            'toast-danger': data.color === 'danger'
          }"
        >
          <div class="self-start mt-0.5">
            <i v-if="data.color === 'primary'" class="i-fas-bell block w-4 h-4"></i>
            <i v-if="data.color === 'info'" class="i-fas-circle-info block w-4 h-4"></i>
            <i v-if="data.color === 'success'" class="i-fas-check block w-4 h-4"></i>
            <i v-if="data.color === 'warning'" class="i-fas-circle-exclamation block w-4 h-4"></i>
            <i v-if="data.color === 'danger'" class="i-fas-triangle-exclamation block w-4 h-4"></i>
          </div>
          <div class="ms-3 text-sm">
            {{ data.message }}
          </div>
          <component
            :is="BaseButton"
            type="button"
            @click="remove(data.id)"
            variant="text"
            class="toast-close-button"
          >
            <base-icon icon="i-fas-xmark" class="w-4 h-4" />
          </component>
        </div>
      </slot>
    </template>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/toast.css');
</style>
