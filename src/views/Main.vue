<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import DropDown from "@/components/DropDown.vue";
import Cars from "@/components/Cars.vue";
import Featured from "@/components/Featured.vue";
import Panel from "@/components/Panel.vue";

const makes = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"];

// Vehicle models array
const models = [
  ["Corolla", "Camry", "Prius", "Rav4", "Highlander"],
  ["Civic", "Accord", "CR-V", "Pilot", "Fit"],
  ["F-150", "Mustang", "Escape", "Explorer", "Focus"],
  ["Silverado", "Malibu", "Equinox", "Cruze", "Tahoe"],
  ["Altima", "Maxima", "Sentra", "Rogue", "Murano"],
  ["3 Series", "5 Series", "X3", "X5", "7 Series"],
  ["C-Class", "E-Class", "GLC", "S-Class", "A-Class"],
  ["Jetta", "Passat", "Tiguan", "Golf", "Atlas"],
  ["A3", "A4", "Q5", "Q7", "A6"],
  ["Elantra", "Tucson", "Santa Fe", "Kona", "Sonata"]
];
</script>

<template>
  <MainLayout>
    <div class="flex flex-col gap-y-3 space-y-5">
      <div class="mt-3 bg-white py-8 pl-4 space-y-7">
        <DropDown class="w-1/2" :options="makes" :selected="makes[0]"/>
        <DropDown class="w-1/2" :options="models[0]" :selected="models[0][0]"/>
      </div>
    <Featured />
    <Cars />
    <Panel />
    </div>
  </MainLayout>
</template>
