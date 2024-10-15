<script setup lang="ts">
import { computed } from 'vue'

export interface BaseStepItemInterface {
  label: string
  active: boolean
  icon?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface Props {
  modelValue: BaseStepItemInterface[]
  showLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md',
  showLabel: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseStepItemInterface[]): void
  (e: 'choosen', item: BaseStepItemInterface): void
}>()

const value = computed({
  set: (text: BaseStepItemInterface[]) => {
    emit('update:modelValue', text)
  },
  get: () => props.modelValue
})

const onClick = (item: BaseStepItemInterface) => {
  emit('choosen', item)
}
</script>

<template>
  <div class="step-container">
    <template v-for="(item, index) in value" :key="index">
      <div class="step-body" @click="onClick(item)">
        <div class="step-icon-container" :class="{ active: item.active }">
          <base-icon v-if="item.icon" :icon="item.icon" class="step-icon" />
          <div v-else class="step-icon">{{ index + 1 }}</div>
        </div>
        <p v-if="props.showLabel" class="step-text">{{ item.label }}</p>
      </div>
      <div v-if="index < value.length - 1" class="step-line" :class="{ active: item.active }"></div>
    </template>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/step.css');
</style>
