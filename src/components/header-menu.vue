<script setup lang="ts">
import { isDefined } from '@vueuse/core'

const props = defineProps<{
  organization: string
  username: string
  avatar: string
}>()

const isOpen = defineModel('is-open', { default: false })
const toggle = (val?: boolean) => {
  if (isDefined(val)) {
    isOpen.value = val
    return
  }

  isOpen.value = !isOpen.value
}

defineExpose({ toggle, isOpen })
</script>

<template>
  <base-popover ref="accountPopoverRef" placement="bottom-end" v-model:is-open="isOpen">
    <button type="button" class="flex gap-2" @click="toggle()">
      <div class="hidden lg:flex flex-col justify-center items-end">
        <p class="text-sm truncate font-extrabold">{{ props.organization }}</p>
        <p class="text-sm truncate">{{ props.username }}</p>
      </div>
      <base-avatar :size="48" :src="props.avatar" shape="squircle" :name="props.username" />
    </button>
    <template #content>
      <div class="popper-root p-2">
        <slot />
      </div>
    </template>
  </base-popover>
</template>

<style scoped lang="postcss">
@import url('../assets/css/components/popper.css');
</style>
