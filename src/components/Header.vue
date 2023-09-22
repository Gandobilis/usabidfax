<script setup>
import NavMenu from "@/components/NavMenu.vue";
import Logo from "@/components/Logo.vue";
</script>

<template>
  <header class="bg-[#6A7189]">
    <div class="mx-auto flex max-w-7xl justify-between py-5">
      <logo />
      <nav-menu/>
    </div>
  </header>
  <div class="mx-auto flex max-w-7xl flex-col items-end py-2">
    <form method="get" @submit.prevent class="flex w-full text-xl space-x-3">
      <input placeholder="Lot or vin number" type="text" class="w-5/6 border py-1 pl-5 shadow"/>
      <button type="submit" class="w-1/6 cursor-pointer rounded-sm border border-gray-500 hover:bg-gray-50">Search
      </button>
    </form>
    <p class="pt-2 text-xs text-gray-400">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" target="_blank"
         class="text-[#039ad3] hover:text-red-500 cursor-pointer">Privacy Policy</a> and
      <a href="https://policies.google.com/terms" target="_blank"
         class="text-[#039ad3] hover:text-red-500 cursor-pointer">Terms of Service</a>
      apply.
    </p>
  </div>
</template>