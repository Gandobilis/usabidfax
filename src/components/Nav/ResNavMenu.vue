<script setup>
import useHeader from "@/composables/useHeader"

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
  <ul v-if="open" class="absolute z-10 flex w-full flex-col items-center gap-y-3 bg-white h-28 lg:hidden">
    <li v-for="(link, index) in navMenu" :key="index">
      <router-link class="text-xl font-bold" :to="link.path" v-text="link.title"/>
    </li>
  </ul>
</template>