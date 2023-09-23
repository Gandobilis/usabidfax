<script setup>
import DropDown from "@/components/DropDown.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const makes = ref([]);
const make = ref('Make');
const models = ref([]);
const model = ref('Model');

onMounted(async () => {
  const response = await axios.get('https://usabidfax.com/.netlify/functions/get-makes');
  const response1 = await axios.get(`https://usabidfax.com/.netlify/functions/get-make?make=Audi`);
  makes.value = response.data.makes;
  models.value = response1.data.models;
})
</script>

<template>
  <div class="mt-3 bg-white py-8 pl-4 space-y-7" v-if="makes && models">
    <DropDown class="w-1/2" :options="makes" :selected="makes[0]"/>
    <DropDown class="w-1/2" :options="models" :selected="models[0]"/>
  </div>
</template>

<style scoped>

</style>