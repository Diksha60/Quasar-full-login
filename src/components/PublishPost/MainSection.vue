<template>
<div class="q-mt-md">
    <div class="row q-gutter-lg">
        <div class="col col-auto">
            <strong class="text-blue-9">Post Preview:</strong>

            <div class="q-mt-sm row">
                <q-card>
                    <q-tabs v-model="socialMediaTag" dense class="bg-transparent text-grey-7" active-bg-color="blue-1" active-color="primary" indicator-color="blue" align="justify">
                        <q-tab name="facebook" class="text-capitalize">
                            <div class="flex items-center">
                                <q-img size="sm" width="30px" height="30px" src="/src/assets/PublishPost/Facebook.jpg" />
                                <span class="q-ml-sm text-subtitle2">Facebook</span>
                            </div>
                        </q-tab>
                        <q-tab name="instagram" class="text-capitalize">
                            <div class="flex items-center">
                                <q-img size="sm" width="30px" height="30px" src="/src/assets/PublishPost/Instagram.jpg" />
                                <span class="q-ml-sm text-subtitle2">Instagram</span>
                            </div>
                        </q-tab>
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="socialMediaTag" animated>
                        <q-tab-panel name="facebook">
                            <div class="bg-light-blue-1 q-pt-lg q-pb-xl q-px-sm" style="border-radius: 6px;">
                                <div class="bg-white" style="border-radius: 6px;">
                                    <q-list style="width: 400px;">
                                        <q-item dense>
                                            <q-item-section class="flex" avatar>
                                                <q-avatar>
                                                    <q-icon size="2.9rem" color="blue-grey-3" name="flag_circle" />
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
                        </q-tab-panel>

                        <q-tab-panel name="instagram">
                            <div class="bg-light-blue-1 q-pt-lg q-pb-xl q-px-sm" style="border-radius: 6px;">
                                <div class="bg-white" style="border-radius: 6px;">
                                    <q-list style="width: 400px;">
                                        <q-item dense>
                                            <q-item-section class="flex" avatar>
                                                <q-avatar>
                                                    <q-icon size="2.9rem" color="blue-grey-3" name="flag_circle" />
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
                        </q-tab-panel>

                    </q-tab-panels>
                </q-card>
            </div>
        </div>
        <div class="col">
            <strong class="text-blue-9">Constomize caption for facebook</strong>

            <q-form class="q-mt-sm">
                <q-select v-model="selectCategories" :options="categories" dense outlined label="Select Category" />
                <div class="q-mt-sm">
                    <strong class="text-blue-9">Add a first comment</strong>
                </div>
                <div class="q-mt-sm">
                    <q-input input-style="margin-top: 20px" dense type="textarea" outlined label="Write your content..." />
                </div>
                <div class="flex justify-end q-mt-sm q-gutter-sm">
                    <q-btn dense text-color="blue" class="bg-blue-1" icon="mood" />
                    <q-btn dense text-color="blue" class="bg-blue-1 text-subtitle1 text-weight-bold" padding="2px 11px 2px 11px" label="#" />
                </div>

                <div class="q-mt-md">
                    <q-card>
                        <q-tabs v-model="tab" dense class="bg-transparent text-grey-7" active-bg-color="blue-1" active-color="primary" indicator-color="blue" align="justify">
                            <q-tab name="image" class="text-capitalize">
                                <div class="flex items-center">
                                    <q-icon size="sm" name="photo_library" />
                                    <span class="q-ml-sm text-subtitle1">Add Image</span>
                                </div>
                            </q-tab>
                            <q-tab name="video" class="text-capitalize">
                                <div class="flex items-center">
                                    <q-icon size="sm" name="videocam" />
                                    <span class="q-ml-sm text-subtitle1">Add Videos</span>
                                </div>
                            </q-tab>
                            <q-tab name="url" class="text-capitalize">
                                <div class="flex items-center">
                                    <q-icon size="sm" name="link" />
                                    <span class="q-ml-sm text-subtitle1">Add URL</span>
                                </div>
                            </q-tab>
                        </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="tab" animated class="text-dark text-center" style="border: 0;">
                            <q-tab-panel name="image">
                                <div style="border: 2px dashed #69b1fa; padding: 25px;">
                                    <div clickable>
                                        <q-icon size="md" class="text-blue" name="add_photo_alternate" />
                                    </div>
                                    <p class="text-grey-6 text-subtitle2">Drag and drop image here or 
                                        <a href="#" class="text-subtitle1 text-weight-bold text-blue" style="text-decoration: none;">Choose an image</a>
                                    </p>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="video" class="bg-grey-9 text-white">
                                <div class="text-h6">Video</div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </q-tab-panel>

                            <q-tab-panel name="url" class="bg-lime-1 text-dark">
                                <div class="text-h6">url</div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </q-tab-panel>
                        </q-tab-panels>
                    </q-card>
                </div>
                <div class="q-mt-md flex justify-end">
                    <q-btn class="bg-blue text-capitalize text-white">
                        <div class="flex">
                            <span class="q-mr-sm">Publish</span>
                            <q-icon size="sm" name="menu"/>
                        </div>
                    </q-btn>
                </div>
            </q-form>
        </div>
    </div>
</div>
</template>

<script setup>
import {
    ref
} from 'vue';

const socialMediaTag = ref('facebook')
const tab = ref('image')

const selectCategories = ref('')
 const categories = [
    { label: 'Technology', value: 'tech' },
    { label: 'Science', value: 'science' },
    { label: 'Business', value: 'business' }
 ]
</script>
