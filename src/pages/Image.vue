<template>
  <q-page class="q-pa-md">
      <q-uploader ref="uploader" class="tw-text-red-600" label="Drag & Drop Files Here" multiple :auto-upload="false" @added="onFilesAdded" style="max-width: 400px">
          <template v-slot:header="scope">
              <div class="q-pa-sm row items-center">
                  <q-btn label="Upload All" color="primary" @click="scope.upload" class="q-mr-sm" />
                  <q-btn label="Clear" color="negative" @click="scope.removeQueuedFiles" />
              </div>
          </template>
      </q-uploader> 
      <q-uploader>

      </q-uploader>
      <q-file></q-file>
  </q-page>
</template>

<script setup>
const onFilesAdded = (files) => {
    console.log("Files added:", files);
  }
</script>
  