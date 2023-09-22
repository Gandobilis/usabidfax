<script setup>
import useHeader from "@/composables/header"

const {logo} = useHeader()
</script>

<template>
  <!-- Logo -->
  <img :src="logo" alt="usa bid fax logo">
</template>