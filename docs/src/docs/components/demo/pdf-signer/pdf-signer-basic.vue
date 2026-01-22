<script setup lang="ts">
import { computed, ref } from 'vue'
import { SignPdf } from '@point-hub/papp'

type DemoUser = { id: string; name: string; initials: string; role: string; label: string }
const demoUsers: DemoUser[] = [
  { id: 'alya', name: 'Alya Rahma', initials: 'AR', role: 'Approval', label: 'Menyetujui' },
  { id: 'dimas', name: 'Dimas Pratama', initials: 'DP', role: 'Approval', label: 'Mengetahui' },
  { id: 'nadia', name: 'Nadia Kusuma', initials: 'NK', role: 'Viewer', label: 'Pemeriksa' }
]

const currentUserId = ref(demoUsers[0]?.id ?? '')
const currentUser = computed(
  () => demoUsers.find((user) => user.id === currentUserId.value) ?? demoUsers[0]
)
const signaturesJson = ref('')
</script>

<template>
  <Demo>
    <div class="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg">
      <div class="flex flex-wrap items-center gap-3 justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">User Aktif</span>
          <select
            v-model="currentUserId"
            class="w-fit rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm"
          >
            <option v-for="user in demoUsers" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <SignPdf
      v-model:signaturesJson="signaturesJson"
      :users="demoUsers"
      :current-user="currentUser"
      :enable-upload="true"
    />
    <base-textarea
      v-model="signaturesJson"
      label="Signature JSON"
      layout="vertical"
      description="Paste to restore positions."
      class="mt-4"
      :minHeight="180"
      placeholder="Paste signature JSON di sini..."
      spellcheck="false"
    />
  </Demo>
</template>
