<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  modelValue: number
  pageSize: number
  totalDocument: number
  maxButton: number
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

const totalPage = Math.ceil(props.totalDocument / props.pageSize)

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
  if (value.value < totalPage) value.value += 1
}

const onClickLast = () => {
  value.value = totalPage
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
    i > totalPage - props.maxButton &&
    value.value > totalPage - Math.floor(props.maxButton / 2)
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
    <div class="flex gap-2">
      <button type="button" class="btn btn-xs" @click="onClickFirst()">
        <i class="i-fas-angles-left"></i>
      </button>
      <button type="button" class="btn btn-xs" @click="onClickPrev()">
        <i class="i-fas-angle-left"></i>
      </button>
      <template v-for="i in totalPage" :key="i">
        <button
          v-if="isShowPageButton(i)"
          type="button"
          @click="onClickPage(i)"
          class="btn btn-xs rounded"
          :class="{
            'btn-primary': i === value
          }"
        >
          {{ i }}
        </button>
      </template>
      <button type="button" class="btn btn-xs" @click="onClickNext()">
        <i class="i-fas-angle-right flex items-center justify-center self-center"></i>
      </button>
      <button type="button" class="btn btn-xs" @click="onClickLast()">
        <i class="i-fas-angles-right"></i>
      </button>
    </div>
  </div>
</template>
