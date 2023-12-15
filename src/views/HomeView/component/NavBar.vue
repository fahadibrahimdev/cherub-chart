<script setup>
import { ref, onMounted, onUnmounted, defineEmits } from "vue";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection, toggleNavShadow } from "@/@core/utils/functions";
import { menuLogo } from "@/@core/constants/site-info";
import { buttonsLabel, menuNavLinks } from "@/@core/constants/home-view";

const currentSection = ref('home')
let allSections = []

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  allSections = document.querySelectorAll("section[id]");
  toggleNavShadow();
  updateCurrentSection();
};

const updateCurrentSection = () => {
  const homeSection = document.getElementById('home');
  const featuresSection = document.getElementById('features');
  const whyUsSection = document.getElementById('whyUs');

  if (!homeSection || !featuresSection || !whyUsSection) return 'home';

  let scrollY = window.scrollY;
  allSections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
    ) currentSection.value = sectionId
  })
}
updateCurrentSection();

defineEmits(['toggleMenuSidebar'])
</script>

<template>
  <nav class="nav-bar fixed bg-secondary py-3 z-50 w-full">
    <div class="container flex justify-between items-center">
      <!-- Brand Logo -->
      <div class="brand-logo w-24 md:w-32 2xl:w-36">
        <RouterLink to="/">
          <img :src="menuLogo.path" :alt="menuLogo.alt">
        </RouterLink>
      </div>
      <!-- Menu Links -->
      <div class="block md:hidden">
        <span
            class="icon-hamburger text-black text-xl"
            @click="$emit('toggleMenuSidebar', true)"
        />
      </div>
      <div class="hidden md:flex items-center md:gap-10 xl:gap-20 3xl:gap-28">
        <ul class="nav-links md:space-x-14 xl:space-x-24 3xl:space-x-38 md:flex lg:text-xl xl:text-2xl 3xl:text-3xl text-black">
          <template v-for="(navLink, i) in menuNavLinks" :key="i">
            <li
                class="cursor-pointer"
                :class="{ 'font-bold': currentSection === navLink.sectionId }"
                @click="scrollToSection(navLink.sectionId)"
            >
              {{ navLink.label }}
            </li>
          </template>
        </ul>

        <!-- CTA Button -->
        <div>
          <SiteButton class="!bg-primary">
            {{ buttonsLabel.CTOBtn }}
          </SiteButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-links li{
  position: relative;
}
.nav-links li::after{
  content: '';
  width: 0;
  height: 2px;
  background:  theme('colors.primary');
  position: absolute;
  bottom: -2px;
  left: 0;
  transition: .3s ease-in all;
}
.nav-links li:hover::after{
  width: 100%;
}
</style>