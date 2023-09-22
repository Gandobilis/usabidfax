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
  <router-link :to="link.path">
    <li class="cursor-pointer border border-white px-5 py-4 font-bold">
      <p v-text="link.title" class="text-white"/>
    </li>
  </router-link>
</template>