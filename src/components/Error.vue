<script setup>
defineProps({
  error: {
    type: String,
    default: 'Oops! An error occurred.'
  }
})
</script>

<template>
  <div class="h-[25vw] flex items-center justify-center bg-red-300 text-white text-center text-2xl" v-text="error"/>
</template>