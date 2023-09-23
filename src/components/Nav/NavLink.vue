<script setup>
defineProps({
  link: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <!-- Nav Link -->
  <li class="cursor-pointer border border-white px-5 py-4 font-bold hover:bg-gray-400">
    <router-link :to="link.path" class="text-white" v-text="link.title"/>
  </li>
</template>