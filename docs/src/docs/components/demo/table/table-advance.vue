<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  BaseAutocomplete,
  BaseCheckbox,
  BaseModal,
  BaseInput,
  BasePagination,
  BaseTable,
  BaseDivider
} from '@point-hub/papp'

// Table Header
const options = [
  { id: 1, label: 'Quality Control Specialist' },
  { id: 2, label: 'Desktop Support Technician' },
  { id: 3, label: 'Tax Accountant' }
]

const selected = ref()
const searchAll = ref('')
const search = ref<string[]>([])

// Table Data
interface UserInterface {
  id: number
  name: string
  job: string
  favoriteColor: string
  checked?: boolean
}

const users = ref<UserInterface[]>([
  { id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', favoriteColor: 'Blue' },
  { id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', favoriteColor: 'Purple' },
  { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', favoriteColor: 'Red' }
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
    name: 'Favorite Color',
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
        <button class="btn btn-md btn-primary rounded-none gap-1">
          <base-icon icon="i-far-pen-to-square" />
          <span>New</span>
        </button>
        <component
          :is="BaseInput"
          v-model="searchAll"
          placeholder="Search"
          border="full"
          class="flex-1"
        >
          <template #prefix>
            <base-icon icon="i-far-magnifying-glass" class="mx-3" />
          </template>
        </component>
        <button class="btn btn-md btn-info rounded-none" @click="openTableSetting()">
          <base-icon class="i-far-gear" />
        </button>
      </div>
    </div>
    <component :is="BaseModal" :is-open="showModal" @on-close="showModal = false" size="xl">
      <div class="max-h-90vh overflow-auto p-8 space-y-6">
        <h2 class="text-2xl font-bold">Table Setting</h2>
        <div class="space-y-2">
          <h3 class="font-extrabold text-lg">Column Chooser</h3>
          <div class="space-y-2">
            <component
              v-for="(column, index) in columns"
              :key="index"
              :id="column.name"
              :is="BaseCheckbox"
              :disabled="!column.isEditable"
              v-model="column.isShow"
              :text="column.name"
            />
          </div>
        </div>
        <component :is="BaseDivider" orientation="vertical" />
        <div class="space-y-2">
          <h3 class="font-extrabold text-lg">Pagination</h3>
          <component
            :is="BaseAutocomplete"
            v-model="selected"
            :options="optionsPageSize"
            placeholder="Search"
            label="Page Size"
            layout="horizontal"
            description="data per page"
          ></component>
        </div>
        <button class="btn btn-primary btn-md btn-block rounded-xl" @click="showModal = false">
          Close
        </button>
      </div>
    </component>
    <component :is="BaseTable">
      <thead>
        <tr>
          <th v-if="columns[0].isShow"></th>
          <th v-if="columns[1].isShow" class="basic-table-head">
            <component
              :is="BaseInput"
              required
              v-model="search[0]"
              placeholder="Search"
              border="none"
              class="font-normal text-slate-800 dark:text-slate-400"
            ></component>
          </th>
          <th v-if="columns[2].isShow" class="basic-table-head">
            <component
              class="font-normal"
              :is="BaseAutocomplete"
              v-model="selected"
              :options="options"
              placeholder="Search"
              border="none"
            ></component>
          </th>
          <th v-if="columns[3].isShow" class="basic-table-head">
            <component
              :is="BaseInput"
              required
              v-model="search[0]"
              placeholder="Search"
              border="none"
              class="font-light text-slate-800 dark:text-slate-400"
            ></component>
          </th>
        </tr>
        <tr>
          <th v-if="columns[0].isShow">
            <component :is="BaseCheckbox" v-model="selectAll" />
          </th>
          <th v-if="columns[1].isShow">Name</th>
          <th v-if="columns[2].isShow">Job</th>
          <th v-if="columns[3].isShow">Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td v-if="columns[0].isShow">
            <component :is="BaseCheckbox" v-model="user.checked" />
          </td>
          <td v-if="columns[1].isShow">{{ user.name }}</td>
          <td v-if="columns[2].isShow">{{ user.job }}</td>
          <td v-if="columns[3].isShow">{{ user.favoriteColor }}</td>
        </tr>
      </tbody>
    </component>
    <component
      :is="BasePagination"
      v-model="page"
      :page-size="pageSize"
      :totalDocument="totalDocument"
      @update:model-value="updateData()"
    />
  </Demo>
</template>
