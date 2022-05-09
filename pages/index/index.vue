<template>
  <div class="main-margin">
    <div class="flex flex-row justify-between mt-[164px]">
      <div class="w-3/5 pl-[36px]">
        <div class="font-bold text-[60px] leading-[83px] text-color">{{ $t("home.title") }}</div>
        <div class="text-[#807D7C] leading-[21px] mt-[16px]">{{ $t("home.titleDesc") }}</div>
      </div>
      <div class="w-2/5">
        <div class="img-show-up img-center">
          <img class="w-[80px]" src="~/assets/images/title-img2.png">
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="mt-[32px] w-1/3 pl-[36px]">
        <button class="text-btn">{{ $t("home.btnText") }}</button>
      </div>
      <div class="w-2/3 title-img">
        <img class="absolute w-[600px]" src="~/assets/images/title-img.png">
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc") }}</div>
    <div class="text-center mt-[24px] mb-[72px]">
      <button class="text-btn">{{ $t("home.btnText2") }}</button>
    </div>
    <div class="grid grid-cols-3 gap-x-[64px]">
      <div class="flex flex-col bg-[#2E2A28] rounded-[16px] h-[460px] p-[42px]" v-for="areaId in [1, 2, 3]" :key="areaId">
        <div class="img-center py-[40px]">
          <img class="rounded-full w-[128px]" :src="getImageURL(`area-img${areaId}.png`)">
        </div>
        <div class="text-base leading-[19px] text-center mb-[16px]">{{ $t(`home.subTitle${areaId}`) }}</div>
        <div class="area-desc overflow-y-auto">{{ $t(`home.subDesc${areaId}`) }}</div>
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle2") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc2") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc21") }}</div>
    <div class="border-color mt-[80px]">
      <div class="bg-[#141212] rounded-[23px] p-[60px]">
        <img src="~/assets/images/area2-img.png">
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle3") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc3") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc31") }}</div>
    <div class="text-center mt-[24px] mb-[72px]">
      <button class="text-btn">{{ $t("home.btnText3") }}</button>
    </div>
    <div class="img-center">
      <img class="w-[700px]" src="~/assets/images/area3-img.png">
    </div>
    <div class="text-[20px] text-center mt-[16px]">{{ $t("home.sub3Title") }}</div>
    <div class="img-center mt-[16px]">
      <div class="area-desc w-[640px]">{{ $t("home.sub3Desc") }}</div>
    </div>
    <div class="flex flex-row justify-between mt-[164px]">
      <div class="w-3/5 bg-img">
        <div class="leading-[80px] text-[24px] pl-[32px]">{{ $t("home.sub4Title") }}</div>
        <div class="img-center h-[500px]">
          <img class="h-[90%] w-[90%]" src="~/assets/images/area4-img2.png">
        </div>
        <div class="text-base text-center mt-[16px]">{{ $t("home.sub4Desc") }}</div>
      </div>
      <div class="w-2/5 pl-[64px]">
        <div class="text-left-style area-title">{{ $t("home.btnText") }}</div>
        <div class="area-desc text-left-style">{{ $t("home.areaDesc4") }}</div>
        <div class="mt-[50px] flex">
          <button class="flex leading-[24px] text-btn">
            <img class="w-[24px] mr-[4px]" src="~/assets/images/btn-img1.png">{{ $t("home.btnText4") }}
          </button>
          <button class="flex leading-[24px] text-btn2 ml-[24px]">
            <img class="w-[24px] mr-[4px]" src="~/assets/images/btn-img2.png">{{ $t("home.btnText") }}
          </button>
        </div>
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle5") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc5") }}</div>
    <div class="mt-[80px]">
      <div class="grid grid-cols-2 gap-[8px]">
        <div class="bg-[#2E2A28] group hover:bg-[#A05E1C] h-[220px] p-[30px]" :class="[areaId == 1 || areaId == 3?'rounded-l-[16px]':'rounded-r-[16px]']" v-for="areaId in [1, 2, 3, 4]" :key="areaId">
          <div class="img-right">
            <img class="h-[20px]" src="~/assets/images/right.png">
          </div>
          <div class="flex">
            <div class="w-1/5 img-center">
              <img class="w-[66px]" :src="getImageURL(`area5-img${areaId}.png`)">
            </div>
            <div class="w-4/5">
              <div class="text-[20px] font-bold my-[12px]">{{ $t(`home.sub5Title${areaId}`) }}</div>
              <div class="overflow-y-auto text-[#807D7C] group-hover:text-white">{{ $t(`home.sub5Desc${areaId}`) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle6") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc6") }}</div>
    <div class="mt-[80px]">
      <div class="grid grid-cols-3 gap-[16px]">
        <div class="group h-[250px]" v-for="areaId in [1, 2, 3, 4, 5, 6]" :key="areaId">
          <div class="box-border group-hover:bg-none">
            <div class="bg-[#141212] rounded-[16px]">
              <div class="box-bg group-hover:bg-none group-hover:bg-[#A05E1C] img-center rounded-[16px] h-[250px]">
                <img class="w-[240px] hidden group-hover:block" :src="getImageURL(`area6-on-img${areaId}.png`)">
                <img class="w-[240px] block group-hover:hidden" :src="getImageURL(`area6-img${areaId}.png`)">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-title">{{ $t("home.areaTitle7") }}</div>
    <div class="area-desc">{{ $t("home.areaDesc7") }}</div>
    <div class="grid grid-cols-3 gap-x-[64px] mt-[80px]">
      <div class="flex flex-col bg-[#2E2A28] rounded-[16px] h-[430px] p-[16px]" v-for="areaId in [1, 2, 3]" :key="areaId">
        <div class="img-center">
          <img class="rounded-[16px]" :src="getImageURL(`area7-img${areaId}.png`)">
        </div>
        <div class="text-base font-bold leading-[19px] mb-[16px] mt-[24px]">{{ $t("home.sub7Title") }}{{areaId}}</div>
        <div class="text-[#807D7C] leading-[21px] text-ellipsis">{{ $t("home.sub7Desc") }}</div>
        <div class="text-[#807D7C] leading-[21px] text-right mt-[16px]">{{ $t("home.sub7Date") }}</div>
      </div>
    </div>
    <div class="text-center mt-[24px] mb-[80px]">
      <button class="text-btn">{{ $t("home.btnText5") }}</button>
    </div>
  </div>
</template>
<script setup>
  const { getImageURL } = useAssets()
</script>
<style>
  .text-color {
    background: radial-gradient(
      72.05% 992.16% at 23.59% 37.95%,
      #fff6ed 0%,
      #b7814b 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .border-color {
    /*border-image: radial-gradient(#807d7c 100%, #807d7c 48%) 10;*/
    box-sizing: border-box;
    padding: 1px;
    border-radius: 23px;
    background-image: -webkit-linear-gradient(#807d7c 100%, #807d7c 48%);
    background-image: -moz-linear-gradient(#807d7c 100%, #807d7c 48%);
    background-image: linear-gradient(#807d7c 100%, #807d7c 48%);
  }
  .img-center {
    @apply flex items-center justify-center;
  }
  .img-right {
    @apply flex;
    justify-content: end;
  }
  .title-img {
    @apply flex items-center;
    justify-content: end;
    margin-bottom: 6%;
  }
  .img-show-up {
    padding-right: 12%;
    -webkit-animation: bounce 5s infinite;
    animation: bounce 5s infinite;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-50%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  .text-left-style {
    @apply text-left !important;
  }
  .area-title {
    @apply text-[40px] leading-[47px] mt-[164px] text-center mb-[16px];
  }
  .area-desc {
    @apply text-[#807D7C] leading-[21px] text-center;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .text-btn {
    @apply bg-[#CC7219] text-base rounded-[45px] px-[24px] py-[10px];
  }
  .text-btn2 {
    @apply text-[#CC7219] border border-[#807D7C] text-base rounded-[45px] px-[24px] py-[10px];
  }
  .bg-img {
    background: url('~/assets/images/area4-img.png') no-repeat;
    background-size: contain;
  }
  .box-bg {
    background: linear-gradient(180deg, #2e2a28 0%, rgba(46, 42, 40, 0) 100%);
  }
  .box-border {
    box-sizing: border-box;
    padding: 1px;
    border-radius: 16px;
    background-image: -webkit-linear-gradient(
      to bottom,
      #bda48a 50%,
      #141212 100%
    );
    background-image: -moz-linear-gradient(to bottom, #bda48a 50%, #141212 100%);
    background-image: linear-gradient(to bottom, #bda48a 50%, #141212 100%);
  }
  .text-ellipsis {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>