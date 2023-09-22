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
  <li class="cursor-pointer border border-white p-5 font-bold">
    <p v-text="link" class="text-white"/>
  </li>
</template>