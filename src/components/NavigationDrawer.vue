<template>
    <q-list class="tw-grid tw-grid-cols-5">
        <q-item clickable v-ripple class="tw-col-span-1">
            <q-item-section avatar>
                <component :is="icons.icon" class="tw-text-indigo-900" size="23"/>
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="tw-col-span-4">
            <q-item-section class="tw-text-indigo-900 tw-text-[13px]">
                Publish Options
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script setup>

import * as HugeIcons from 'hugeicons-vue';

const icons = {
    icon: HugeIcons.Navigation03Icon
}

</script>