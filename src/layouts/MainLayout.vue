<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header/>
  <main class="bg-[#F1EFEF]">
    <div class="container">
      <slot/>
    </div>
  </main>
  <Footer/>
</template>