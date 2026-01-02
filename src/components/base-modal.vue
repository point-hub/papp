<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

export type BaseModalSizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'maximize'

const props = withDefaults(
  defineProps<{
    title?: string
    isOpen: boolean
    size?: BaseModalSizeType
  }>(),
  {
    size: 'md'
  }
)

const isOpen = ref(props.isOpen)

const emit = defineEmits(['onClose'])

const close = () => {
  isOpen.value = false
}

watch(isOpen, (newData) => {
  if (newData === false) {
    emit('onClose')
  }
})

watch(props, () => {
  isOpen.value = props.isOpen
})

defineExpose({ isOpen })
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="close()" class="relative z-60">
      <!-- The backdrop, rendered as a fixed sibling to the panel container -->
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/10 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="min-h-full flex items-center justify-center text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full p-4 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all dark:bg-slate-900"
              :class="{
                'max-w-sm': props.size === 'sm',
                'max-w-md': props.size === 'md',
                'max-w-lg': props.size === 'lg',
                'max-w-xl': props.size === 'xl',
                'max-w-2xl': props.size === '2xl',
                'max-w-90%': props.size === 'full',
                'w-100vh h-100vh rounded-none': props.size === 'maximize'
              }">
              <div class="flex justify-between">
                <h2 class="text-xl font-bold">{{ title }}</h2>
                <base-button type="button" @click="close()" variant="text" color="danger" rounded="full">
                  <base-icon icon="i-fa7-solid:xmark" />
                </base-button>
              </div>
              <div class="max-h-90vh overflow-auto mt-4">
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
