<script setup lang="ts">
import { BaseAvatar } from '../index'

const props = defineProps<{
  organization: string
  username: string
  avatar: string
}>()
</script>

<template>
  <base-button
    variant="text"
    color="primary"
    size="sm"
    class="text-slate-900 dark:text-slate-50 flex justify-left!"
  >
    <base-avatar size="xs" :src="props.avatar" shape="squircle" name="John Doe" />
    <div class="flex flex-col justify-center items-start text-left text-sm">
      <p class="font-semibold line-clamp-2">{{ props.organization }}</p>
      <p class="line-clamp-2">{{ props.username }}</p>
    </div>
  </base-button>
</template>

<style scoped lang="postcss"></style>
