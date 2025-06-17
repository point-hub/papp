<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

export type BaseModalSizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'maximize'

const props = withDefaults(
  defineProps<{
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
      <div class="fixed inset-0 bg-black/10 backdrop-blur-sm" aria-hidden="true" />

      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="min-h-full flex items-center justify-center text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all dark:bg-slate-900"
              :class="{
                'max-w-sm': props.size === 'sm',
                'max-w-md': props.size === 'md',
                'max-w-lg': props.size === 'lg',
                'max-w-xl': props.size === 'xl',
                'max-w-2xl': props.size === '2xl',
                'max-w-90%': props.size === 'full',
                'w-100vh h-100vh rounded-none': props.size === 'maximize'
              }"
            >
              <base-button
                type="button"
                size="xs"
                @click="close()"
                variant="text"
                color="danger"
                class="absolute right-2 top-2"
              >
                <base-icon icon="i-fas-xmark" />
              </base-button>
              <slot></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
