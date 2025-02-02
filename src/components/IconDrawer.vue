<template>
  <q-list 
    v-for="icon in icons" 
    :key="icon.id"
>
      <q-item clickable v-ripple :class="{'tw-bg-blue-200 tw-text-blue-600 tw-border-l-[3px] tw-border-blue-500': activeId === icon.id}" @click="setActive(icon.id)">
          <q-item-section avatar>
              <q-icon class="tw-text-indigo-900" :name="icon.icon" />
          </q-item-section>
      </q-item>
  </q-list>
</template>

<script setup>
import {
    ref
} from 'vue'

const icons = [{
        id: 1,
        icon: 'grid_view',
        link: '#'
    },

    {
        id: 2,
        icon: 'chat',
        link: '#'
    },
    {

        id: 3,
        icon: 'call',
        link: '#'
    },
    {

        id: 4,
        icon: 'extension',
        link: '#'
    },

    {
        id: 5,
        icon: 'grid_view',
        link: '#'
    },

    {
        id: 6,
        icon: 'grid_view',
        link: '#'
    },

    {
        id: 7,
        icon: 'fact_check',
        link: '#'
    },

    {
        id: 8,
        icon: 'language',
        link: '#'
    },

    {
        id: 9,
        icon: 'inventory',
        link: '#'
    },

    {
        id: 10,
        icon: 'manage_accounts',
        link: '#'

    },
    {
        id: 11,
        icon: 'groups',
        link: '#'
    },
    {

        id: 12,
        icon: 'analytics',
        link: '#'
    },

    {
        id: 13,
        icon: 'settings',
        link: '#'
    },
]
const activeId = ref(null) 
const setActive = (id) => {
  activeId.value = id
}
</script>
