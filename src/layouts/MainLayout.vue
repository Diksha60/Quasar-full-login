<template>
  <q-layout view="hHh lpR lFf">
    <HeaderComponent @click="toggleLeftDrawer"/>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
    >
      <MainNavLink />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComponent from 'src/components/HeaderComponent.vue'
import MainNavLink from 'src/components/MainNavLink.vue';
import { ref } from 'vue';

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
