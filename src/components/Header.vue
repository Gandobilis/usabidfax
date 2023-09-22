<script setup>
import NavMenu from "@/components/Nav/NavMenu.vue";
import Logo from "@/components/Nav/Logo.vue";
import ResNav from "@/components/Nav/ResNav.vue";
</script>

<template>
  <header class="bg-[#6A7189]">
    <div class="mx-auto flex max-w-7xl items-center justify-between py-3.5 lg:p-5 max-2xl:px-4">
      <logo/>
      <nav-menu class="max-lg:hidden"/>
      <res-nav class="lg:hidden"/>
    </div>
  </header>
</template>