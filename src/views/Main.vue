<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Cars from "@/components/Cars.vue";
import Panel from "@/components/Panel.vue";
import Filter from "@/components/Filter.vue";
import {ref} from "vue";

const vin = ref('');
const handleSearch = async () => {

}
</script>

<template>
  <MainLayout>
    <div class="mx-auto flex max-w-7xl flex-col items-end py-2">
      <form method="get" @submit.prevent="" class="flex w-full text-xl space-x-3">
        <input v-model="vin" placeholder="Lot or vin number" type="text" class="w-5/6 border py-1 pl-5 shadow"/>
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
<!--      <Filter/>-->
      <Cars/>
      <Panel/>
    </div>
  </MainLayout>
</template>
