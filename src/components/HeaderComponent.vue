<template>
    <div class="q-pa-md">
        <q-header 
            class="bg-white shadow-1"
            style="height: 70px;"
        >
            <q-toolbar>
                <q-avatar 
                    square
                    style="width: 100px; height: 70px;"
                >
                    <q-img src="../assets/logo/Logo.png" />
                </q-avatar>

                <q-space />

                <q-input 
                    outlined
                    dense 
                    label="Enter mobile number"
                    style="width: 400px; margin-right: 16px;"
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
                <q-select 
                    outlined
                    dense
                    style="width: 180px;"
                    v-model="select" 
                    :options="selectOptions" 
                    label="Active Status" 
                />
                <q-avatar>
                    <q-icon 
                        name="signal_cellular_alt"
                        square
                        color="red"
                        style="height: 53px;"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="group"
                        square
                        color="blue"
                        style="height: 53px;"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="crop_square"
                        square
                        class="text-blue"
                        style="height: 53px;"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="notifications"
                        square
                        class="text-blue"
                        style="height: 53px;"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-img 
                        src="../assets/profile/Profile.jpg"
                        style="height: 40px; width: 40px;"
                    />
                </q-avatar>
            </q-toolbar>
        </q-header>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const select = ref(null)
const selectOptions = ref([
    'Online',
    'Offline'
])
</script>