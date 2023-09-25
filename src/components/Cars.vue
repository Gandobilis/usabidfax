<script setup>
import Error from "@/components/Error.vue";
import Car from "@/components/Car.vue";

defineProps({
  cars: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-center gap-y-5">
    <div class="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
      <Car v-for="(car, index) in cars" :car="car" :key="index"/>
    </div>
  </div>
</template>