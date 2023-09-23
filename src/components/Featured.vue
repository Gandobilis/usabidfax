<template>
  <section class="max-sm:px-5 bg-section">
    <carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
      <slide v-for="(car, index) in data" :key="index">
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
import useCars from "@/composables/cars";
import {onMounted} from "vue";
import Error from "@/components/Error.vue";

const {data, error, isLoading, fetchData} = useCars();

onMounted(async () => {
  await fetchData('https://usabidfax.netlify.app/.netlify/functions/json-server?_page=1&_limit=9');
  data.value = data.value.items;
})
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