<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <Card class="w-full sm:w-30rem">
      <template #title>
        <div class="text-center">
          <h2>Login</h2>
        </div>
      </template>
      <template #content>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="block mb-2">Email</label>
            <InputText
              id="email"
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
            <label for="password" class="block mb-2">Password</label>
            <Password
              id="password"
              v-model="password"
              class="w-full"
              toggleMask
              :feedback="false"
              :class="{ 'p-invalid': passwordError }"
              required
              aria-describedby="password-help"
            />
            <Message v-if="passwordError" severity="error" :closable="false">{{
              passwordError
            }}</Message>
          </div>
          <div class="flex justify-content-end mb-3">
            <a href="#" class="text-sm">Forgot Password</a>
          </div>
          <div class="flex justify-content-between">
            <Button
              type="submit"
              label="Login"
              class="w-full mr-2"
              :loading="isLoading"
            />
            <Button
              type="button"
              label="Skip Login"
              class="w-full ml-2 p-button-secondary"
              @click="skipLogin"
            />
          </div>
        </form>
      </template>
      <template #footer>
        <div class="text-center">
          Don't have an account?
          <router-link to="/signup">Sign Up</router-link>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  emailError.value = !email.value ? 'Email is required.' : '';
  passwordError.value = !password.value ? 'Password is required.' : '';

  if (emailError.value || passwordError.value) return;

  isLoading.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if email and password match the dummy user
    if (email.value === 'test@example.com' && password.value === 'password123') {
      // Handle successful login
      localStorage.setItem('isLoggedIn', 'true');
      toast.add({
        severity: 'success',
        summary: 'Login Successful',
        detail: 'Welcome back!',
        life: 3000,
      });
      router.push('/dashboard');
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Login Failed',
      detail: 'Invalid credentials. Please try again.',
      life: 3000,
    });
  } finally {
    isLoading.value = false;
  }
};

const skipLogin = () => {
  localStorage.setItem('isLoggedIn', 'true');
  router.push('/dashboard');
};
</script>
