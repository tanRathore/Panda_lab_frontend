<template>
      <div class="p-4">
        <Card>
          <template #title>
            <div class="text-center">
              <h2>Log Food Entry</h2>
            </div>
          </template>
          <template #content>
            <div class="grid p-fluid">
              <div class="col-12">
                <label for="foodImage" class="block mb-2">Upload Food Image</label>
                <FileUpload
                  mode="basic"
                  name="foodImage"
                  accept="image/*"
                  :maxFileSize="2000000"
                  @uploader="onImageUpload"
                  auto="true"
                  chooseLabel="Choose Image"
                />
              </div>
              <div class="col-12 md:col-6">
                <label for="foodName" class="block mb-2">Food Name</label>
                <InputText id="foodName" v-model="foodName" class="w-full" />
              </div>
              <div class="col-12 md:col-6">
                <label for="foodAmount" class="block mb-2">Amount</label>
                <InputText id="foodAmount" v-model="foodAmount" class="w-full" />
              </div>
              <div class="col-12">
                <Card class="mt-4">
                  <template #title>
                    <div class="text-center">
                      <h3>Nutritional Information</h3>
                    </div>
                  </template>
                  <template #content>
                    <div class="grid p-fluid">
                      <div class="col-12 md:col-4">
                        <p>Calories: {{ nutritionInfo.calories }} kcal</p>
                        <ProgressBar :value="nutritionInfo.calories / 2000 * 100" :showValue="false" />
                      </div>
                      <div class="col-12 md:col-4">
                        <p>Protein: {{ nutritionInfo.protein }}g</p>
                        <ProgressBar :value="nutritionInfo.protein / 50 * 100" :showValue="false" />
                      </div>
                      <div class="col-12 md:col-4">
                        <p>Fat: {{ nutritionInfo.fat }}g</p>
                        <ProgressBar :value="nutritionInfo.fat / 70 * 100" :showValue="false" />
                      </div>
                      <div class="col-12 md:col-4">
                        <p>Carbs: {{ nutritionInfo.carbs }}g</p>
                        <ProgressBar :value="nutritionInfo.carbs / 300 * 100" :showValue="false" />
                      </div>
                      <div class="col-12">
                        <Chart type="doughnut" :data="macroChartData" />
                      </div>
                    </div>
                  </template>
                </Card>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </template>

    <script setup>
    import { ref, computed, onMounted } from 'vue';
    import { useToast } from 'primevue/usetoast';

    const toast = useToast();

    const foodName = ref('');
    const foodAmount = ref('');
    const nutritionInfo = ref({
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    });

    // Dummy data for the chart
    const macroChartData = computed(() => ({
      labels: ['Protein', 'Fat', 'Carbs'],
      datasets: [
        {
          data: [nutritionInfo.value.protein, nutritionInfo.value.fat, nutritionInfo.value.carbs],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    }));

    const onImageUpload = (event) => {
      // Simulate API call to food recognition service
      setTimeout(() => {
        // Dummy response from the API
        const apiResponse = {
          foodName: 'Dummy Pizza',
          amount: '1 slice',
          nutrition: {
            calories: 285,
            protein: 12,
            fat: 10,
            carbs: 36,
          },
        };

        foodName.value = apiResponse.foodName;
        foodAmount.value = apiResponse.amount;
        nutritionInfo.value = apiResponse.nutrition;

        toast.add({
          severity: 'success',
          summary: 'Image Processed',
          detail: 'Food details recognized and filled.',
          life: 3000,
        });
      }, 1000);
    };

    onMounted(() => {
      // Initialize chart data with dummy values
      nutritionInfo.value = {
        calories: 285,
        protein: 12,
        fat: 10,
        carbs: 36,
      };
    });
    </script>
