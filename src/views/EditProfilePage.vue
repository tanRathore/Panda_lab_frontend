<template>
  <div class="p-4">
    <Card>
      <template #title>
        <div class="text-center">
          <h2>Edit Profile</h2>
        </div>
      </template>
      <template #content>
        <div class="grid p-fluid">
          <div class="col-12">
            <label for="profilePicture" class="block mb-2">Profile Picture</label>
            <FileUpload
              mode="basic"
              name="profilePicture"
              url="/api/upload"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
              auto="true"
              chooseLabel="Choose File"
            />
          </div>
          <div class="col-12 md:col-6">
            <label for="firstName" class="block mb-2">First Name</label>
            <InputText
              id="firstName"
              v-model="firstName"
              class="w-full"
              :class="{ 'p-invalid': firstNameError }"
              required
            />
            <Message v-if="firstNameError" severity="error" :closable="false">{{
              firstNameError
            }}</Message>
          </div>
          <div class="col-12 md:col-6">
            <label for="lastName" class="block mb-2">Last Name</label>
            <InputText
              id="lastName"
              v-model="lastName"
              class="w-full"
              :class="{ 'p-invalid': lastNameError }"
              required
            />
            <Message v-if="lastNameError" severity="error" :closable="false">{{
              lastNameError
            }}</Message>
          </div>
          <div class="col-12">
            <label for="contactEmail" class="block mb-2">Contact Email</label>
            <InputText
              id="contactEmail"
              v-model="contactEmail"
              type="email"
              class="w-full"
              :class="{ 'p-invalid': emailError }"
              required
            />
            <Message v-if="emailError" severity="error" :closable="false">{{
              emailError
            }}</Message>
          </div>
        </div>
        <div class="flex justify-content-end mt-4">
          <Button label="Save Changes" @click="confirmSave" :loading="isLoading" />
        </div>
        <Dialog
          v-model:visible="showDialog"
          modal
          header="Confirm Changes"
          :style="{ width: '350px' }"
        >
          <p>Are you sure you want to save the changes?</p>
          <template #footer>
            <Button label="Cancel" @click="showDialog = false" class="p-button-text" />
            <Button label="Confirm" @click="saveChanges" autofocus />
          </template>
        </Dialog>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

// Dummy data for the profile
const firstName = ref('John');
const lastName = ref('Doe');
const contactEmail = ref('john.doe@example.com');
const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const isLoading = ref(false);
const showDialog = ref(false);

const onUpload = (event) => {
  toast.add({
    severity: 'info',
    summary: 'Success',
    detail: 'File Uploaded',
    life: 3000,
  });
};

const confirmSave = () => {
  firstNameError.value = !firstName.value ? 'First Name is required.' : '';
  lastNameError.value = !lastName.value ? 'Last Name is required.' : '';
  emailError.value = !contactEmail.value ? 'Email is required.' : '';

  if (firstNameError.value || lastNameError.value || emailError.value) return;

  showDialog.value = true;
};

const saveChanges = async () => {
  isLoading.value = true;
  showDialog.value = false;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Handle successful save
    toast.add({
      severity: 'success',
      summary: 'Profile Updated',
      detail: 'Your profile has been updated successfully.',
      life: 3000,
    });
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Update Failed',
      detail: 'An error occurred while updating your profile.',
      life: 3000,
    });
  } finally {
    isLoading.value = false;
  }
};
</script>
