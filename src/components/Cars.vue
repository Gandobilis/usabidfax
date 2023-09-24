<script setup>
import Car from "@/components/Car.vue";
import useCars from "@/composables/useCars";
import {onMounted} from "vue";
import Error from "@/components/Error.vue";

const {data, error, isLoading, fetchData} = useCars();

onMounted(async () => {
  await fetchData(`https://usabidfax.netlify.app/.netlify/functions/vehicles?page=1&limit=9`);
})

// import the package
import {VueAwesomePaginate} from "vue-awesome-paginate";

import {ref} from "vue";

const onClickHandler = async (page) => {
  await fetchData(`https://usabidfax.netlify.app/.netlify/functions/vehicles?page=${page}&limit=9`);
};

const currentPage = ref(1);
</script>

<template>
  <div v-if="data" class="flex flex-col items-center gap-y-5">
    <div class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      <Car v-for="(car, index) in data" :car="car" :key="index"/>
    </div>
    <vue-awesome-paginate
        :total-items="33"
        :items-per-page="9"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
    />
  </div>
  <h1 v-else-if="isLoading">Loading...</h1>
  <Error v-else/>
</template>