<script setup>
import Car from "@/components/Car.vue";
import useCars from "@/composables/cars";
import {onMounted} from "vue";

const {data, error, isLoading, fetchData} = useCars();

onMounted(() => {
  fetchData('http://localhost:3000/cars?_page=1&_limit=9');
})
</script>

<template>
  <div v-if="data" class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
    <Car v-for="(car, index) in data" :car="car" :key="index"/>
  </div>
  <h1 v-else>Loading...</h1>
</template>