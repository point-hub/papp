<script setup lang="ts">
import { numberFormat } from '@point-hub/js-utils'
import { computed, ref } from 'vue'

// Table Header
const options = [
  { id: 1, label: 'Quality Control Specialist' },
  { id: 2, label: 'Desktop Support Technician' },
  { id: 3, label: 'Tax Accountant' }
]

const selected = ref()
const searchAll = ref('')
const searchNumber = ref<number>()
const search = ref<string[]>([])

// Table Data
interface UserInterface {
  id: number
  name: string
  job: string
  salary: number
  checked?: boolean
}

const users = ref<UserInterface[]>([
  { id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', salary: 100000 },
  { id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', salary: 125000 },
  { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', salary: 220000 }
])

// Section Pagination
const page = ref(1)
const pageSize = ref(3)
const totalDocument = ref(100)

const updateData = () => {}

// Table Setting
const showModal = ref(false)
const openTableSetting = () => {
  showModal.value = true
}

const columns = ref([
  {
    name: 'Checkbox',
    isShow: true,
    isEditable: true
  },
  {
    name: 'Name',
    isShow: true,
    isEditable: false
  },
  {
    name: 'Job',
    isShow: true,
    isEditable: true
  },
  {
    name: 'Salary',
    isShow: true,
    isEditable: true
  }
])

const optionsPageSize = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' }
]

// Selecting Table Row
const selectAll = computed({
  get() {
    return isCheckedAll()
  },
  set() {
    if (isCheckedAll()) {
      users.value.forEach((user) => {
        user.checked = false
      })
    } else {
      users.value.forEach((user) => {
        user.checked = true
      })
    }
  }
})

const isCheckedAll = () => {
  for (const user of users.value) {
    if (user.checked === undefined || user.checked === false) {
      return false
    }
  }

  return true
}
</script>

<template>
  <Demo>
    <div class="w-full flex items-center gap-4">
      <div class="w-full flex gap-2">
        <base-button color="primary" border="none" class="gap-1">
          <base-icon icon="i-far-pen-to-square" />
          <span>New</span>
        </base-button>
        <base-input v-model="searchAll" placeholder="Search" border="full" class="flex-1">
          <template #prefix>
            <base-icon icon="i-far-magnifying-glass" class="mx-3" />
          </template>
        </base-input>
        <base-button color="info" class="gap-1" @click="openTableSetting">
          <base-icon class="i-far-gear" />
        </base-button>
      </div>
    </div>
    <base-modal :is-open="showModal" @on-close="showModal = false" size="xl">
      <div class="max-h-90vh overflow-auto p-8 space-y-6">
        <h2 class="text-2xl font-bold">Table Setting</h2>
        <div class="space-y-2">
          <h3 class="font-extrabold text-lg">Column Chooser</h3>
          <div class="space-y-2">
            <base-checkbox
              v-for="(column, index) in columns"
              :key="index"
              :id="column.name"
              :disabled="!column.isEditable"
              v-model="column.isShow"
              :text="column.name"
            />
          </div>
        </div>
        <base-divider orientation="vertical" />
        <div class="space-y-2">
          <h3 class="font-extrabold text-lg">Pagination</h3>
          <base-autocomplete
            v-model="selected"
            :options="optionsPageSize"
            placeholder="Search"
            label="Page Size"
            layout="horizontal"
            description="data per page"
          ></base-autocomplete>
        </div>
        <base-button color="primary" size="md" is-block @click="showModal = false">
          Close
        </base-button>
      </div>
    </base-modal>
    <base-table>
      <thead>
        <tr>
          <th v-if="columns[0].isShow"></th>
          <th v-if="columns[1].isShow" class="basic-table-head font-normal!">
            <base-input
              required
              v-model="search[0]"
              placeholder="Search"
              border="none"
              class="font-normal text-slate-800 dark:text-slate-400"
            />
          </th>
          <th v-if="columns[2].isShow" class="basic-table-head font-normal!">
            <base-choosen
              title="Example"
              :options="options"
              v-model:selected="selected"
              border="none"
              placeholder="Search"
            />
          </th>
          <th v-if="columns[3].isShow" class="basic-table-head font-normal!">
            <base-input-number
              required
              v-model="searchNumber"
              placeholder="Search"
              border="none"
              class="font-light text-slate-800 dark:text-slate-400"
            />
          </th>
        </tr>
        <tr>
          <th v-if="columns[0].isShow">
            <base-checkbox v-model="selectAll" />
          </th>
          <th v-if="columns[1].isShow">Name</th>
          <th v-if="columns[2].isShow">Job</th>
          <th class="text-right" v-if="columns[3].isShow">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td v-if="columns[0].isShow">
            <base-checkbox v-model="user.checked" />
          </td>
          <td v-if="columns[1].isShow">{{ user.name }}</td>
          <td v-if="columns[2].isShow">{{ user.job }}</td>
          <td class="text-right" v-if="columns[3].isShow">{{ numberFormat(user.salary) }}</td>
        </tr>
      </tbody>
    </base-table>
    <base-pagination
      v-model="page"
      :page-size="pageSize"
      :totalDocument="totalDocument"
      @update:model-value="updateData()"
    />
  </Demo>
</template>
