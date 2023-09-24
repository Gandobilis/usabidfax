<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="bg-[#E9ECEF] py-3">
    <div class="max-w-7xl mx-auto space-y-3">
      <slot/>
    </div>
  </main>
  <Footer/>
</template>