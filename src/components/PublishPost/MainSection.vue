<template>
<div class="q-mt-md">
    <div class="row q-gutter-lg">
        <div class="col col-auto">
            <strong class="text-blue-9">Post Preview:</strong>

            <div class="q-mt-sm row">
                <div class="col">
                    <q-item 
                    dense
                        class="q-pa-xs row justify-center" 
                        style="border: 1px solid #dee1e3; border-radius: 4px; border-right: 0; border-top-right-radius: 0; border-bottom-right-radius: 0;"
                        :class="{ 'bg-light-blue-1': !$q.isActive, 'bg-transparent': $q.isActive }"
                    >
                        <q-item-section class=" q-ml-xl col col-auto">
                            <q-img height="30px" width="30px" src="/src/assets/PublishPost/Facebook.jpg"/>
                        </q-item-section>
                        <q-item-section class="col">
                            <strong class="text-blue-9">Facebook</strong>
                        </q-item-section>
                    </q-item>
                </div>

                <div class="col">
                    <q-item 
                        dense
                        class="q-pa-xs row justify-center" 
                        style="border: 1px solid #dee1e3; border-radius: 4px; border-left: 0; border-top-left-radius: 0; border-bottom-left-radius: 0;"
                    >
                        <q-item-section class="q-ml-xl col col-auto">
                            <q-img width="30px" height="30px" src="/src/assets/PublishPost/Instagram.jpg"/>
                        </q-item-section>
                        <q-item-section class="col">
                            <span class="text-grey-7">Instagram</span>
                        </q-item-section>
                    </q-item>
                </div>
            </div>

            <div 
                class="q-mt-md bg-light-blue-1 q-pt-lg q-pb-xl q-px-sm"
                style="border-radius: 6px;"
            >
                <div class="bg-white" style="border-radius: 6px;">
                    <q-list style="width: 400px;">
                        <q-item dense>
                            <q-item-section class="flex" avatar>
                                <q-avatar>
                                    <q-icon size="2.9rem" color="blue-grey-3" name="flag_circle"/>
                                </q-avatar>
                            </q-item-section>
                            <q-item-section class="q-mt-md">
                                <strong class="text-blue-10 text-body2 text-weight-bold">Brown Panda Graphics and Services</strong>
                                <p class="text-caption text-grey-5">January 4 at 11:54 PM</p>
                            </q-item-section>
                        </q-item>
                        <q-item dense>
                            <q-item-section class="text-text-subtitle2 text-weight-medium">
                                Information System
                            </q-item-section>
                        </q-item>
                        <q-item dense>
                            <q-item-section>
                                <q-img src="/src/assets/PublishPost/Image.png" />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>
        </div>
        <div class="col">
            <strong class="text-blue-9">Constomize caption for facebook</strong>

            <q-form class="q-mt-sm">
                <q-select dense outlined label="Select Category" />
                <div class="q-mt-sm">
                    <strong class="text-blue-9">Add a first comment</strong>
                </div>
                <q-input dense type="textarea" outlined label="Write your content..."/>
            </q-form>
        </div>
    </div>
</div>
</template>

  
<script setup></script>
