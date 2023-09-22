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
        class="flex space-x-2 items-center w-full font-medium leading-6 py-3 pl-4 pr-3 focus:outline-0 rounded-md border border-black border-opacity-40 cursor-pointer">
      <p v-text="selected"/>
      <font-awesome-icon :icon="['fas', 'caret-down']" size="xs" :class="{'rotate-180': showDropDown}"/>
    </div>
    <div :class="showDropDown ? 'block' : 'hidden'"
         class="bg-white z-10 top-14 absolute py-2.5 pl-3 pr-1 w-full rounded-md border border-black border-opacity-40">
      <div class="scroll-container flex flex-col gap-y-4 max-h-60 overflow-y-scroll">
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