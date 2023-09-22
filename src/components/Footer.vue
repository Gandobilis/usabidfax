<script setup>
import icon from "@/assets/icons/hit.gif";
</script>

<template>
  <footer class="bg-[#6A7189] pt-6 pb-4 ">
    <div class="mx-auto flex max-w-7xl justify-between">
      <div>
        <p class="text-white underline">Main</p>
      </div>
      <div>
        <img :src="icon" alt="hit icon"/>
      </div>
      <div class="space-y-5">
        <div class="text-sm text-white space-y-1">
<!--          <div class="flex justify-between space-x-7">-->
<!--            <p><font-awesome-icon class="mr-2" :icon="['fab', 'telegram']" />Telegram:</p>-->
<!--            <p class="underline">@BidFax</p>-->
<!--          </div>-->
          <div class="flex justify-between space-x-7">
            <p><font-awesome-icon class="mr-2" :icon="['fas', 'envelope']" /> E-mail:</p>
            <p class="underline">usabidfax@gmail.com</p>
          </div>
        </div>
        <p class="text-sm text-white">© 2018-2023 - Not all rights reserved.</p>
      </div>
    </div>
  </footer>
</template>