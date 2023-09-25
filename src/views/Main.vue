<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Cars from "@/components/Cars.vue";
import Filter from "@/components/Filter.vue";
import {ref} from "vue";

const vin = ref('');
const handleSearch = async () => {

}
</script>

<template>
  <MainLayout>
    <div class="flex flex-col gap-y-2">
      <div class="flex flex-col items-end gap-y-2">
        <form method="get" @submit.prevent="" class="flex w-full text-xl space-x-3">
          <input v-model="vin" placeholder="Lot or vin number" type="text"
                 class="focus:outline-0 w-4/6 lg:w-5/6 border py-1.5 pl-5 shadow"/>
          <button type="submit" class="w-2/6 lg:w-1/6 cursor-pointer rounded-sm border hover:bg-white shadow">Search
          </button>
        </form>
        <p class="text-xs text-gray-400">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" target="_blank"
             class="text-[#039ad3] hover:text-red-500 cursor-pointer">Privacy Policy</a> and
          <a href="https://policies.google.com/terms" target="_blank"
             class="text-[#039ad3] hover:text-red-500 cursor-pointer">Terms of Service</a>
          apply.
        </p>
      </div>
      <div class="flex flex-col gap-y-3 space-y-5">
<!--        <Filter/>-->
        <Cars/>

        <div class="bg-white p-3 divide-y">
          <h1 class="pb-3 lg:text-xl font-bold">
            Free history of sales, prices and damage insurance cars in the United States at Copart and insurance
            auctions
            IAAI
          </h1>
          <p class="pt-3 max-lg:text-sm">
            The site UsaBidFax.com provides free information on the statistics of prices for beaten cars from the USA
            after
            insurance claims.
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
