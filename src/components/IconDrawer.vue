<template>
  <q-list v-for="icon in icons" :key="icon.id">
      <q-item clickable v-ripple>
          <q-item-section avatar>
              <q-icon color="blue" :name="icon.icon" />
          </q-item-section>
      </q-item>
  </q-list>
</template>

<script setup>
import {
    ref
} from 'vue'
import {
    useQuasar
} from 'quasar'

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

const $q = useQuasar()

// Drawer state
const drawer = ref(true)
const miniState = ref(true)

// Toggle drawer
const toggleDrawer = () => {
    drawer.value = !drawer.value
}
</script>
