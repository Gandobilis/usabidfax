<template>
  <MainLayout>
    <div v-if="data">
      <div class="w-1/2">
        <Carousel id="gallery" :autoplay="3000" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
          <Slide v-for="(image, index) in data[0].images" :key="index">
            <div class="carousel__item">
              <img
                  :src="image"
                  :alt="data[0].vin"
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
        >
          <Slide v-for="(image, index) in data[0].images" :key="index" @click="slideTo(index - 1)">
            <div class="carousel__item">
              <img
                  :src="image"
                  :alt="data[0].vin"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="details w-1/2">

      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import MainLayout from "@/layouts/MainLayout.vue"
import {Carousel, Slide} from 'vue3-carousel'
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router"
import useCars from "@/composables/cars"

const route = useRoute()
const {data, fetchData} = useCars()
const currentSlide = ref(0)

const slideTo = (val) => {
  this.currentSlide.value = val
}

onMounted(() => {
  fetchData(`http://localhost:3000/cars?vin=${route.params.vin}`);
})
</script>
