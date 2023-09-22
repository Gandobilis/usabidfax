<script setup>
import useHeader from "@/composables/header"

const {logo} = useHeader()
</script>

<template>
  <!-- Logo -->
  <img :src="logo" alt="usa bid fax logo" class="w-28 lg:w-44 h-10 lg:h-16">
</template>