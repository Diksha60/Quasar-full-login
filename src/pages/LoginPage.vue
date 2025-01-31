<template>
    <q-layout>
        <q-page-container>
            <q-page class="">
                <q-card class="q-py-xl" style="min-height: 100vh">
                    <q-card-section>
                        <div class="flex justify-center">
                            <q-img width="150px" height="70px" src="../assets/logo/Logo.png"/>
                        </div>
                        <div class="flex justify-center">
                            <span class="text-subtitle1 text-weight-bold">Your one window for</span>
                            <q-img width="150px" class="q-ml-sm" src="../assets/login/Image1.png"/>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <FormLogin />
                    </q-card-section>
                    <q-card-section>
                        <div class="flex flex-center q-mt-md">
                            <div class="shadow-1 q-mr-md">
                                <q-img width="130px" height="80px" src="../assets/login/img1.png">
                                    <q-tooltip class="bg-white shadow-1" style="width: 220px;" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                            
                                        <div class="text-center">
                                            <strong class="text-blue-10 text-subtitle2 text-weight-bold">Socials</strong>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-grey-6">The easiest way to increase your brands on social medias.</span>
                                        </div>
                                    </q-tooltip>
                                </q-img>
                            </div>
                            <div class="shadow-1 q-mr-md">
                                <q-img width="130px" height="80px" src="../assets/login/img2.png">
                                    <q-tooltip class="bg-white shadow-1" style="width: 220px;" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                            
                                        <div class="text-center">
                                            <strong class="text-blue-10 text-subtitle2 text-weight-bold">Socials</strong>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-grey-6">The easiest way to increase your brands on social medias.</span>
                                        </div>
                                    </q-tooltip>
                                </q-img>
                            </div>
                            <div class="shadow-1 q-mr-md">
                                <q-img width="130px" height="80px" src="../assets/login/img3.png">
                                    <q-tooltip class="bg-white shadow-1" style="width: 220px;" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                            
                                        <div class="text-center">
                                            <strong class="text-blue-10 text-subtitle2 text-weight-bold">Socials</strong>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-grey-6">The easiest way to increase your brands on social medias.</span>
                                        </div>
                                        </q-tooltip>
                                </q-img>
                            </div>
                            <div class="shadow-1 q-mr-md">
                                <q-img width="130px" height="80px" src="../assets/login/img4.png">
                                    <q-tooltip class="bg-white shadow-1" style="width: 220px;" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                    
                                        <div class="text-center">
                                            <strong class="text-blue-10 text-subtitle2 text-weight-bold">Socials</strong>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-grey-6">The easiest way to increase your brands on social medias.</span>
                                        </div>
                                    </q-tooltip>
                                </q-img>
                            </div>
                            <div class="shadow-1 q-mr-md">
                                <q-img width="130px" height="80px" src="../assets/login/img5.png">
                                    <q-tooltip class="bg-white shadow-1" style="width: 220px;" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                                            
                                        <div class="text-center">
                                            <strong class="text-blue-10 text-subtitle2 text-weight-bold">Socials</strong>
                                        </div>
                                        <div class="text-center">
                                            <span class="text-grey-6">The easiest way to increase your brands on social medias.</span>
                                        </div>
                                    </q-tooltip>
                                </q-img>
                            </div>
                        </div>

                        <div class="flex flex-center q-mt-md text-overline text-grey-6">
                            <span>Copyright @ Sociair 2025.</span>
                        </div>
                    </q-card-section>
                    <q-card-section>
                        <div class="flex flex-center">
                            Don't you have an account ?
                            <q-btn flat dense class="text-blue text-capitalize" label="Register" to="/register"/>
                        </div>
                    </q-card-section>
                </q-card>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import FormLogin from 'src/components/login/FormLogin.vue';
</script>