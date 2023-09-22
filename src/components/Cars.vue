<script setup>
import Car from "@/components/Car.vue";

const cars = Array(9).fill({
  price: '12700',
  title: 'Tesla Model 3 Range 2019 Blue MOTOR vin:',
  vin: '5YJ3E1EA9KF400861',
  auction: 'IAAI',
  status: 'sold',
  lotNumber: '37543426',
  condition: 'Run and Drive',
  Damage: 'Front End',
  mileage: '48071 mile (Actual)',
  dateOfSale: '20.09.2023',
  image: 'https://bidfax.info/uploads/posts/2023-09/22/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg'
});
</script>

<template>
  <div class="grid grid-cols-3 gap-x-7 gap-y-5 mt-3">
    <Car v-for="(car, index) in cars" :car="car" :key="index"/>
  </div>
</template>

<style scoped>

</style>