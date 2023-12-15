<script setup>
import { CTOSectionContent, buttonsLabel} from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
</script>

<template>
  <section class="container text-center py-20 2xl:py-26">
    <h2 class="text-primary text-3xl lg:text-4xl xl:text-5xl 3xl:text-5.5xl font-bold">
      {{ CTOSectionContent.heading }}
    </h2>

    <hr class="w-1/6 sm:w-[6%] md:mx-auto border-2 border-primary mx-auto my-6 lg:my-9 3xl:my-12">

    <p class="text-lg 2xl:text-2xl mt-6 lg:mt-9 2xl:mt-12 mb-4">
      {{ CTOSectionContent.text }}
    </p>

    <div class="text-center pt-10 lg:pt-12">
      <SiteButton>
        {{ buttonsLabel.CTOBtn }}
      </SiteButton>
    </div>
  </section>
</template>
