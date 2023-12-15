<script setup>
import { footerLogo } from "@/@core/constants/site-info";
import { footerContent, menuNavLinks } from "@/@core/constants/home-view";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <footer class="relative">
    <div class="container">
      <div class="support-card rounded-2xl lg:rounded-4xl shadow-3xl w-full sm:w-3/4 md:w-2/4 mx-auto bg-white p-5 sm:p-8 xl:p-10 3xl:p-14">
        <div class="flex gap-5 sm:gap-7">
            <div class="flex justify-center items-center bg-primary rounded-full shrink-0 h-12 w-12 sm:h-16 sm:w-16 2xl:w-20 2xl:h-20 p-3">
              <span class="icon-chats text-white text-2xl md:text-4xl 2xl:text-5xl"></span>
            </div>
          <div>
            <h5 class="text-xl lg:text-3xl 2xl:text-3xl text-black">
              {{ footerContent.supportCard.heading }}
            </h5>
            <h6 class="text-base lg:text-lg 2xl:text-2xl text-primary pt-0.5 pb-3 2xl:pt-2 2xl:pb-5">
              {{ footerContent.supportCard.subHeading }}
            </h6>
            <p class="text-lg lg:text-xl 2xl:text-2xl text-black">
              {{ footerContent.supportCard.text }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-2/4 mx-auto">
        <div class="text-center pt-14 pb-7 2xl:pt-18 2xl:pb-10">
          <img :src="footerLogo.path" :alt="footerLogo.alt" class="w-3/4 sm:w-5/12 mx-auto">
        </div>
        <div class="social-icons flex justify-center gap-7 xl:gap-12 text-white">
          <template v-for="({ icon, link }, i) in footerContent.socialIcons" :key="i">
            <a :href="link" target="_blank">
              <span :class="`icon-${icon}`" class="text-2xl md:text-3xl 2xl:text-4xl cursor-pointer"></span>
            </a>
          </template>
        </div>
      </div>

      <ul
          class="nav-links flex gap-5 md:gap-10 xl:gap-14 flex-col md:flex-row justify-center text-center text-white text-lg lg:text-2xl 2xl:text-3xl pt-8 lg:pt-14 2xl:pt-20 pb-12 lg:pb-20 2xl:pb-28"
      >
        <template v-for="(navLink, i) in menuNavLinks" :key="i">
          <li
              class="cursor-pointer"
              @click="scrollToSection(navLink.sectionId)"
          >
            {{ navLink.label }}
          </li>
        </template>
      </ul>

      <div class="copy-right text-center text-white pb-5 lg:pb-7 2xl:pb-13">
        <p class="text-lg md:text-xl 2xl:text-2xl">
          {{ footerContent.copyRightNotice }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: theme('colors.tertiary');
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
  z-index: -1;
}
@media (max-width: 768px) {
  footer::before {
    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
  }
}
</style>