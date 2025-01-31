<template>
<q-form @submit="login">
    <div class="flex justify-center">
        <div class="">
            <strong class="text-blue-10">Username/Email/Number</strong>
            <div class="q-mt-sm">
                <q-input 
                    outlined 
                    v-model="username"
                    style="width: 450px;" 
                    label="Enter your username, email or number"
                    :rules="[ val => val && val.length > 0 || 'Please type your username, email or number']" 
                />
            </div>
        </div>
    </div>
    <div class="flex justify-center q-mt-md">
        <div class="">
            <strong class="text-blue-10">Password</strong>
            <div class="q-mt-sm">
                <q-input 
                    outlined 
                    v-model="password" 
                    :type="isPwd ? 'password' : 'text'" 
                    style="width: 450px;" label="Enter your password"
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
    <div class="flex justify-center text-blue q-my-md">
        <span>- - - - - - - - - - - - - - - - - - - - - Forgot your password - - - - - - - - - - - - - - - - - - - - -</span>
    </div>
    <div class="flex justify-center">
        <q-btn 
            type="submit"
            class="bg-indigo-14 text-white text-capitalize text-weight-bold" 
            style="width: 450px;" 
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
    username: 'regan@gmail.com',
    password: 'Regan123',
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
