<script setup>
import { ref } from "vue";
import { faqsContent } from "@/@core/constants/home-view";

const isOpen = ref(Array(faqsContent.faqs.length).fill(false));

const toggleItem = (index) => {
  isOpen.value[index] = !isOpen.value[index];

  for (let i = 0; i < faqsContent.faqs.length; i++) {
    if (i !== index) {
      isOpen.value[i] = false;
    }
  }
}
</script>

<template>
  <section id="faqs" class="faqs-section flex items-center relative h-[700px] md:h-[650px] xl:h-[700px]">
    <div class="container pt-20 text-center">
        <div class="text-black">
          <h3 class="text-3xl lg:text-4xl xl:text-5xl 3xl:text-5.5xl w-3/4 xl:w-2/4 md:w-full mx-auto font-bold pb-5">
            {{ faqsContent.heading }}
          </h3>
          <p class="text-lg 2xl:text-3xl">
            {{ faqsContent.text }}
          </p>
      </div>

      <div class="faqs-wrapper flex flex-col gap-4 pd-5 md:px-10 xl:px-20 pt-20 2xl:pt-26">
        <div
            v-for="(faq, index) in faqsContent.faqs"
            :key="index" class="faq-collapse bg-white shadow-3xl rounded-2xl text-start py-3 px-5 md:px-8"
        >
          <div @click="toggleItem(index)" class="cursor-pointer text-base md:text-lg xl:text-2xl">
            <div class="flex justify-between items-center gap-5 font-bold">
              <span>{{ faq.question }}</span>
              <span :class="[isOpen[index] ? 'icon-chevron-up' : 'icon-chevron-down']"></span>
            </div>
          </div>
          <div v-if="isOpen[index]" class="py-3 xl:text-2xl" :class="{'hidden': !isOpen[index]}">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faqs-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: theme('colors.accent');
  opacity: .2;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
  z-index: -1;
}
@media (max-width: 768px) {
  .faqs-section::before {
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  }
}
</style>