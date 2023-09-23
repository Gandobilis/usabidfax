<script setup>
import DropDown from "@/components/DropDown.vue";
import {onMounted, ref} from "vue";

const makes = ref([]);
const make = ref('Make');
const models = ref([]);
const model = ref('Model');

onMounted(() => {

})
</script>

<template>
  <div class="mt-3 bg-white py-8 pl-4 space-y-7">
<!--    <DropDown class="w-1/2" :options="makes" :selected="makes[0]"/>-->
<!--    <DropDown class="w-1/2" :options="models[0]" :selected="models[0][0]"/>-->
  </div>
</template>

<style scoped>

</style>