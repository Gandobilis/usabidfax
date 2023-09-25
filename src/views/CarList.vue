<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const cars = ref([]);

const fetchCars = async () => {
  cars.value = await axios.get('/api/all', {
    headers: {
      'x-api-key': 5604
    }
  });
};

onMounted(() => {
  fetchCars();
});

const deleteCar = async (vin) => {
  await axios.delete(`/api/delete/${vin}`, {
    headers: {
      'x-api-key': 5604
    }
  })
  await fetchCars();
}
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold">Car List</h2>
    <router-link to="/admin/add-car" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600">Add</router-link>
    <ul>
      <li v-for="car in cars.data" :key="car.id" class="border border-gray-300 mb-4 flex items-center p-4">
        <img :src="car.car_photos[0] ?? 1" alt="Car Photo" class="max-w-xs mr-4" />
        <div class="flex-grow">
          <p class="text-lg font-semibold">{{ car.make }} {{ car.model }}</p>
          <p class="text-gray-600">{{ car.vin }}</p>
        </div>
        <div class="ml-2">
          <button @click="editCar(car)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
          <button @click="deleteCar(car.vin)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>