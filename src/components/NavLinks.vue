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
                tag="a"
                :to="link.link"
                v-bind="link"
                :active="link.title === 'Outbox'" 
                v-ripple
            >
                <q-item-section avatar>
                    <q-icon color="blue" :name="link.icon" />
                    </q-item-section>
                <q-item-section class="">
                    <strong class="text-blue">{{ link.title }}</strong>
                </q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>
</template>

<script setup>


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
]
</script>
