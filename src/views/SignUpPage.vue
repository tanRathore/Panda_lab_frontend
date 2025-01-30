<template>
      <div class="flex justify-content-center align-items-center h-screen">
        <Card class="w-full sm:w-30rem">
          <template #title>
            <div class="text-center">
              <h2>Sign Up</h2>
            </div>
          </template>
          <template #content>
            <form @submit.prevent="handleSignUp">
              <div class="mb-3">
                <label for="signup-email" class="block mb-2">Email</label>
                <InputText
                  id="signup-email"
                  v-model="email"
                  type="email"
                  class="w-full"
                  :class="{ 'p-invalid': emailError }"
                  required
                  aria-describedby="email-help"
                />
                <Message v-if="emailError" severity="error" :closable="false">{{
                  emailError
                }}</Message>
              </div>
              <div class="mb-3">
                <label for="signup-password" class="block mb-2">Password</label>
                <Password
                  id="signup-password"
                  v-model="password"
                  class="w-full"
                  toggleMask
                  :class="{ 'p-invalid': passwordError }"
                  required
                  aria-describedby="password-help"
                />
                <Message v-if="passwordError" severity="error" :closable="false">{{
                  passwordError
                }}</Message>
              </div>
              <div class="mb-3">
                <label for="confirm-password" class="block mb-2"
                  >Confirm Password</label
                >
                <Password
                  id="confirm-password"
                  v-model="confirmPassword"
                  class="w-full"
                  toggleMask
                  :feedback="false"
                  :class="{ 'p-invalid': confirmPasswordError }"
                  required
                  aria-describedby="confirm-password-help"
                />
                <Message
                  v-if="confirmPasswordError"
                  severity="error"
                  :closable="false"
                  >{{ confirmPasswordError }}</Message
                >
              </div>
              <div class="mb-3 flex align-items-center">
                <Checkbox
                  v-model="agreeTerms"
                  :binary="true"
                  class="mr-2"
                  :class="{ 'p-invalid': termsError }"
                />
                <label for="agree-terms"
                  >I agree to the terms and conditions</label
                >
              </div>
              <Message v-if="termsError" severity="error" :closable="false">{{
                termsError
              }}</Message>
              <Button
                type="submit"
                label="Sign Up"
                class="w-full"
                :loading="isLoading"
              />
            </form>
          </template>
          <template #footer>
            <div class="text-center">
              Already have an account?
              <router-link to="/">Login</router-link>
            </div>
          </template>
        </Card>
      </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import { useToast } from 'primevue/usetoast';

    const toast = useToast();
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const agreeTerms = ref(false);
    const emailError = ref('');
    const passwordError = ref('');
    const confirmPasswordError = ref('');
    const termsError = ref('');
    const isLoading = ref(false);

    const handleSignUp = async () => {
      emailError.value = !email.value ? 'Email is required.' : '';
      passwordError.value = !password.value ? 'Password is required.' : '';
      confirmPasswordError.value =
        password.value !== confirmPassword.value
          ? 'Passwords do not match.'
          : '';
      termsError.value = !agreeTerms.value
        ? 'You must agree to the terms and conditions.'
        : '';

      if (
        emailError.value ||
        passwordError.value ||
        confirmPasswordError.value ||
        termsError.value
      )
        return;

      isLoading.value = true;
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Handle successful sign-up
        toast.add({
          severity: 'success',
          summary: 'Sign Up Successful',
          detail: 'Account created! Please log in.',
          life: 3000,
        });
      } catch (error) {
        toast.add({
          severity: 'error',
          summary: 'Sign Up Failed',
          detail: 'An error occurred. Please try again.',
          life: 3000,
        });
      } finally {
        isLoading.value = false;
      }
    };
    </script>
