<script setup lang="ts">
import { computed } from 'vue'
import { BaseIcon } from '..'

export interface ItemInterface {
  label: string
  active: boolean
  icon?: string
}

export interface Props {
  modelValue: ItemInterface[]
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  showLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md',
  showLabel: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: ItemInterface[]): void
}>()

const value = computed({
  set: (text: ItemInterface[]) => {
    emit('update:modelValue', text)
  },
  get: () => props.modelValue
})
</script>

<template>
  <div class="step-container">
    <template v-for="(item, index) in value" :key="index">
      <div class="step-body">
        <div class="step-icon-container" :class="{ active: item.active }">
          <component :is="BaseIcon" v-if="item.icon" :icon="item.icon" class="step-icon" />
          <div v-else class="step-icon">{{ index + 1 }}</div>
        </div>
        <p v-if="props.showLabel" class="step-text">{{ item.label }}</p>
      </div>
      <div v-if="index < value.length - 1" class="step-line" :class="{ active: item.active }"></div>
    </template>
  </div>
</template>
