<template>
  <MainLayout>
    <template v-if="data" class="bg-gray-500">
      <div class="bg-white">
        <h1 v-text="data.make + ' '+ data.model +' '+ data.year +' '+ data.engine_type +' vin: '+ data.vin"
            class="text-3xl font-bold p-5"/>
        <div class="flex  max-lg:flex-col gap-5 border-2 p-3">
          <div class="lg:w-1/2 space-y-3">
            <Carousel id="gallery" :autoplay="2500" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="(image, index) in data.photos" :key="index">
                <div class="carousel__item">
                  <img
                      :src="image.url"
                      :alt="data._id"
                  />
                </div>
              </Slide>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                class="space-x-7"
            >
              <Slide class="hover:cursor-pointer" v-for="(image, index) in data.photos"
                     :key="index"
                     @click="slideTo(index - 1)">
                <div class="carousel__item">
                  <img
                      class="mx-1"
                      :src="image.url"
                      :alt="data._id"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="flex flex-col lg:w-1/2 divide-y divide-gray-400">
            <Entry class="[&_*]:text-green-500 text-3xl font-bold"
                   _key="Final Bid"
                   :value="'$'+data.purchase_price"
            />
            <div class="ml-3 gap-x-1.5 flex items-center">
              <p>Auction: </p>
              <img
                  :src="
              data.auction_name === 'Copart' ? '/auction/copart.svg' : '/auction/iaai.png'
              "
                  :class="data.auction_name === 'Copart' ? 'w-[50px] h-[19px]' : 'w-[33.5px] h-5'"
                  :alt="data.auction_name"/>
              <img
                  :src="
              data.sale_status === 'sold' ? '/status/sold.png' :  data.sale_status === 'on approval' ? '/status/onapproval.png' : '/status/timed.png'
              "
                  :alt="data.sale_status"/>
            </div>
            <Entry class=""
                   _key="Lot number"
                   :value="String(data.lot_number)"
            />
            <Entry class=""
                   _key="Date of sale"
                   :value="data.date_of_sale"
            />
            <Entry class=""
                   _key="Year"
                   :value="data.year"
            />
            <Entry class=""
                   _key="Condition"
                   :value="data.condition ?? undefined"
            />
            <Entry class=""
                   _key="Engine"
                   :value="data.engine_type"
            />
            <Entry class="bg-blue-500 [&_*]:text-white"
                   _key="Seller"
                   :value="data.seller"
            />
            <Entry class=""
                   _key="Documents"
                   :value="data.doc_type ?? undefined"
            />
            <Entry class=""
                   _key="Location:"
                   :value="data.location"
            />
            <Entry class=""
                   _key="Primary Damage"
                   :value="data.primary_damage"
            />
            <Entry class=""
                   _key="Secondary Damage"
                   :value="data.secondary_damage ?? undefined"
            />
            <Entry class=""
                   _key="Estimated Retail Value"
                   :value="String(data.est_retail_value ?? undefined)"
            />
            <Entry class=""
                   _key="Estimated Repair Cost"
                   :value="String(data.est_repair_value ?? undefined)"
            />
            <Entry class=""
                   _key="Transmission"
                   :value="data.transmission ?? undefined"
            />
            <Entry class=""
                   _key="Body color"
                   :value="data.color"
            />
            <Entry class=""
                   _key="Drive"
                   :value="data.drive"
            />
            <Entry class=""
                   _key="Fuel"
                   :value="data.fuel"
            />
            <Entry class=""
                   _key="Keys"
                   :value="data.car_keys"
            />
            <Entry class=""
                   _key="Notes"
                   :value="data.notes ?? undefined"
            />
          </div>
        </div>
      </div>
    </template>
    <h1 v-else-if="isLoading">Loading...</h1>
    <Error v-else/>
  </MainLayout>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import MainLayout from "@/layouts/MainLayout.vue"
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router"
import useCar from "@/composables/useCar"
import Entry from "@/components/Entry.vue";
import Error from "@/components/Error.vue";

const route = useRoute()
const {data, isLoading, error, fetchData} = useCar()
const currentSlide = ref(0)

const slideTo = (val) => {
  currentSlide.value = val
}

onMounted(async () => {
  await fetchData(`/api/car/${route.params.id}`);
  console.log(data.value)
})
</script>