<script setup>

const props = defineProps({
  car: {
    type: Object,
    required: true
  },
  price: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div class="border p-1.5 bg-[#F8F9FA] divide-y">
    <router-link :to="'/' + car._id">
      <div class="relative">
        <img :src="car.main_photo" :alt="car.vin">
        <span v-if="price"
              style="clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);"
              class="bg-[#4ADD31] absolute font-bold text-white pl-4 pr-8 py-2.5 bottom-[10%]">${{ car.purchase_price }}</span>
      </div>
      <div>
        <p class="font-bold"
           v-text="
           `${car.make} ${car.model} ${String(car.year)} ${car.color} ${car.engine_type} vin: ${car.vin}`
      "/>
      </div>
    </router-link>
    <div class="divide-y">
      <div class="flex items-center gap-x-1">
        <div class="ml-3 gap-x-1.5 flex items-center">
          <p>Auction: </p>
          <img
              :src="
              car.auction_name === 'Copart' ? '/auction/copart.svg' : '/auction/iaai.png'
              "
              :class="car.auction_name === 'Copart' ? 'w-[50px] h-[19px]' : 'w-[33.5px] h-5'"
              :alt="car.auction_name"/>
          <img
              :src="
              car.sale_status === 'sold' ? '/status/sold.png' :  car.sale_status === 'on approval' ? '/status/onapproval.png' : '/status/timed.png'
              "
              :alt="car.sale_status"/>
        </div>
        <img class="h-fit" v-if="car.status === 'available'"
             src="https://bidfax.info/templates/ru/dleimages/onapproval2.png"/>
        <img class="h-fit" v-if="car.status === 'sold' " src="https://bidfax.info/templates/ru/dleimages/sold2.png"/>
      </div>
      <div>
        <p class="ml-3">Lot number: <span v-text="car.lot_number" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Condition: <span v-text="car.condition ?? 'Not Specifed'" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Damage: <span v-text="car.primary_damage" class="font-bold"/></p>
      </div>
      <div>
        <p class="ml-3">Mileage: <span v-text="car.odometer" class="font-bold"/></p>
      </div>
      <div class="!border-b">
        <p class="ml-3">Date of sale: <span v-text="car.date_of_sale" class="font-bold"/></p>
      </div>
    </div>
  </div>
</template>
