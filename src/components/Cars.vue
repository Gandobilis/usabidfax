<script setup>
import Car from "@/components/Car.vue";
import useCars from "@/composables/cars";
import {onMounted} from "vue";
import Error from "@/components/Error.vue";

const {data, error, isLoading, fetchData} = useCars();

onMounted(() => {
  fetchData('https://usabidfax.netlify.app/.netlify/functions/json-server?_page=1&_limit=10');
})
</script>

<template>
  <div v-if="data" class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
    <Car v-for="(car, index) in data" :car="car" :key="index"/>
  </div>
  <h1 v-else-if="isLoading">Loading...</h1>
  <h1 v-else class="text-red-500">
    <Error :error="error"/>
  </h1>
</template>