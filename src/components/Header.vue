<script setup>
import useHeader from "@/composables/header";

const {logo, navLinks} = useHeader();
</script>

<template>
  <header class="bg-[#6A7189]">
    <div class="max-w-7xl flex justify-between mx-auto">
      <div class="mt-4">
        <img :src="logo" alt="kl logo">
      </div>
      <nav class="my-5">
        <ul class="flex space-x-8">
          <li v-for="(link, index) in navLinks" :key="index" class="font-bold cursor-pointer p-5 border border-white">
            <p v-text="link" class="text-white"/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="max-w-7xl flex flex-col items-end mx-auto py-2">
    <form method="get" @submit.prevent class="space-x-3 flex w-full text-xl">
      <input placeholder="Lot or vin number" type="text" class="pl-5 py-1 w-5/6 border shadow"/>
      <button type="submit" class="w-1/6 cursor-pointer border rounded-sm border-gray-500 hover:bg-gray-50">Search
      </button>
    </form>
    <p class="text-xs text-gray-400 pt-2">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" target="_blank" class="text-[#039ad3] hover:text-red-500 cursor-pointer">Privacy Policy</a> and
      <a href="https://policies.google.com/terms" target="_blank" class="text-[#039ad3] hover:text-red-500 cursor-pointer">Terms of Service</a>
      apply.
    </p>
  </div>
</template>