<template>
  <div class="mt-[64px]">
    <swiper :slides-per-view="1.5" :space-between="spaceBetween" :autoplay="true" :centered-slides="true" :loop="true"
      :modules="[Autoplay,Navigation]" autoplay navigation :pagination="{ clickable: true }">
      <swiper-slide><img src="../images/swiper3.jpg" @click="pathUrl('3')" /></swiper-slide>
      <swiper-slide><img src="../images/swiper1.jpg" @click="pathUrl('1')" /></swiper-slide>
      <swiper-slide><img src="../images/swiper2.jpg" @click="pathUrl('2')" /></swiper-slide>
    </swiper>
  </div>

</template>
<script setup>
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation';
import { onMounted, ref } from 'vue'
const spaceBetween = ref(-140)

onMounted(() => {
  spaceBetween.value = document.body.clientWidth > 700 ? -140 : -40
})

const pathUrl = (val) => {
  if (val === '1') {
    window.open("https://hamsternetcn.medium.com/%E5%90%8E2049%E6%97%B6%E4%BB%A3%E5%8D%8E%E4%BA%BA%E5%BA%94%E8%AF%A5%E5%A6%82%E4%BD%95%E7%AB%8B%E8%B6%B3web3%E6%96%B0%E6%B5%AA%E6%BD%AE-hamster%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA%E7%AC%AC%E4%B8%89%E6%9C%9F-31ea5b3b7460")
  } else if (val === '2') {
    window.open("https://hamsternetcn.medium.com/%E5%85%AC%E9%93%BE%E6%88%98%E4%BA%89-%E6%B3%A2%E5%8D%A1%E8%BF%98%E6%98%AFeth-killer%E5%90%97-hamster%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA%E7%AC%AC%E4%B8%80%E6%9C%9F-1a3297bbce94")
  } else {
    window.open("https://hamsternetcn.medium.com/%E6%B3%A2%E5%8D%A1er%E5%A6%82%E4%BD%95%E6%8B%9B%E6%9E%B6new-l1-hamster%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA%E4%BA%8C%E6%9C%9F-2025cf3c0556")
  }

}


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

.swiper .swiper-slide img {
  cursor: pointer;
}

.swiper .swiper-slide-active {
  z-index: 99;
  opacity: 1;
  transform: scale(1);
}

.swiper-button-prev,
.swiper-button-next {
  color: #FFEDD4;
}
</style> 