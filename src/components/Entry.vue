<script setup>
defineProps({
  _key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: 'Unknown',
  }
})
</script>

<template>
  <div>
    <p class="p-1 ml-3 text-gray-400 flex gap-x-1 items-center">{{ _key }}: <span
        class="text-black font-bold"
        :class="{
      'px-1 !text-white bg-red-700':  _key === 'Auction'
       }"
        v-text="value"/>
    </p>
  </div>
</template>