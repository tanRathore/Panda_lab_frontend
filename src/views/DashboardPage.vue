<template>
      <div class="grid">
        <div class="col-12">
          <div class="flex justify-content-end">
            <Dropdown v-model="selectedDateRange" :options="dateRanges" optionLabel="label" placeholder="Select Date Range" @change="updateDashboard" />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <Card title="Food Trend Data">
            <Chart type="line" :data="foodTrendData" />
          </Card>
        </div>
        <div class="col-12 md:col-6">
          <Card title="Calorie Counts">
            <div class="flex align-items-center">
              <ProgressBar :value="dailyCalorieProgress" :showValue="false" class="mr-3" style="width: 100px; height: 100px" />
              <div>
                <p>Daily: {{ dailyCalories }} / {{ dailyCalorieGoal }} kcal</p>
                <p>Weekly: {{ weeklyCalories }} / {{ weeklyCalorieGoal }} kcal</p>
              </div>
            </div>
          </Card>
        </div>
        <div class="col-12 md:col-6">
          <Card title="Exercise Levels">
            <Chart type="bar" :data="exerciseData" />
          </Card>
        </div>
        <div class="col-12 md:col-6">
          <Card title="Key Analytics">
            <p>Average Protein: {{ averageProtein }}g</p>
            <p>Average Fat: {{ averageFat }}g</p>
            <p>Average Carbs: {{ averageCarbs }}g</p>
          </Card>
        </div>
      </div>
    </template>

    <script setup>
    import { ref, onMounted } from 'vue';

    const selectedDateRange = ref(null);
    const dateRanges = ref([
      { label: 'Last 7 Days', value: 'last7Days' },
      { label: 'Last 30 Days', value: 'last30Days' },
      { label: 'Custom', value: 'custom' },
    ]);

    // Dummy data for the charts and analytics
    const foodTrendData = ref({});
    const dailyCalorieProgress = ref(0);
    const dailyCalories = ref(0);
    const dailyCalorieGoal = ref(2000);
    const weeklyCalories = ref(0);
    const weeklyCalorieGoal = ref(14000);
    const exerciseData = ref({});
    const averageProtein = ref(0);
    const averageFat = ref(0);
    const averageCarbs = ref(0);

    const updateDashboard = () => {
      // Simulate fetching data based on selected date range
      if (selectedDateRange.value === 'last7Days') {
        foodTrendData.value = {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          datasets: [
            {
              label: 'Calories Consumed',
              data: [1800, 1900, 2100, 2000, 2200, 2300, 2100],
              borderColor: '#FFA726',
              tension: 0.4,
            },
          ],
        };
        dailyCalories.value = 2100;
        weeklyCalories.value = 14400;
        averageProtein.value = 60;
        averageFat.value = 80;
        averageCarbs.value = 250;
      } else if (selectedDateRange.value === 'last30Days') {
        // Update with different dummy data
        foodTrendData.value = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Calories Consumed',
              data: [14000, 15000, 14500, 16000],
              borderColor: '#42A5F5',
              tension: 0.4,
            },
          ],
        };
        dailyCalories.value = 2200;
        weeklyCalories.value = 15000;
        averageProtein.value = 65;
        averageFat.value = 75;
        averageCarbs.value = 260;
      }

      dailyCalorieProgress.value = (dailyCalories.value / dailyCalorieGoal.value) * 100;

      exerciseData.value = {
        labels: ['Calories Consumed', 'Calories Burned'],
        datasets: [
          {
            label: 'Exercise',
            backgroundColor: ['#66BB6A', '#EF5350'],
            data: [dailyCalories.value, 500],
          },
        ],
      };
    };

    onMounted(() => {
      selectedDateRange.value = 'last7Days';
      updateDashboard();
    });
    </script>
