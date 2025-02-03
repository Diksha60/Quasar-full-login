<template>
<q-page class="flex flex-center">
    <!-- <GoogleHomeIcon size="120" color="blue"/>
    <SettingDone01Icon size="40" color="red" />
    <CalendarFavorite01Icon size="30" class="tw-text-blue-900"/>
    <component :is="icons.calendar" size="30" class="tw-text-blue-900"/>
    <component :is="icons.arrow" size="30" class="tw-text-blue-900"/>
    
    <q-list>
            <q-item 
                clickable 
                v-for="link in links" 
                :key="link.title" 
                tag="router-link"
                :to="link.link"
                exact-active-class="tw-bg-blue-200 tw-text-blue-600 tw-border-l-[3px] tw-border-blue-500"
                v-ripple
                
            >
                <q-item-section avatar>
                    <component class="tw-text-red bg-red" size="20" :is="link.icon"/>
                    </q-item-section>
                <q-item-section class="">
                    <p class="tw-text-indigo-900 bg-black tw-font-medium" >{{ link.title }}</p>
                </q-item-section>
            </q-item>
        </q-list> -->

        Create Post
</q-page>
</template>

  
  
<script setup>
import { CalendarFavorite01Icon, GoogleHomeIcon, SettingDone01Icon } from 'hugeicons-vue';
import * as HugeIcons from 'hugeicons-vue';

const icons = {
    home: GoogleHomeIcon,
    setting: SettingDone01Icon,
    calendar: CalendarFavorite01Icon,
}
const links = [
    {
        title: 'Title-1',
        icon: HugeIcons.Home01Icon,
        link: '/'
    },
    {
        title: 'Title-2',
        icon: HugeIcons.Settings01Icon,
        link: '/'
    },
    {
        title: 'Title-3',
        icon: HugeIcons.AddCircleIcon,
        link: '/'
    },
    {
        title: 'Title-4',
        icon: HugeIcons     ,
        link: '/'
    },
]

</script>
