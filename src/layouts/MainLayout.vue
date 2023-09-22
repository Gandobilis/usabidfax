<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="bg-gray-200">
    <div class="max-w-7xl mx-auto">
      <slot/>
    </div>
  </main>
  <Footer/>
</template>