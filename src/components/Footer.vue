<script setup>
import useHeader from "@/composables/useHeader"

const {navMenu} = useHeader()
</script>

<template>
  <footer class="bg-[#6A7189] pt-6 pb-4 max-2xl:px-3">
    <div class="mx-auto flex max-w-7xl justify-between">
      <ul>
        <li v-for="(link, index) in navMenu" :key="index">
          <router-link :to="link.path">
            <p class="text-white underline" v-text="link.title"/>
          </router-link>
        </li>
      </ul>
      <div class="space-y-5">
        <div class="text-sm text-white space-y-1">
          <div class="flex justify-between space-x-7">
            <p>
              <font-awesome-icon class="mr-2" :icon="['fas', 'envelope']"/>
              E-mail:
            </p>
            <p class="underline">usabidfax@gmail.com</p>
          </div>
        </div>
        <p class="text-sm text-white">© 2018-2023 - Not all rights reserved.</p>
      </div>
    </div>
  </footer>
</template>