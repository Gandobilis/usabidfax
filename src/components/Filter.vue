<script setup>
import DropDown from "@/components/DropDown.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const makes = ref([]);
const make = ref('Make');
const models = ref([]);
const model = ref('Model');

onMounted(async () => {
  const response = await axios.get('/api/makes');
  makes.value = response.data;
  const response1 = await axios.get(`/api/models/${makes[0] ?? 'BMW'}`);
  models.value = response1.data;
})
</script>

<template>
  <div class="p-2 bg-white space-y-3 shadow" v-if="makes && models">
    <DropDown class="md:w-1/2" :options="makes" selected="Select Make"/>
    <DropDown class="md:w-1/2" :options="models" selected="Select Model"/>
  </div>
</template>