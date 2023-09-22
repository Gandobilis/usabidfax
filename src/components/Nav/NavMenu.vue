<script setup>
import useHeader from "@/composables/header"
import NavLink from "@/components/Nav/NavLink.vue"

const {navMenu} = useHeader()
</script>

<template>
  <!-- Nav Menu -->
  <nav>
    <ul class="flex gap-x-8">
      <nav-link v-for="(link, index) in navMenu" :key="index" :link="link"/>
    </ul>
  </nav>
</template>