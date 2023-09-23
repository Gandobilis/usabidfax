<template>
  <MainLayout>
    <div class="w-1/2">
      <Carousel id="gallery" :autoplay="3000" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
        <Slide v-for="slide in 10" :key="slide" class="">
          <div class="carousel__item">
            <img src="src/assets/images/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg"/>
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
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item" @click="slideTo(slide - 1)">
            <img src="src/assets/images/tesla-model-3-2019-5yj3e1ea9kf400861-img1.jpg"/>
          </div>
        </Slide>
      </Carousel>
    </div>
  </MainLayout>
</template>

<script setup>
import {Carousel, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import MainLayout from "@/layouts/MainLayout.vue";
import {ref} from "vue";

const currentSlide = ref(0);

const slideTo = (val) => {
  this.currentSlide.value = val
}
</script>
