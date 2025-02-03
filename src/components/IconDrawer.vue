<template>
<q-list v-for="icon in icons" :key="icon.id">
    <q-item clickable v-ripple :class="{'tw-bg-blue-200 tw-text-blue-600 tw-border-l-[3px] tw-border-blue-500': activeId === icon.id}" @click="setActive(icon.id)">
        <q-item-section avatar>
            <component :is="icon.icon" class="tw-text-indigo-900" size="23" />
        </q-item-section>
    </q-item>
</q-list>
</template>

<script setup>
import {
    ref
} from 'vue'
import * as HugeIcons from 'hugeicons-vue';

// const icons = [{
//         id: 1,
//         icon: 'grid_view',
//         link: '#'
//     },

//     {
//         id: 2,
//         icon: 'chat',
//         link: '#'
//     },
//     {

//         id: 3,
//         icon: 'call',
//         link: '#'
//     },
//     {

//         id: 4,
//         icon: 'extension',
//         link: '#'
//     },

//     {
//         id: 5,
//         icon: 'grid_view',
//         link: '#'
//     },

//     {
//         id: 6,
//         icon: 'grid_view',
//         link: '#'
//     },

//     {
//         id: 7,
//         icon: 'fact_check',
//         link: '#'
//     },

//     {
//         id: 8,
//         icon: 'language',
//         link: '#'
//     },

//     {
//         id: 9,
//         icon: 'inventory',
//         link: '#'
//     },

//     {
//         id: 10,
//         icon: 'manage_accounts',
//         link: '#'

//     },
//     {
//         id: 11,
//         icon: 'groups',
//         link: '#'
//     },
//     {

//         id: 12,
//         icon: 'analytics',
//         link: '#'
//     },

//     {
//         id: 13,
//         icon: 'settings',
//         link: '#'
//     },
// ]

const icons = [{
        id: 1,
        icon: HugeIcons.DashboardSquare01Icon,
        link: '#'
    },

    {
        id: 2,
        icon: HugeIcons.Message01Icon,
        link: '#'
    },
    {

        id: 3,
        icon: HugeIcons.Call02Icon,
        link: '#'
    },
    {

        id: 4,
        icon: HugeIcons.ArtificialIntelligence04Icon,
        link: '#'
    },

    {
        id: 5,
        icon: HugeIcons.Route02Icon,
        link: '#'
    },

    {
        id: 6,
        icon: HugeIcons.Coupon03Icon,
        link: '#'
    },

    {
        id: 7,
        icon: HugeIcons.TaskDaily01Icon,
        link: '#'
    },

    {
        id: 8,
        icon: HugeIcons.Globe02Icon,
        link: '#'
    },

    {
        id: 9,
        icon: HugeIcons.PackageIcon,
        link: '#'
    },

    {
        id: 10,
        icon: HugeIcons.UserStar01Icon,
        link: '#'

    },
    {
        id: 11,
        icon: HugeIcons.UserGroupIcon,
        link: '#'
    },
    {

        id: 12,
        icon: HugeIcons.AnalyticsUpIcon,
        link: '#'
    },

    {
        id: 13,
        icon: HugeIcons.Settings02Icon,
        link: '#'
    },
]

const activeId = ref(null)
const setActive = (id) => {
    activeId.value = id
}
</script>
