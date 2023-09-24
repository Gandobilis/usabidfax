<script setup>
import DropDown from "@/components/DropDown.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import {faker} from '@faker-js/faker'

const makes = ref([]);
const make = ref('Make');
const models = ref([]);
const model = ref('Model');

onMounted(async () => {
  const response = await axios.get('https://usabidfax.com/.netlify/functions/makes');
  makes.value = response.data;
  const response1 = await axios.get(`https://usabidfax.com/.netlify/functions/models?make=${faker.helpers.arrayElement(makes.value)}`);
  models.value = response1.data;
})
</script>

<template>
  <div class="mt-3 bg-white py-8 px-4 space-y-7" v-if="makes && models">
    <DropDown class="md:w-1/2" :options="makes" selected="Select Make"/>
    <DropDown class="md:w-1/2" :options="models" selected="Select Model"/>
  </div>
</template>