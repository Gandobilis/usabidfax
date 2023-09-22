<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="bg-[#E9ECEF]">
    <div class="mx-auto max-w-7xl">
      <slot/>
    </div>
  </main>
  <Footer/>
</template>