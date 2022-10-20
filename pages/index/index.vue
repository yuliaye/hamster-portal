<template>
  <div class="main-margin sm:mt-[160px] mt-[120px] div-bg">
    <div id="area-div">
      <div class="md:flex flex-row justify-between md:pt-[51px]">
        <div class="md:w-3/5" :class="[$i18n.locale =='en' ? 'pl-[10px] md:h-[370px]' : 'pl-[36px]']">
          <div class="font-bold title-h text-color" :class="{'tracking-tight title-h-en' : $i18n.locale =='en'}">{{ $t("home.title") }}</div>
          <div class="text-[#807D7C] leading-[21px] mt-[16px] mb-10">{{ $t("home.titleDesc") }}</div>
          <nuxt-link to="/download" target="_blank">
            <button class="bg-[#cc7219] text-base rounded-[8px] px-[24px] py-[10px] flex justify-center items-center">
              <img src="~/assets/images/download.png" class="w-4 h-4 mr-2">
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
    <div id="area-div1">
      <div class="area-title">Hamster DevOps Solutions</div>
    </div>
    <div id="area-div2">
      <div class="area-title">Hamster DevOps Solutions</div>
    </div>
    <div id="area-div3">
      <div class="area-title">Guidance of participating in Hamster's Computing Power Network</div>
    </div>
    <div id="area-div4">
      <div class="area-title">Hamster Ecology</div>
    </div>
    <div id="area-div5">
      <div class="area-title">Roadmap</div>
    </div>
    <div id="area-div6">
      <div class="area-title">More about Hamster</div>
    </div>  
  </div>
</template>

<script setup>
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
  .title-h{
    @apply text-[40px] leading-[50px];
  }
  .title-h-en{
    @apply h-auto;
  }
  
  @screen md {
    .img-w{
      @apply w-[450px];
    }
    .title-h-en{
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
    .img-w{
      @apply w-[600px];
    }
    .title-h{
      @apply text-[49px] leading-[83px];
    }
    .title-h-en{
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
    .title-h{
      @apply text-[60px] leading-[83px];
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
</style>
