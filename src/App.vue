<template>
  <div :class="{ 'dark-mode': darkMode }">
    <Menu :model="menuItems" class="p-2" />
    <div class="p-2 flex justify-content-end">
      <Button icon="pi pi-sun" @click="toggleDarkMode" class="p-button-rounded p-button-text" :class="{ 'p-button-secondary': !darkMode }" aria-label="Enable light mode" />
      <Button icon="pi pi-moon" @click="toggleDarkMode" class="p-button-rounded p-button-text" :class="{ 'p-button-secondary': darkMode }" aria-label="Enable dark mode" />
    </div>
    <Toast />
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRoute, useRouter } from 'vue-router';

const toast = useToast();
const route = useRoute();
const router = useRouter();
const darkMode = ref(false);

const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    },
  },
  {
    label: 'Profile',
    icon: 'pi pi-user',
    command: () => {
      router.push('/profile');
    },
  },
  {
    label: 'Food Log',
    icon: 'pi pi-book',
    command: () => {
      router.push('/food-log-entry');
    },
  },
  {
    label: 'Dashboard',
    icon: 'pi pi-chart-bar',
    command: () => {
      router.push('/dashboard');
    },
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    command: () => {
      router.push('/settings');
    },
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
    command: () => {
      // Simulate logout
      localStorage.removeItem('isLoggedIn');
      toast.add({
        severity: 'info',
        summary: 'Logged Out',
        detail: 'You have been logged out.',
        life: 3000,
      });
      router.push('/');
    },
  },
]);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};

onMounted(() => {
  if (route.name === 'Login') {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      router.push('/dashboard');
    } else {
      toast.add({
        severity: 'info',
        summary: 'Welcome!',
        detail: 'Please log in to continue.',
        life: 3000,
      });
    }
  }
});
</script>

<style>
body.dark-mode {
  background-color: #333;
  color: #eee;
}
</style>
