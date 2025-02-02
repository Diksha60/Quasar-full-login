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
                    <q-icon class="tw-text-indigo-900" :name="link.icon"/>
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


const route = useRoute();


const linksList = [{
        title: 'Publish Post',
        icon: 'near_me',
        link: '/'
    },
    {
        title: 'Create Post',
        icon: 'add_circle',
        link: '/createPost'
    },
    {
        title: 'Post Planner',
        icon: 'edit_calendar',
        link: '/postPlanner'
    },
    {
        title: 'Image',
        icon: 'edit_calendar',
        link: '/image'
    },
]
</script>
