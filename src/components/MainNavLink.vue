<template>
  <div class="row">
    <div class="col">
      <NavigationDrawer />
    </div>
  </div>
  <div class="row">
    <div class="col col-auto">
      <IconDrawer />
    </div>
    <div class="col">
      <NavLinks />
    </div>
  </div>
</template>

<script setup>
import IconDrawer from './IconDrawer.vue';
import NavigationDrawer from './NavigationDrawer.vue';
import NavLinks from './NavLinks.vue';

</script>
