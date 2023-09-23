<script setup>
import NavMenu from "@/components/Nav/NavMenu.vue";
import Logo from "@/components/Nav/Logo.vue";
import ResNav from "@/components/Nav/ResNavMenu.vue";
import {ref} from "vue";

const open = ref(false);

const toggle = () => open.value = !open.value;
</script>

<template>
  <header class="bg-[#6A7189] max-lg:relative">
    <div class="mx-auto flex max-w-7xl items-center justify-between max-2xl:px-4 py-3.5 lg:p-5">
      <logo/>
      <nav-menu/>
      <font-awesome-icon :icon="['fas', open ? 'xmark' : 'bars']" class="cursor-pointer lg:hidden" size="xl"
                         :style="{color: open ? '#000' : '#fff'}" @click="toggle"
      />
    </div>
    <res-nav :open="open"/>
  </header>
</template>