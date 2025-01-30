<template>
      <div>
        <Menu :model="menuItems" class="p-2" />
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
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => {
          // Simulate logout
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

    onMounted(() => {
      if (route.name === 'Login') {
        toast.add({
          severity: 'info',
          summary: 'Welcome!',
          detail: 'Please log in to continue.',
          life: 3000,
        });
      }
    });
    </script>
