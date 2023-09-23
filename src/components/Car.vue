<script setup>
const props = defineProps({
  car: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="border p-1.5 bg-[#F8F9FA] divide-y">
    <router-link :to="'/' + car.vin">
      <div class="relative">
        <img :src="car.images[0]" alt="car">
        <span
            style="clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);"
            class="bg-[#4ADD31] absolute font-bold text-white pl-4 pr-8 py-2.5 bottom-[10%]">${{ car.price }}</span>
      </div>
      <div>
        <p class="font-bold">
          {{ car.title + car.vin }}
        </p>
      </div>
    </router-link>
    <div class="divide-y">
      <div class="flex items-center gap-x-1">
        <p class="ml-3">Auction: <span class="bg-red-700 px-1 text-white" :class="{
                                        'bg-blue-700': car.auction === 'Copart'
                                       }" v-text="car.auction"/></p>
        <img class="h-fit" v-if="car.status === 'available'"
             src="https://bidfax.info/templates/ru/dleimages/onapproval2.png"/>
        <img class="h-fit" v-if="car.status === 'sold' " src="https://bidfax.info/templates/ru/dleimages/sold2.png"/>
      </div>
      <div>
        <p class="ml-3">Lot number: <span v-text="car.lotNumber" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Condition: <span v-text="car.condition" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Damage: <span v-text="car.damage" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Mileage: <span v-text="car.mileage" class="font-bold"/></p>
      </div>
      <div class="!border-b">
        <p class="ml-3">Date of sale: <span v-text="car.dateOfSale" class="font-bold"/></p>
      </div>
    </div>
  </div>
</template>