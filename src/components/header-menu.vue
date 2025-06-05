<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  organization: string
  username: string
  avatar: string
}>()

const accountPopoverRef = ref()
</script>

<template>
  <base-popover ref="accountPopoverRef" placement="bottom-end">
    <button type="button" class="flex gap-2" @click="accountPopoverRef.toggle()">
      <div class="hidden lg:flex flex-col justify-center items-end">
        <p class="text-sm truncate font-semibold">{{ props.organization }}</p>
        <p class="text-sm truncate">{{ props.username }}</p>
      </div>
      <base-avatar size="xs" :src="props.avatar" shape="squircle" :name="props.username" />
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
