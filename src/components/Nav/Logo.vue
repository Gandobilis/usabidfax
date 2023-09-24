<script setup>
import useHeader from "@/composables/useHeader"

const {logo} = useHeader()
</script>

<template>
  <!-- Logo -->
  <router-link to="/">
  <img :src="logo" alt="usa bid fax logo" class="w-28 lg:w-44 h-10 lg:h-16">
  </router-link>
</template>