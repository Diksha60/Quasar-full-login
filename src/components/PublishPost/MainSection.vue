<template>
<div class="q-mt-md">
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-5 q-gutter-lg">
        <div class="md:tw-col-span-2">
            <strong class="tw-text-blue-900 tw-text-base">Post Preview:</strong>

            <div class="q-mt-sm">
                <div>
                    <q-tabs v-model="socialMediaTag" dense class="bg-transparent text-grey-7 tw-border tw-border-b-0  tw-rounded" active-bg-color="blue-1" active-color="primary" indicator-color="blue" align="justify">
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

                    <q-tab-panels v-model="socialMediaTag" animated class="tw-p-none">
                        <q-tab-panel name="facebook" class="tw-bg-sky-100 tw-border-0 tw-mt-4 tw-pt-9 tw-pb-[100px] tw-rounded-md">
                            <div class="bg-white tw-p-2 tw-rounded-sm">
                                <div class="flex tw-px-2">
                                    <q-avatar>
                                        <q-icon class="sm:tw-text-[20px] md:tw-text-[30px] lg:tw-text-[45px]" color="blue-grey-3" name="flag_circle" />
                                    </q-avatar>
                                    <div class="tw-ml-1 tw-mt-1">
                                        <strong class="text-blue-10 text-body2 text-weight-bold">Brown Panda Graphics and Services</strong>
                                        <p class="tw-text-[11px] text-grey-5">January 4 at 11:54 PM</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="tw-mt-4 tw-text-[14.5px] tw-font-medium">Information System</p>
                                </div>
                                <div class="tw-mt-3">
                                    <q-img src="/src/assets/PublishPost/Image.png" />
                                </div>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="instagram" class="tw-bg-sky-100 tw-border-0 tw-mt-4 tw-pt-9 tw-pb-[100px] tw-rounded-md">
                            <div class="bg-white tw-p-2 tw-rounded-sm ">
                                <div class="flex tw-px-2">
                                    <q-avatar>
                                        <q-icon size="2.9rem" color="blue-grey-3" name="flag_circle" />
                                    </q-avatar>
                                    <div class="tw-ml-1">
                                        <strong class="text-blue-10 text-body2 text-weight-bold">Brown Panda Graphics and Services</strong>
                                        <p class="tw-text-[11px] text-grey-5">January 4 at 11:54 PM</p>
                                    </div>
                                    <p class="tw-mt-4 tw-text-[14.5px] tw-font-medium">Information System</p>
                                </div>
                                <div class="tw-mt-3">
                                    <q-img src="/src/assets/PublishPost/Image.png" />
                                </div>
                            </div>
                        </q-tab-panel>

                    </q-tab-panels>
                </div>
            </div>
        </div>
        <div class="md:tw-col-span-3">
            <strong class="tw-text-blue-900 tw-text-[16px]">Constomize caption for facebook</strong>

            <q-form class="q-mt-sm">
                <q-select v-model="selectCategories" :options="categories" dense outlined label="Select Category" dropdown-icon="keyboard_arrow_down"/>
                <div class="tw-mt-4">
                    <strong class="tw-text-blue-900 tw-text-[16px]">Add a first comment</strong>
                </div>
                <div class="q-mt-sm">
                    <q-input input-style="margin-top: 20px" dense type="textarea" outlined label="Write your content..." />
                </div>
                <div class="flex justify-end q-mt-sm q-gutter-sm">
                    <q-btn dense text-color="blue" class="bg-blue-1" icon="mood" />
                    <!-- <component :is="icons.grid" class="tw-text-blue-500 bg-blue-1 tw-p-1" size="20"/> -->
                    <q-btn dense text-color="blue" class="bg-blue-1" icon="grid_3x3" />
                </div>

                <div class="q-mt-md">
                    <q-tabs v-model="tab" dense class="bg-transparent text-grey-7 tw-border tw-border-b-0  tw-rounded" active-bg-color="blue-1" active-color="primary" indicator-color="blue" align="justify">
                        <q-tab name="image" class="text-capitalize tw-font-medium">
                            <div class="flex items-center">
                                <component :is="icons.image" size="20"/>
                                <span class="q-ml-sm tw-text-sm">Add Image</span>
                            </div>
                        </q-tab>
                        <q-tab name="video" class="text-capitalize tw-font-medium">
                            <div class="flex items-center">
                                <component :is="icons.video" size="20"/>
                                <span class="q-ml-sm tw-text-sm">Add Videos</span>
                            </div>
                        </q-tab>
                        <q-tab name="url" class="text-capitalize tw-font-medium">
                            <div class="flex items-center">
                                <component :is="icons.url" size="20"/>
                                <span class="q-ml-sm tw-text-sm">Add URL</span>
                            </div>
                        </q-tab>
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated class="text-dark text-center">
                        <!-- <q-tab-panel name="image" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
                            
                                <q-file v-model="selectedFile" class="tw-w-full" accept="image/*" use-chips use-drop>
                                    <template v-slot:prepend>
                                        <div class="flex tw-flex-col tw-items-center">
                                            <q-icon size="md" class="text-blue" name="add_photo_alternate" />
                                            <p class="text-grey-6 tw-font-medium tw-text-sm tw-mt-3">
                                                Drag and drop image here or
                                                <a href="#" class="tw-text-sm text-weight-bold tw-text-blue-400 tw-decoration-0">
                                                    Choose an image
                                                </a>
                                            </p>
                                        </div>
                                    </template>
                                </q-file>
                                <div v-if="selectedFile" class="tw-mt-4">
                                    <q-img :src="previewUrl" class="tw-w-[100px] tw-h-[100px] tw-rounded" />
                                </div>
                            </div>
                        </q-tab-panel> -->

                        <q-tab-panel name="image" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] flex tw-flex-col tw-items-center">
                                <component :is="icons.upload" class="tw-text-blue-500 tw-text-center" size="24"/>
                                <p class="text-grey-6 tw-font-medium tw-text-sm tw-mt-3">Drag and drop image here or
                                    <a href="#" class="tw-text-sm text-weight-bold tw-text-blue-400 tw-decoration-0">Choose an image</a>
                                </p>
                            </div>
                        </q-tab-panel>

                        <!-- <q-tab-panel name="image" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
                                <q-file v-model="selectedFile" class="tw-w-full" label="Drag and drop an image or click to upload" accept="image/*" use-chips use-drop>
                                    <template v-slot:prepend>
                                        <q-icon size="md" class="text-blue" name="add_photo_alternate" />
                                    </template>
                                </q-file>
                                <div v-if="selectedFile" class="tw-mt-4">
                                    <q-img :src="previewUrl" class="tw-w-[100px] tw-h-[100px] tw-rounded" />
                                </div>
                            </div>
                        </q-tab-panel> -->

                        <q-tab-panel name="video" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] flex tw-flex-col tw-items-center">
                                <component :is="icons.upload" class="tw-text-blue-500 tw-text-center" size="24"/>
                                <p class="text-grey-6 tw-font-medium tw-text-sm tw-mt-3">Drag and drop video here or
                                    <a href="#" class="tw-text-sm text-weight-bold tw-text-blue-400 tw-decoration-0">Choose a video</a>
                                </p>
                            </div>
                        </q-tab-panel>

                        <!-- <q-tab-panel name="video" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
                                <q-file v-model="selectedVideo" class="tw-w-full" label="Drag and drop a video or click to upload" accept="video/*" use-chips use-drop>
                                    <template v-slot:prepend>
                                        <q-icon size="md" class="text-blue" name="video_library" />
                                    </template>
                                </q-file>
                                <p class="text-grey-6 tw-font-medium tw-text-sm tw-mt-3">
                                    Drag and drop video here or
                                    <a href="#" class="tw-text-sm text-weight-bold tw-text-blue-400 tw-decoration-0">
                                        Choose a video
                                    </a>
                                </p>
                                <div v-if="selectedVideo" class="tw-mt-4">
                                    <video class="tw-w-[200px] tw-rounded" controls :src="previewVideo" />
                                </div>
                            </div>
                        </q-tab-panel> -->

                        <q-tab-panel name="url" class="tw-p-1">
                            <div class="tw-border-[1px] tw-border-dashed tw-border-[#69b1fa] tw-rounded tw-p-[25px] flex tw-flex-col tw-items-center">
                                <component :is="icons.upload" class="tw-text-blue-500 tw-text-center" size="24"/>
                                <p class="text-grey-6 tw-font-medium tw-text-sm tw-mt-3">Drag and drop URL here or
                                    <a href="#" class="tw-text-sm text-weight-bold tw-text-blue-400 tw-decoration-0">Choose an URL</a>
                                </p>
                            </div>
                        </q-tab-panel>
                    </q-tab-panels>
                </div>
                <div class="q-mt-md flex justify-end">
                    <q-btn class="tw-bg-blue-500 text-capitalize text-white">
                        <div class="flex">
                            <span class="q-mr-sm">Publish</span>
                            <q-icon size="sm" name="menu" />
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
import * as HugeIcons from 'hugeicons-vue';

const icons = {
    grid: HugeIcons.GridIcon,
    image: HugeIcons.Album02Icon,
    video: HugeIcons.Video02Icon,
    url: HugeIcons.Link02Icon,
    upload: HugeIcons.ImageUploadIcon
}

const socialMediaTag = ref('facebook')
const tab = ref('image')
const selectedFile = ref(null)
const selectedVideo = ref(null)

const selectCategories = ref('')
const categories = [{
        label: 'Caption 1',
        value: 'tech'
    },
    {
        label: 'Caption 2',
        value: 'science'
    },
    {
        label: 'Caption 3',
        value: 'business'
    }
]
const previewUrl = () => {
    return selectedFile.value ? URL.createObjectURL(selectedFile.value) : '';
}
const previewVideo = () => {
    return selectedVideo.value ? URL.createObjectURL(selectedVideo.value) : '';
}
</script>
