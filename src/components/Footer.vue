<script setup>
import useHeader from "@/composables/useHeader"

const {navMenu} = useHeader()
</script>

<template>
  <footer class="bg-[#6A7189]">
    <div
        class="mx-auto flex max-w-7xl max-lg:flex-col items-center justify-between max-lg:gap-y-3 p-3 text-white sm:max-lg:p-5 lg:max-2xl:p-7">
      <ul class="flex items-center justify-center gap-x-3 lg:gap-x-5">
        <li v-for="(link, key) in navMenu" :key="key">
          <router-link :to="link.path" class="underline" v-text="link.title"/>
        </li>
      </ul>
      <div class="text-sm">
        <div class="flex justify-between space-x-3 lg:space-x-5">
          <p>
            <font-awesome-icon class="mr-0.5" :icon="['fas', 'envelope']"/>
            E-mail:
          </p>
          <p class="underline">usabidfax@gmail.com</p>
        </div>
      </div>
      <p class="text-sm">© 2018-2023 - Not all rights reserved.</p>
    </div>
  </footer>
</template>