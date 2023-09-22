<script setup>
import useHeader from "@/composables/header"

const {navMenu} = useHeader();
</script>

<template>
  <font-awesome-icon :icon="['fas', 'bars']" size="xl" style="color: #ffffff;" />
</template>