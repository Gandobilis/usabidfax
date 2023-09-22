<script setup>
import icon from "@/assets/icons/hit.gif";
</script>

<template>
  <footer class="bg-[#6A7189] pt-6 pb-4 ">
    <div class="max-w-7xl mx-auto flex justify-between">
      <div>
        <p class="text-white underline">Main</p>
      </div>
      <div>
        <img :src="icon" alt="hit icon"/>
      </div>
      <div class="space-y-5">
        <div class="text-white text-sm space-y-1">
<!--          <div class="flex space-x-7 justify-between">-->
<!--            <p><font-awesome-icon class="mr-2" :icon="['fab', 'telegram']" />Telegram:</p>-->
<!--            <p class="underline">@BidFax</p>-->
<!--          </div>-->
          <div class="flex space-x-7 justify-between">
            <p><font-awesome-icon class="mr-2" :icon="['fas', 'envelope']" /> E-mail:</p>
            <p class="underline">usabidfax@gmail.com</p>
          </div>
        </div>
        <p class="text-white text-sm">© 2018-2023 - Not all rights reserved.</p>
      </div>
    </div>
  </footer>
</template>