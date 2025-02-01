<template>
  <div class="dashboard-container">
    <div class="header">
      <h1>Nutrition Dashboard</h1>
      <Dropdown 
        v-model="selectedRange" 
        :options="dateRanges" 
        optionLabel="label"
        class="range-selector"
      />
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <h3>Calories</h3>
        <div class="metric-value">1,850</div>
        <div class="metric-subtext">of 2,000 goal</div>
        <ProgressBar :value="72" class="progress-bar" />
      </div>

      <div class="metric-card">
        <h3>Protein</h3>
        <div class="metric-value">95g</div>
        <div class="metric-subtext">of 120g goal</div>
        <ProgressBar :value="68" class="progress-bar" />
      </div>

      <div class="metric-card">
        <h3>Carbs</h3>
        <div class="metric-value">210g</div>
        <div class="metric-subtext">of 250g goal</div>
        <ProgressBar :value="84" class="progress-bar" />
      </div>

      <div class="metric-card">
        <h3>Fat</h3>
        <div class="metric-value">65g</div>
        <div class="metric-subtext">of 70g goal</div>
        <ProgressBar :value="93" class="progress-bar" />
      </div>
    </div>

    <div class="chart-container">
      <div class="main-chart">
        <h3>Daily Intake Trend</h3>
        <Chart type="line" :data="trendData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedRange = ref('week');
const dateRanges = ref([
  { label: 'Last 7 Days', value: 'week' },
  { label: 'Last 30 Days', value: 'month' }
]);

const trendData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Calories',
    data: [1800, 1950, 2100, 1850, 2200, 2050, 1900],
    borderColor: '#48bb78',
    tension: 0.4,
    fill: false
  }]
});
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h1 {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.metric-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.metric-card h3 {
  color: #718096;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.metric-value {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.metric-subtext {
  color: #718096;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.progress-bar {
  height: 6px;
}

.chart-container {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.chart-container h3 {
  color: #2d3748;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}
</style>