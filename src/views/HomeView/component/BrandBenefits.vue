<script setup>
import { benefitsContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
</script>

<template>
  <section class="container py-10 lg:py-20 2xl:py-26 md:px-10">
    <h4 class="text-2xl 2xl:text-4xl xl:text-3xl 3xl:text-4xl font-bold">
      {{ benefitsContent.heading }}
    </h4>
    <p class="text-lg 2xl:text-3xl pt-3 md:pt-7 md::w-3/4">
      {{ benefitsContent.text }}
    </p>
    <div class="grid lg:grid-cols-2 gap-5 pb-6 lg:pb-0">
      <div class="pt-10 md:pt-16">
        <template v-for="benefit in benefitsContent.benefits" :key="benefit.title">
          <div class="flex items-start justify-center gap-5 md:gap-8 pb-10 md:pb-20">
            <div class="shrink-0 text-primary flex justify-center w-16 2xl:w-28">
              <span :class="`icon-${benefit.icon[0]}`" class="text-6xl 2xl:text-8xl">
                <template v-for="item in Array.from({length: benefit.icon[1]}, (item, index) => index + 1)" :key="item">
                  <span :class="`path${item}`"></span>
                </template>
              </span>
            </div>
            <div>
              <h5 class="text-xl 2xl:text-3xl font-bold pb-2.5">{{ benefit.title }}</h5>
              <p class="text-lg 2xl:text-3xl">{{ benefit.description }}</p>
            </div>
          </div>
        </template>
      </div>
      <div class="flex items-center justify-center px-4 md:px-14">
        <img :src="benefitsContent.image" :alt="benefitsContent.alt">
      </div>
    </div>

    <div class="text-center lg:text-start pt-10 lg:pt-0">
      <SiteButton>
        {{ buttonsLabel.CTOBtn }}
      </SiteButton>
    </div>
  </section>
</template>
