<script setup>
import {onMounted} from 'vue'
import useCars from "@/composables/cars";
import {useRoute} from "vue-router";

const route = useRoute();
const {data, fetchData} = useCars();

onMounted(() => {
  fetchData(`http://localhost:3000/cars?vin=${route.params.vin}`)
})
</script>


<template>
  <div
      v-if="data"
      class="fotorama"
      data-width="731"
      data-ratio="731/548"
      data-max-width="100%"
      data-nav="thumbs"
  >
    <img v-for="(image, index) in data[0].images" :key="index" :src="image" :alt="data[0].vin"/>
  </div>
  <h1 v-else>Loading...</h1>
</template>