<template>
    <div class="q-pa-md">
        <q-header 
            class="bg-white shadow-1 tw-h-[70px]"
        >
            <q-toolbar>
                <q-avatar 
                    square
                    class="tw-w-[100px] tw-h-[70px]"
                >
                    <q-img src="../assets/logo/Logo.png" />
                </q-avatar>

                <q-space />

                <q-input 
                    outlined
                    dense 
                    label="Enter mobile number"
                    class="tw-w-full md:tw-w-[400px] tw-mr-[16px]"
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
                <q-select 
                    outlined
                    dense
                    class="tw-w-[150px] md:tw-w-[180px]"
                    v-model="select" 
                    :options="selectOptions" 
                    label="Active Status" 
                    dropdown-icon="keyboard_arrow_down"
                />
                <q-avatar>
                    <q-icon 
                        name="signal_cellular_alt"
                        square
                        class="tw-h-[53px] text-red"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="group"
                        square
                        class="tw-h-[53px] tw-text-blue-900"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="crop_square"
                        square
                        class="tw-h-[53px] tw-text-blue-900"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <q-icon 
                        name="notifications"
                        square
                        class="tw-h-[53px] tw-text-blue-900"
                        size="28px"
                    />
                </q-avatar>
                <q-avatar>
                    <div @click="logout">
                        <q-img 
                            src="../assets/profile/Profile.jpg"
                            class="tw-h-[40px] tw-w-[40px]" 
                        />
                    </div>
                </q-avatar>
            </q-toolbar>
        </q-header>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const select = ref(null)
const selectOptions = ref([
    'Online',
    'Offline'
])

const logout = () => {
    localStorage.removeItem('user')
    router.push('/login')
}
</script>