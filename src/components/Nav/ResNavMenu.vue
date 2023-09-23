<script setup>
import useHeader from "@/composables/header"

defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
const {navMenu} = useHeader()
</script>

<template>
  <!-- Res Nav Menu -->
  <div class="lg:hidden absolute flex items-center pt-2 gap-y-3 flex-col w-full h-[100vw] z-50"
       :class="{'w-full h-full bg-white': open}">
    <div v-if="open" v-for="(link, index) in navMenu" :key="index">
      <router-link class="font-bold text-xl" :to="link.path" v-text="link.title"/>
    </div>
  </div>
</template>