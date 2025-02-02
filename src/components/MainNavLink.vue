<template>
  <div>
    <div>
      <NavigationDrawer />
    </div>
  </div>
  <div class="tw-grid tw-grid-cols-5">
    <div class="tw-col-span-1">
      <IconDrawer />
    </div>
    <div class="tw-col-span-4">
      <NavLinks />
    </div>
  </div>
</template>

<script setup>
import IconDrawer from './IconDrawer.vue';
import NavigationDrawer from './NavigationDrawer.vue';
import NavLinks from './NavLinks.vue';

</script>
