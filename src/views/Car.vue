<template>
  <MainLayout>
    <template v-if="data" class="bg-gray-500">
      <div class="bg-white">
        <h1 v-text="data.title + data.id" class="text-3xl font-bold p-5"/>
        <div class="flex  max-lg:flex-col gap-5 border-2 p-3">
          <div class="lg:w-1/2 space-y-3">
            <Carousel id="gallery" :autoplay="2500" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="(image, index) in [data.featured].concat(data.images)" :key="index">
                <div class="carousel__item">
                  <img
                      :src="image"
                      :alt="data.id"
                  />
                </div>
              </Slide>
              <template #addons>
                <Navigation/>
              </template>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                class="space-x-7"
            >
              <Slide class="hover:cursor-pointer" v-for="(image, index) in [data.featured].concat(data.images)"
                     :key="index"
                     @click="slideTo(index - 1)">
                <div class="carousel__item">
                  <img
                      :src="image"
                      :alt="data.id"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="flex flex-col lg:w-1/2 divide-y divide-gray-400">
            <Entry class="[&_*]:text-green-500 text-3xl font-bold"
                   _key="Final Bid"
                   :value="data.price"
            />
            <Entry
                _key="Auction"
                :value="data.auction"
            />
            <Entry class=""
                   _key="Lot number"
                   :value="String(data.lotNumber)"
            />
            <Entry class=""
                   _key="Date of sale"
                   :value="data.dateOfSale"
            />
            <Entry class=""
                   _key="Year"
                   :value="data.year"
            />
            <Entry class=""
                   _key="Condition"
                   :value="data.condition"
            />
            <Entry class=""
                   _key="Engine"
                   :value="data.engine"
            />
            <Entry class="bg-blue-500 [&_*]:text-white"
                   _key="Seller"
                   :value="data.seller"
            />
            <Entry class=""
                   _key="Documents"
                   :value="data.documents"
            />
            <Entry class=""
                   _key="Location:"
                   :value="data.location"
            />
            <Entry class=""
                   _key="Primary Damage"
                   :value="data.primaryDamage"
            />
            <Entry class=""
                   _key="Secondary Damage"
                   :value="data.secondaryDamage"
            />
            <Entry class=""
                   _key="Estimated Retail Value"
                   :value="String(data.estimatedRetailValue)"
            />
            <Entry class=""
                   _key="Estimated Repair Cost"
                   :value="String(data.estimatedRepairCost)"
            />
            <Entry class=""
                   _key="Transmission"
                   :value="data.transmission"
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
                   :value="data.keys"
            />
            <Entry class=""
                   _key="Notes"
                   :value="data.notes"
            />
          </div>
        </div>
      </div>
    </template>
    <h1 v-else-if="isLoading">Loading...</h1>
    <Error v-else :error="error"/>
  </MainLayout>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import MainLayout from "@/layouts/MainLayout.vue"
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router"
import useCars from "@/composables/cars"
import Entry from "@/components/Entry.vue";
import Error from "@/components/Error.vue";

const route = useRoute()
const {data, isLoading, error, fetchData} = useCars()
const currentSlide = ref(0)

const slideTo = (val) => {
  this.currentSlide.value = val
}

onMounted(async () => {
  await fetchData(`https://usabidfax.netlify.app/.netlify/functions/json-server?id=${route.params.vin}`);
  data.value = data.value.item
})
</script>