<script setup>
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Array,
    required: true
  },
  iconBg: {
    type: String,
    required: true
  }
})

const pathList = computed(() => Array.from({length: props.icon[1]}, (item, index) => index + 1))
</script>

<template>
  <div class="feature-card shadow-3xl bg-white rounded-xl md:rounded-4xl 3xl:rounded-6xl transform md:-rotate-3 px-6 py-9 xl:px-6 xl:py-10 3xl:px-9 3xl:py-14">
    <div
        class="flex items-center justify-center rounded-full w-20 h-20 2xl:w-20 2xl:h-20 p-3"
        :style="{ backgroundColor: iconBg }"
    >
       <span :class="`icon-${icon[0]}`" class="text-white text-5xl 2xl:text-8xl">
        <template v-for="item in pathList" :key="item">
          <span :class="`path${item}`"></span>
        </template>
      </span>
    </div>
    <div class="text-2xl 2xl:text-3xl font-bold pt-6 pb-3">
      {{ title }}
    </div>
    <div class="text-lg 2xl:text-2xl pb-7 3xl:pb-16">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
</style>