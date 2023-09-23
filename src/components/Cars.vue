<script setup>
import Car from "@/components/Car.vue";
import useCars from "@/composables/cars";
import {onMounted} from "vue";

const {data, error, isLoading, fetchData} = useCars();

onMounted(() => {
  fetchData('https://smart-nebulous-balloon.glitch.me/cars?_page=7&_limit=20');
})
</script>

<template>
  <div v-if="!isLoading" class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
    <Car v-for="(car, index) in data" :car="car" :key="index"/>
  </div>
  <h1 v-else>Loading...</h1>
</template>

<style scoped>

</style>