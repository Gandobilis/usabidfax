<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import DropDown from "@/components/DropDown.vue";
import Cars from "@/components/Cars.vue";
import Featured from "@/components/Featured.vue";
import Panel from "@/components/Panel.vue";
</script>

<template>
  <MainLayout>
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
    <div class="flex flex-col gap-y-3 space-y-5">
      <div class="mt-3 bg-white py-8 pl-4 space-y-7">
<!--        <DropDown class="w-1/2" :options="makes" :selected="makes[0]"/>-->
<!--        <DropDown class="w-1/2" :options="models[0]" :selected="models[0][0]"/>-->
      </div>
    <Featured />
    <Cars />
    <Panel />
    </div>
  </MainLayout>
</template>
