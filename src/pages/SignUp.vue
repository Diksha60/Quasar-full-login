<template>
    <q-layout>
        <q-page-container>
            <q-page class="q-my-xl">
                <div class="flex flex-center">
                    <q-img width="150px" height="70px" src="../assets/logo/Logo.png"/>
                </div>
                <div class="flex flex-center">
                    <span class="tw-text-xl tw-font-semibold">Your one window for 
                    </span>
                    <q-img width="160px" height="30px" class="q-ml-sm" src="../assets/login/Image1.png"/>
                </div>
                <div class="flex flex-center q-mt-md">
                    <q-form @submit="register">
                        <div class="flex">
                            <div class="q-mt-sm">
                                <strong class="text-blue-10 tw-text-[15px]">Name</strong>
                                <div class="q-mt-sm">
                                    <q-input 
                                        outlined 
                                        v-model="name"
                                        class="tw-w-[450px]"
                                        label="Enter your name"
                                        :rules="[ val => val && val.length > 0 || 'Please type your name']" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="q-mt-sm">
                                <strong class="text-blue-10 tw-text-[15px]">Email</strong>
                                <div class="q-mt-sm">
                                    <q-input 
                                        outlined 
                                        v-model="email"
                                        class="tw-w-[450px]"
                                        label="Enter your email"
                                        :rules="[ 
                                                val => val && val.length > 0 || 'Please type your email address',
                                                val => /.+@.+\..+/.test(val) || 'Incorrect email address',
                                            ]" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex q-mt-sm">
                            <div class="">
                                <strong class="text-blue-10 tw-text-[15px]">Password</strong>
                                <div class="q-mt-sm">
                                    <q-input 
                                        outlined 
                                        v-model="password" 
                                        :type="isPwd ? 'password' : 'text'" 
                                        class="tw-w-[450px]" 
                                        label="Enter your password"
                                        :rules="[
                                            val => val !== null && val !== '' || 'Please type your password',
                                            val => val.length >= 8 || 'Password mush have 8 characters',
                                            val => /[a-z]/.test(val) && /[A-Z]/.test(val) || 'Password must have atleast 1 upper and 1 lower case',
                                            val => /\d/.test(val) || 'Password must have atleast number',
                                        ]"
                                    >
                                        <template v-slot:append>
                                            <q-icon 
                                                :name="isPwd ? 'visibility_off' : 'visibility'" 
                                                class="cursor-pointer" 
                                                @click="isPwd = !isPwd" 
                                            />
                                        </template>
                                    </q-input>
                                </div>
                            </div>
                        </div>
                        <div class="flex q-mt-sm">
                            <div class="">
                                <strong class="text-blue-10 tw-text-[15px]">Confirm Password</strong>
                                <div class="q-mt-sm">
                                    <q-input 
                                        outlined 
                                        v-model="confirmPassword" 
                                        :type="isPwd ? 'password' : 'text'" 
                                        class="tw-w-[450px]" 
                                        label="Confirm your password"
                                        :rules="[
                                            val => val !== null && val !== '' || 'Please type your password',
                                            val => val.length >= 8 || 'Password mush have 8 characters',
                                            val => /[a-z]/.test(val) && /[A-Z]/.test(val) || 'Password must have atleast 1 upper and 1 lower case',
                                            val => /\d/.test(val) || 'Password must have atleast number',
                                            val => val === password || 'Password do not match'
                                        ]"
                                    >
                                        <template v-slot:append>
                                            <q-icon 
                                                :name="isPwd ? 'visibility_off' : 'visibility'" 
                                                class="cursor-pointer" 
                                                @click="isPwd = !isPwd" 
                                            />
                                        </template>
                                    </q-input>
                                </div>
                            </div>
                        </div>
                        <div class="q-mt-md">
                            <q-btn type="submit" class="tw-bg-blue-600 text-white text-subtitle1 text-weight-bold text-capitalize tw-text-[18px] tw-w-[450px] tw-p-3" label="Register"/>
                        </div>
                        <div class="flex flex-center q-mt-sm tw-font-medium ">
                            Already have an account ?
                            <q-btn flat dense class="text-blue text-capitalize" label="Login" to="/login"/>
                        </div>
                    </q-form>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('')
const email = ref('')
const password = ref('')
const isPwd = ref(true)
const confirmPassword = ref('')

const router = useRouter()


const register = () => {
    const validUser = ref({
        name: name.value,
        email: email.value,
        password: password.value
    })
    localStorage.setItem('user', JSON.stringify(validUser))
    router.push('/')
}
</script>