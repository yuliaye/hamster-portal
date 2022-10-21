<template>
  <div class="mt-[64px]">
    <swiper :slides-per-view="1.5" :space-between="spaceBetween" :autoplay="true" :centered-slides="true" :loop="true">
      <swiper-slide><img src="../images/swiper1.jpg" /></swiper-slide>
      <swiper-slide><img src="../images/swiper2.jpg" /></swiper-slide>
      <swiper-slide><img src="../images/swiper3.jpg" /></swiper-slide>
    </swiper>
  </div>

</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import { onMounted } from 'vue'
const spaceBetween = ref(-140)

onMounted(() => {
  spaceBetween.value = document.body.clientWidth > 700 ? -140 : -40
})

</script>
<style>
.swiper {
  position: relative;
  width: 100%;
}

.swiper .swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  opacity: 0.7;
}

.swiper .swiper-slide-active {
  z-index: 99;
  opacity: 1;
  transform: scale(1);
}
</style> 