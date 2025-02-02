<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="flex flex-center">
            <q-input
              filled
              label="Select Image"
              v-model="imageName"
              readonly
              dense
            />
            <q-btn
              flat
              label="Upload Image"
              color="primary"
              @click="selectImage"
            />
          </div>
  
          <q-file
            v-model="imageFile"
            accept="image/*"
            label="Choose Image"
            filled
            color="primary"
            @added="onImageSelected"
          />
  
          <!-- Image preview -->
          <div v-if="imageUrl" class="q-mt-md">
            <q-img :src="imageUrl" alt="Selected Image" />
          </div>
  
          <q-btn
            label="Submit"
            color="primary"
            class="q-mt-md"
            @click="submitImage"
          />
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageFile: null,      // The file object (selected image)
        imageName: "",        // The name of the selected file
        imageUrl: "",         // The URL for the image preview
      };
    },
    methods: {
      // Triggered when the user selects a file
      onImageSelected(file) {
        this.imageFile = file;
        this.imageName = file.name;
        this.imageUrl = URL.createObjectURL(file);
      },
  
      // Handle image submission
      submitImage() {
        if (this.imageFile) {
          // You can handle the image upload here (e.g., upload to a server)
          console.log("Submitting image:", this.imageFile);
          
          // For example, uploading via FormData (POST request)
          const formData = new FormData();
          formData.append("image", this.imageFile);
  
          // You can use Axios or fetch to send the image to the server.
          // axios.post('/upload', formData).then(response => {
          //   console.log('Image uploaded successfully', response);
          // }).catch(error => {
          //   console.error('Error uploading image:', error);
          // });
        } else {
          console.log("No image selected");
        }
      },
  
      // Open the file selection dialog
      selectImage() {
        this.$refs.fileInput.click();
      },
    },
  };
  </script>