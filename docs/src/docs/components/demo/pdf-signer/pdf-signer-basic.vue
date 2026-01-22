<script setup lang="ts">
import { BasePdfSigner } from '@point-hub/papp'
import { computed, ref } from 'vue'

type IUser = { id: string; name: string; initials: string; role: string; label: string }
const users: IUser[] = [
  { id: 'alya', name: 'Alya Rahma', initials: 'AR', role: 'Approval', label: 'Approved By' },
  { id: 'dimas', name: 'Dimas Pratama', initials: 'DP', role: 'Approval', label: 'Approved By' },
  { id: 'nadia', name: 'Nadia Kusuma', initials: 'NK', role: 'Viewer', label: 'Custom Label' }
]

const currentUserId = ref(users[0]?.id ?? '')
const currentUser = computed(
  () => users.find((user) => user.id === currentUserId.value) ?? users[0]
)
const signaturesJson = ref('')
</script>

<template>
  <Demo>
    <div class="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg">
      <div class="flex flex-wrap items-center gap-3 justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">Active User</span>
          <select v-model="currentUserId"
            class="w-fit rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm">
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <BasePdfSigner v-model:signaturesJson="signaturesJson" :users="users" :current-user="currentUser"
      :enable-upload="true" />
    <base-textarea v-model="signaturesJson" label="Signature JSON" layout="vertical" description="Sample JSON."
      class="mt-4" :minHeight="180" spellcheck="false" />
  </Demo>
</template>
