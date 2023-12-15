<script setup>
import { scrollToSection } from "@/@core/utils/functions";
import { defineEmits } from "vue";
import SiteButton from "@/@core/components/SiteButton.vue";
import { menuNavLinks, buttonsLabel } from "@/@core/constants/home-view";

defineProps({
  isExpanded: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleMenuSidebar'])

let startX = 0;
let endX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const deltaX = startX - endX;
  const minSwipeDistance = 50;
  if (deltaX > minSwipeDistance) emit('toggleMenuSidebar', false)
});

</script>

<template>
  <div class="collapsible-sidebar shadow-3xl"
       :class="{ 'expanded': isExpanded }"
  >
    <div class="absolute right-3 top-3">
      <div
          class="rounded-full w-7 h-7 flex justify-center items-center bg-primary"
          @click="emit('toggleMenuSidebar', false)"
      >
        <span class="icon-x text-white text-xl"></span>
      </div>
    </div>
    <div class="sidebar-content mt-14 px-5">
      <ul class="mobile-nav-links space-y-6 text-xl text-black mb-6">
        <template v-for="(navLink, i) in menuNavLinks" :key="i">
          <li
              class="font-bold"
              @click="scrollToSection(navLink.sectionId)"
          >
            {{ navLink.label }}
          </li>
        </template>
      </ul>

      <SiteButton>
        {{ buttonsLabel.CTOBtn }}
      </SiteButton>
    </div>
  </div>
</template>

<style scoped>
.collapsible-sidebar{
  position: fixed;
  top: 0;
  left: -250px;
  height: 100vh;
  width: 250px;
  z-index: 1111;
  background: white;
  transition: left 0.4s ease 0s;
}
.collapsible-sidebar.expanded{
  left: 0;
}
</style>