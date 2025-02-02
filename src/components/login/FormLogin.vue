<template>
<q-form @submit="login">
    <div class="flex justify-center">
        <div class="">
            <strong class="text-blue-10 tw-text-[15px]">Username/Email/Number</strong>
            <div class="q-mt-sm">
                <q-input 
                    outlined 
                    v-model="username"
                    class="tw-w-[450px]"
                    label="Enter your username, email or number"
                    :rules="[ val => val && val.length > 0 || 'Please type your username, email or number']" 
                />
            </div>
        </div>
    </div>
    
    <div class="flex mt-[200px] justify-center q-mt-md">
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
    <div class="flex justify-center tw-font-semibold tw-text-blue-500 q-my-md">
        <span>- - - - - - - - - - - - - - - - Forgot your password ? - - - - - - - - - - - - - - - -</span>
    </div>
    <div class="flex justify-center">
        <q-btn 
            type="submit"
            class="tw-bg-blue-600 text-white tw-text-[18px] text-capitalize text-weight-bold tw-w-[450px] tw-p-3"
            label="Login" 
        >
            <q-popup-proxy v-if="error">
                <q-banner>
                    <q-icon size="sm" name="priority_high" color="red" />
                    <span class="text-red text-weight-bold">Invalid username and password</span>
                </q-banner>
            </q-popup-proxy>
        </q-btn>
    </div>
</q-form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const isPwd = ref(true)
const error = ref(null)
const router = useRouter()


const validData = {
    username: 'test@test.com',
    password: 'Test1234',
    tokan: 'fake-jwt-token-12345',

}

const login = () => {
    if ( username.value === validData.username && password.value === validData.password ) {
        localStorage.setItem('user', JSON.stringify(validData))
        router.push('/')
    } else {
        error.value = 'Invalid username and password'
    }
}
</script>
