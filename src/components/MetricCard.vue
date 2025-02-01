<template>
    <Card class="metric-card">
      <template #title>
        <div class="flex justify-content-between align-items-center mb-2">
          <span class="text-500 font-medium text-sm">{{ title }}</span>
          <i :class="icon" class="text-lg" :style="{ color: color }"></i>
        </div>
      </template>
      <template #content>
        <div class="flex flex-column align-items-center">
          <div class="text-900 font-bold text-3xl mb-1">{{ value }}</div>
          <div class="text-500 text-sm">{{ unit }}</div>
          <ProgressBar 
            :value="progress" 
            :showValue="false" 
            class="mt-3" 
            :style="{ height: '4px' }"
            :class="`progress-${color}`"
          />
        </div>
      </template>
    </Card>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    value: [Number, String],
    unit: String,
    progress: Number,
    color: String,
    icon: String
  });
  </script>
  
  <style scoped>
  .metric-card {
    transition: all 0.3s ease;
  }
  
  .progress-green :deep(.p-progressbar-value) {
    background: #10B981 !important;
  }
  
  .progress-blue :deep(.p-progressbar-value) {
    background: #3B82F6 !important;
  }
  
  .progress-orange :deep(.p-progressbar-value) {
    background: #F59E0B !important;
  }
  </style>