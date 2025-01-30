<template>
      <div class="p-4">
        <Card>
          <template #title>
            <div class="text-center">
              <h2>Profile</h2>
            </div>
          </template>
          <template #content>
            <TabView>
              <TabPanel header="Personal Information">
                <div class="grid p-fluid">
                  <div class="col-12 md:col-6">
                    <label for="firstName" class="block mb-2">First Name</label>
                    <InputText id="firstName" v-model="firstName" class="w-full" />
                  </div>
                  <div class="col-12 md:col-6">
                    <label for="lastName" class="block mb-2">Last Name</label>
                    <InputText id="lastName" v-model="lastName" class="w-full" />
                  </div>
                  <div class="col-12">
                    <label for="contactEmail" class="block mb-2">Contact Email</label>
                    <InputText id="contactEmail" v-model="contactEmail" class="w-full" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Billing Information">
                <div class="grid p-fluid">
                  <div class="col-12 md:col-6">
                    <label for="paymentMethod" class="block mb-2">Payment Method</label>
                    <Dropdown
                      id="paymentMethod"
                      v-model="paymentMethod"
                      :options="paymentOptions"
                      optionLabel="name"
                      placeholder="Select a Payment Method"
                      class="w-full"
                    />
                  </div>
                  <div class="col-12 md:col-6" v-if="paymentMethod && paymentMethod.code === 'cc'">
                    <label for="cardNumber" class="block mb-2">Card Number</label>
                    <InputMask
                      id="cardNumber"
                      v-model="cardNumber"
                      mask="9999-9999-9999-9999"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      class="w-full"
                    />
                  </div>
                </div>
              </TabPanel>
            </TabView>
            <div class="flex justify-content-end mt-4">
              <Button label="Edit Profile" @click="goToEditProfile" />
            </div>
          </template>
        </Card>
      </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    // Dummy data for the profile
    const firstName = ref('John');
    const lastName = ref('Doe');
    const contactEmail = ref('john.doe@example.com');
    const paymentMethod = ref(null);
    const cardNumber = ref('');

    const paymentOptions = ref([
      { name: 'Credit Card', code: 'cc' },
      { name: 'PayPal', code: 'pp' },
      { name: 'Bank Transfer', code: 'bt' },
    ]);

    const goToEditProfile = () => {
      router.push('/profile/edit');
    };
    </script>
