<script setup>
import Error from "@/components/Error.vue";
import Car from "@/views/Car.vue";

defineProps({
  cars: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="data" class="flex flex-col items-center gap-y-5">
    <div class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      <Car v-for="(car, index) in data.data" :car="car" :key="index"/>
    </div>
  </div>
  <Error v-else/>
</template>