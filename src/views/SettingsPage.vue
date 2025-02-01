<template>
    <Card>
      <template #title>
        <div class="text-center">
          <h2>Settings</h2>
        </div>
      </template>
      <template #content>
        <div class="grid p-fluid">
          <div class="col-12">
            <label for="unit-measurement" class="block mb-2">Unit Measurement</label>
            <Dropdown id="unit-measurement" v-model="selectedUnit" :options="unitOptions" optionLabel="label" placeholder="Select Unit" />
          </div>
          <div class="col-12">
            <label for="notifications" class="block mb-2">Notifications</label>
            <div class="flex align-items-center">
              <Checkbox v-model="enableNotifications" :binary="true" class="mr-2" />
              <span>Enable Notifications</span>
            </div>
          </div>
          <div class="col-12">
            <label for="dark-mode" class="block mb-2">Dark Mode</label>
            <div class="flex align-items-center">
              <Checkbox v-model="darkMode" :binary="true" class="mr-2" @change="toggleDarkMode" />
              <span>Enable Dark Mode</span>
            </div>
          </div>
          <div class="col-12">
            <Button label="Save Settings" @click="saveSettings" />
          </div>
        </div>
      </template>
    </Card>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'primevue/usetoast';

  const toast = useToast();

  const selectedUnit = ref('grams');
  const unitOptions = ref([
    { label: 'Grams', value: 'grams' },
    { label: 'Ounces', value: 'ounces' },
  ]);

  const enableNotifications = ref(false);
  const darkMode = ref(false);

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const saveSettings = () => {
    localStorage.setItem('unitMeasurement', selectedUnit.value);
    localStorage.setItem('enableNotifications', enableNotifications.value);
    localStorage.setItem('darkMode', darkMode.value);

    toast.add({
      severity: 'success',
      summary: 'Settings Saved',
      detail: 'Your settings have been updated.',
      life: 3000,
    });
  };
  </script>
