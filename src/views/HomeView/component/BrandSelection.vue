<script setup>
import { brandSelectionContent } from "@/@core/constants/home-view";
</script>

<template>
  <section id="whyUs" class="container text-start md:text-center pt-20 md:pt-28">
    <h2 class="text-2xl lg:text-3xl xl:text-4.5xl 3xl:text-5.5xl font-bold text-primary">
      {{ brandSelectionContent.heading }}
    </h2>
    <hr class="w-1/6 sm:w-[6%] md:mx-auto border-2 border-primary my-6 lg:my-9 3xl:my-12">

    <template v-for="(content, i) in brandSelectionContent.descriptions" :key="i">
      <p class="text-lg 2xl:text-3xl pt-6">
        {{ content }}
      </p>
    </template>
  </section>
</template>
