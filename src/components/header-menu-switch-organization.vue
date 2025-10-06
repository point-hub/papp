<script setup lang="ts">
import { ref } from 'vue'

interface IOrganization {
  name: string
  link: string
}

const props = defineProps<{
  organizations: IOrganization[]
}>()

const toggle = () => {
  isOpen.value = !isOpen.value
}
const isOpen = ref(false)
</script>

<template>
  <base-button variant="text" color="primary" size="sm" class="text-slate-900 dark:text-slate-50 flex justify-left!"
    @click="toggle">
    <base-icon icon="i-ph-buildings-duotone" class="text-2xl" />
    <p>Switch Organization</p>
  </base-button>
  <base-card class="p-0! gap-0! overflow-y-auto max-h-50" v-if="isOpen">
    <base-link v-for="organization in props.organizations" :key="organization.name" :href="organization.link" is-block
      variant="text" color="primary" shape="sharp">
      <span class="text-xs">{{ organization.name }}</span>
    </base-link>
  </base-card>
</template>

<style scoped lang="postcss"></style>
