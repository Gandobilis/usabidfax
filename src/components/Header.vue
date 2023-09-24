<script setup>
import NavMenu from "@/components/Nav/NavMenu.vue"
import Logo from "@/components/Nav/Logo.vue"
import ResNav from "@/components/Nav/ResNavMenu.vue"
import {ref} from "vue"

const open = ref(false)

const toggle = () => open.value = !open.value
</script>

<template>
  <header class="bg-[#6A7189] max-lg:relative">
    <div class="max-w-7xl mx-auto flex items-center justify-between p-3 sm:max-lg:p-5 lg:max-2xl:p-7">
      <logo/>
      <nav-menu/>
      <font-awesome-icon :icon="['fas', open ? 'xmark' : 'bars']" class="cursor-pointer lg:hidden" size="xl"
                         :style="{color: open ? '#000' : '#fff'}" @click="toggle"
      />
    </div>
    <res-nav :open="open"/>
  </header>
</template>