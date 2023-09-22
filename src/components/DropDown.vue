<script setup>
import {ref} from "vue"

defineProps({
  options: {
    type: Array,
    required: true
  },
  selected: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['changeFloor'])

const showDropDown = ref(false)

const toggleDropDown = () => showDropDown.value = !showDropDown.value

const changeFloor = (floor) => {
  emit('changeFloor', floor)
  toggleDropDown()
}
</script>

<template>
  <div class="relative">
    <div
        @click="toggleDropDown"
        class="flex w-full cursor-pointer items-center rounded-md border border-black border-opacity-40 py-3 pr-3 pl-4 font-medium leading-6 space-x-2 focus:outline-0">
      <p v-text="selected"/>
      <font-awesome-icon :icon="['fas', 'caret-down']" size="xs" :class="{'rotate-180': showDropDown}"/>
    </div>
    <div :class="showDropDown ? 'block' : 'hidden'"
         class="absolute top-14 z-10 w-full rounded-md border border-black border-opacity-40 bg-white pr-1 pl-3 py-2.5">
      <div class="flex max-h-60 flex-col gap-y-4 overflow-y-scroll scroll-container">
        <p class="cursor-pointer font-medium leading-6" v-for="floor in options.length"
           :key="options.length - floor + 1"
           @click="changeFloor(options.length - floor)">
          {{ options[options.length - floor] }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container::-webkit-scrollbar {
  width: 5px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #D9D9D9;
  border-radius: 12px;
}
</style>