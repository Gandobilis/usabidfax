<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="h-60 bg-gray-200">
    <slot/>
  </main>
  <Footer/>
</template>