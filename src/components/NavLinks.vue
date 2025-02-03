<template>
    <q-scroll-area 
        padding 
        class="fit"
    >
        <q-list>
            <q-item 
                clickable 
                v-for="link in linksList" 
                :key="link.title" 
                tag="router-link"
                :to="link.link"
                exact-active-class="tw-bg-blue-200 tw-text-blue-600 tw-border-l-[3px] tw-border-blue-500"
                v-ripple
                
            >
                <q-item-section avatar>
                    <component :is="link.icon" class="tw-text-indigo-900" size="23"/>
                </q-item-section>
                <q-item-section class="">
                    <p class="tw-text-indigo-900 tw-font-medium" >{{ link.title }}</p>
                </q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>
</template>

<script setup>
import { useRoute } from 'vue-router';
import * as HugeIcons from 'hugeicons-vue';


const route = useRoute();


const linksList = [{
        title: 'Publish Post',
        icon: HugeIcons.Navigation03Icon,
        link: '/'
    },
    {
        title: 'Create Post',
        icon: HugeIcons.AddCircleIcon,
        link: '/createPost'
    },
    {
        title: 'Post Planner',
        icon: HugeIcons.CalendarFavorite01Icon,
        link: '/postPlanner'
    },
]
</script>
