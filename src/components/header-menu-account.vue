<script setup lang="ts">
import { BaseAvatar } from '../index'

const props = defineProps<{
  organization: string
  username: string
  avatar: string
}>()
</script>

<template>
  <button class="text-slate-900 dark:text-slate-50 flex !justify-left">
    <base-avatar :size="48" :src="props.avatar" shape="squircle" name="John Doe" />
    <div class="flex flex-col justify-center items-start text-left text-sm pl-2">
      <p class="font-extrabold line-clamp-1">{{ props.organization }}</p>
      <p class="line-clamp-1">{{ props.username }}</p>
    </div>
  </button>
</template>

<style scoped lang="postcss"></style>
