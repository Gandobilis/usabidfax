<template>
  <section class="max-sm:px-5 bg-section">
    <carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
      <slide v-for="(car, index) in cars" :key="index">
        <Car class="mx-1" :car="car" />
      </slide>
      <template #addons>
        <navigation>
          <template #next>
            <font-awesome-icon :icon="['fas', 'angle-right']" style="color: #FFF;"/>
          </template>
          <template #prev>
            <font-awesome-icon :icon="['fas', 'angle-left']" style="color: #FFF;"/>
          </template>
        </navigation>
      </template>
    </carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Slide} from "vue3-carousel";
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
  images: Array(7).fill('https://cdn.glitch.global/62237847-832c-4ecf-85c6-71ba709033fc/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg?v=1695465741238')
});
// carousel settings
const settings = {
  itemsToShow: 1,
};
// breakpoints are mobile first
// any settings not specified will fall back to the carousel settings
const breakpoints = {
  // 640px and up
  640: {
    itemsToShow: 1.1,
  },
  // 1280px and up
  1280: {
    itemsToShow: 3.2,
  },
};
</script>