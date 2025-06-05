<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  modelValue: number
  pageSize: number
  totalDocument: number
  maxButton?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxButton: 5
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = computed({
  set: (text: number) => {
    emit('update:modelValue', text)
  },
  get: () => props.modelValue
})

const totalPage = computed({
  set: () => {},
  get: () => {
    return Math.ceil(props.totalDocument / props.pageSize)
  }
})

const onClickPage = (page: number) => {
  value.value = page
}

const onClickFirst = () => {
  value.value = 1
}

const onClickPrev = () => {
  if (value.value > 1) value.value -= 1
}

const onClickNext = () => {
  if (value.value < totalPage.value) value.value += 1
}

const onClickLast = () => {
  value.value = totalPage.value
}

const isShowPageButton = (i: number) => {
  // x o x x
  if (
    !(props.maxButton % 2) &&
    value.value + Math.floor(props.maxButton / 2) >= i &&
    value.value - Math.floor(props.maxButton / 2) < i
  ) {
    return true
  }

  // x x o x x
  if (
    props.maxButton % 2 &&
    value.value + Math.floor(props.maxButton / 2) >= i &&
    value.value - Math.floor(props.maxButton / 2) <= i
  ) {
    return true
  }

  // x o x x x
  if (i <= props.maxButton && value.value < Math.ceil(props.maxButton / 2)) {
    return true
  }

  // x x x o x
  if (
    i > totalPage.value - props.maxButton &&
    value.value > totalPage.value - Math.floor(props.maxButton / 2)
  ) {
    return true
  }
}
</script>

<template>
  <div class="flex w-full items-center justify-between" v-if="totalPage > 1">
    <div>
      <p class="text-sm text-slate-600 dark:text-slate-400">
        Showing {{ 1 + (value - 1) * pageSize }} to
        {{ value * pageSize > totalDocument ? totalDocument : value * pageSize }} of
        {{ totalDocument }} entries
      </p>
    </div>
    <div class="flex">
      <base-button v-if="value > 1" variant="text" size="xs" @click="onClickFirst()">
        <base-icon icon="i-fas-angles-left" />
      </base-button>
      <base-button v-if="value > 1" variant="text" size="xs" @click="onClickPrev()">
        <base-icon icon="i-fas-angle-left" />
      </base-button>
      <template v-for="i in totalPage" :key="i">
        <base-button
          v-if="isShowPageButton(i)"
          type="button"
          size="xs"
          variant="text"
          @click="onClickPage(i)"
          :class="{
            'bg-primary text-white!': i === value
          }"
        >
          {{ i }}
        </base-button>
      </template>
      <base-button v-if="value < totalPage" variant="text" size="xs" @click="onClickNext()">
        <base-icon icon="i-fas-angle-right flex items-center justify-center self-center" />
      </base-button>
      <base-button v-if="value < totalPage" variant="text" size="xs" @click="onClickLast()">
        <base-icon icon="i-fas-angles-right" />
      </base-button>
    </div>
  </div>
</template>
