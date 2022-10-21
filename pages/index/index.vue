<template>
  <div class="main-margin sm:mt-[160px] mt-[120px] div-bg">
    <div id="area-div">
      <div class="md:flex flex-row justify-between md:pt-[51px]">
        <div class="md:w-3/5" :class="[$i18n.locale =='en' ? 'pl-[10px] md:h-[370px]' : 'pl-[36px]']">
          <div class="font-bold title-h text-color" :class="{'tracking-tight title-h-en' : $i18n.locale =='en'}">Hamster
            empowers projects and developers in web3 to build their dreams</div>
          <div class="text-[#BABABA] leading-[25px] mt-[16px] w-[570px]">One-Stop Infrastructure, Development, Operation
            and Maintenance Service Platform for Blockchain Projects </div>
          <nuxt-link to="/download" target="_blank">
            <div class="w-[126px] h-11 rounded-[8px] download-btn-shallow"></div>
            <button
              class="bg-[#FFEDD4] text-base rounded-[8px] px-[24px] py-[10px] flex justify-center items-center text-[#141212] download-btn">
              {{ $t('header.download') }}
            </button>
          </nuxt-link>
        </div>
        <div class="md:w-2/5">
          <div class="img-center" :class="[$i18n.locale === 'en' ? 'img-show-up' : 'img-show-up2']">
            <img class="w-[40px] sm:w-[80px]" src="~/assets/images/title-img2.png">
          </div>
        </div>
      </div>
      <div class="flex-row md:flex">
        <div class="mt-[32px] w-1/3" :class="[$i18n.locale =='en' ? 'pl-[10px]' : 'pl-[36px]']">
          <button class="text-btn">{{ $t("home.btnText") }}</button>
        </div>
        <div class="md:w-2/3 title-img xl:mb-[5%]">
          <img class="md:absolute img-w" src="~/assets/images/title-img.png">
        </div>
      </div>
    </div>
    <div id="area-div1" class="flex flex-col items-center">
      <div class="inline-block area-title div1-title">
        <img src="~/assets/images/home-star.png" class="first-star" />
        <span>Hamster DevOps Solutions</span>
        <img src="~/assets/images/home-star.png" class="last-star" />
      </div>
      <div class="mx-auto w-[600px] text-center mt-6">
        <span class="text-[#BABABA]">
          Hamster offers the integrated approach to build , test and run projects in web3.
          We offer the most flexible platform for developers to turn their blockchain ideas into reality.
        </span>
      </div>
      <div class="flex mx-auto mt-12">
        <div class="h-[415px] flex-1 mr-6 text-center self-center flex flex-col area-div1-border">
          <img src="~/assets/images/home-first-devops.png" class="h-[95px] w-[95px] self-center mt-[98px]" />
          <span class="px-[28px] mt-[20px]">Hamster Decentralized Computing Power Network</span>
          <div @mouseover="hoverShowone=true" @mouseout="hoverShowone=false" class="w-6 mx-auto">
            <img :src="getImageURL('orange-arrow.svg')" class="self-center w-5 mt-[60px]" v-if="hoverShowone" />
            <img :src="getImageURL('black-arrow.svg')" class="self-center w-5 mt-[60px]" v-if="!hoverShowone" />
          </div>
        </div>
        <div class="h-[415px] flex-1 mr-6 text-center self-center flex flex-col area-div1-border">
          <img src="~/assets/images/home-second-devops.png" class="h-[95px] w-[95px] self-center mt-[98px]" />
          <span class="px-[28px] mt-[20px]">Hamster Node Service</span>
          <div @mouseover="hoverShowtwo=true" @mouseout="hoverShowtwo=false" class="w-6 mx-auto">
            <img :src="getImageURL('orange-arrow.svg')" class="self-center w-5 mt-[82px]" v-if="hoverShowtwo" />
            <img :src="getImageURL('black-arrow.svg')" class="self-center w-5 mt-[82px]" v-if="!hoverShowtwo" />
          </div>
        </div>
        <div class="h-[415px] flex-1 mr-6 text-center self-center flex flex-col area-div1-border">
          <img src="~/assets/images/home-third-devops.png" class="h-[95px] w-[95px] self-center mt-[98px]" />
          <span class="px-[28px] mt-[20px]">Hamster Development Toolkit</span>
          <div @mouseover="hoverShowthree=true" @mouseout="hoverShowthree=false" class="w-6 mx-auto">
            <img :src="getImageURL('orange-arrow.svg')" class="self-center w-5 mt-[82px]" v-if="hoverShowthree" />
            <img :src="getImageURL('black-arrow.svg')" class="self-center w-5 mt-[82px]" v-if="!hoverShowthree" />
          </div>
        </div>
        <div class="h-[415px] flex-1 text-center self-center flex flex-col area-div1-border">
          <img src="~/assets/images/home-fourth-devops.png" class="h-[95px] w-[95px] self-center mt-[98px]" />
          <span class="px-[28px] mt-[20px]">Hamster Operation and Maintenance Toolkit</span>
          <div @mouseover="hoverShowfour=true" @mouseout="hoverShowfour=false" class="w-6 mx-auto">
            <img :src="getImageURL('orange-arrow.svg')" class="self-center w-5 mt-[60px]" v-if="hoverShowfour" />
            <img :src="getImageURL('black-arrow.svg')" class="self-center w-5 mt-[60px]" v-if="!hoverShowfour" />
          </div>
        </div>
      </div>

    </div>
    <div id="area-div2" class="flex flex-wrap mt-[160px]">
      <div class="flex-1 mr-[150px] self-center">
        <span class="block mb-6 text-5xl font-bold">Hamster DevOps Solutions</span>
        <span class="text-lg text-[#BABABA]">
          For enterprises (traditional enterprises and web3.0 enterprises) having specific customized needs,
          Hamster offers semi-customized service based on the four hamster standard solutions.
          This charged service provides enterprises endless scalability for their blockchain products’ deployment,
          development, operation and maintenance.
        </span>
      </div>
      <img src="~/assets/images/home-devops-solution.png" class="h-[406px] flex-1" />
    </div>
    <div id="area-div3">
      <div class="area-title">Guidance of participating in Hamster's Computing Power Network</div>
      <!-- <div class="w-[1000px] h-[565px] border border-solid border-[#fff] mx-auto rounded-[30px] relative mt-16">
        <div
          class="w-[974px] h-[540px] border-[0.3px] border-solid border-[#fff] mx-auto rounded-[30px] absolute top-3 left-3">
        </div>
        <div class="download w-[938px] h-[506px] absolute top-12 left-7">
          <iframe width="938" height="490" src="https://www.youtube.com/embed/nX8RXgwd9es?autoplay=1" :rel="0" />
        </div>
      </div> -->

      <div
        class="grid grid-cols-1 md:h-[565px] border border-solid border-[#fff] mx-auto rounded-[30px] relative mt-16 circle-line">
        <div class="download iframe-box">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nX8RXgwd9es?autoplay=1" :rel="0"
            class="rounded-[30px]" />
        </div>
      </div>
      <div @mouseover="hoverShowfive=true" @mouseout="hoverShowfive=false" class="w-6 mx-auto">
        <img :src="getImageURL('orange-arrow.svg')" class="self-center w-[50px] mt-[40px]" v-if="hoverShowfive" />
        <img :src="getImageURL('black-arrow.svg')" class="self-center w-[50px] mt-[40px]" v-if="!hoverShowfive" />
      </div>
    </div>
    <div id="area-div4">
      <div class="area-title">Hamster Ecology</div>
      <EcologyModule />
    </div>
    <div id="area-div5">
      <div class="area-title">Roadmap</div>
      <img src='./images/Roadmap.png' class="mt-[64px]" />
    </div>
    <div id="area-div6">
      <div class="area-title">More about Hamster</div>
      <MoreSwiper />
    </div>
  </div>
</template>

<script setup>
import EcologyModule from './components/ecologyModule.vue'
import MoreSwiper from './components/moreSwiper.vue'
import { ref } from 'vue';

const { getImageURL } = useAssets()

const hoverShowone = ref(false)
const hoverShowtwo = ref(false)
const hoverShowthree = ref(false)
const hoverShowfour = ref(false)
const hoverShowfive = ref(false)

</script>

<style scoped>
.title-img {
  @apply flex items-center justify-end;
}

.img-show-up {
  -webkit-animation: bounce 16s infinite;
  animation: bounce 16s infinite;
  padding-right: 0;
  padding-left: 17.5%;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0%);
    animation-timing-function: ease;
  }

  50% {
    transform: translateY(105%);
    animation-timing-function: ease;
  }
}

.img-show-up2 {
  padding-right: 9.6%;
  -webkit-animation: bounce2 8s infinite;
  animation: bounce2 8s infinite;
}

@keyframes bounce2 {

  0%,
  100% {
    transform: translateY(-50%);
    animation-timing-function: ease;
  }

  50% {
    transform: translateY(0);
    animation-timing-function: ease;
  }
}

.text-btn {
  @apply bg-[#CC7219] text-base rounded-[45px] px-[24px] py-[10px] hidden;
}

.text-btn2 {
  @apply text-[#CC7219] border border-[#807D7C] text-base rounded-[45px] px-[24px] py-[10px] hidden;
}

pre {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
}

* html pre {
  word-wrap: break-word;
  white-space: normal;
}

.title-h {
  @apply text-[40px] leading-[50px];
}

.title-h-en {
  @apply h-auto;
}

@screen md {
  .img-w {
    @apply w-[450px];
  }

  .title-h-en {
    @apply h-[200px];
  }

  .img-show-up {
    padding-right: 37%;
    padding-left: 0;
  }

  @keyframes bounce {

    0%,
    100% {
      transform: translateY(-50%);
    }

    50% {
      transform: translateY(118%);
    }
  }
}

@screen lg {
  .img-w {
    @apply w-[600px];
  }

  .title-h {
    @apply text-[49px] leading-[82px];
  }

  .title-h-en {
    @apply h-[249px];
  }

  .img-show-up {
    padding-right: 36.7%;
  }

  @keyframes bounce {
    50% {
      transform: translateY(95%);
    }
  }
}

@screen xl {
  .title-h {
    @apply text-[50px] leading-[82px];
  }

  .img-show-up {
    padding-right: 9.6%;
  }

  @keyframes bounce {
    50% {
      transform: translateY(85%);
    }
  }
}

.download-btn {
  position: relative;
  z-index: 100;
}

.download-btn-shallow {
  border: 1px solid #FFEDD4;
  position: relative;
  z-index: 80;
  top: 53px;
  left: 8px;
}

.div1-title {
  position: relative;
  font-size: 50px;
}

.first-star {
  width: 50px;
  position: absolute;
  top: -15px;
  left: -70px;
}

.last-star {
  width: 50px;
  position: absolute;
  top: 20px;
  right: -70px;
}

.area-div1-border {
  border: 1px dashed #4E4A4A;
  border-radius: 50% 50% 16px 16px/ 10% 10% 16px 16px;
}

.iframe-box {
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  margin: auto;
  border-radius: 30px;
  min-height: 300px;
}

.circle-line {
  min-height: 360px;
}

.circle-line::before {
  content: "";
  position: absolute;
  margin: 13px;
  width: calc(100% - 26px);
  height: calc(100% - 26px);
  border: 0.3px solid #fff;
  border-radius: 30px;
}
</style>
