<template>
  <div class="main-margin sm:mt-[160px] mt-[120px] div-bg">
    <div id="area-div">
      <div class="md:flex flex-row justify-between md:pt-[51px]">
        <div class="md:w-3/5" :class="[$i18n.locale =='en' ? 'pl-[10px] md:h-[370px]' : 'pl-[36px]']">
          <div class="font-bold title-h text-color" :class="{'tracking-tight title-h-en' : $i18n.locale =='en'}">{{ $t("home.title") }}</div>
          <div class="text-[#807D7C] leading-[21px] mt-[16px] mb-10">{{ $t("home.titleDesc") }}</div>
          <nuxt-link to="/faucet" target="_blank">
            <button 
              class="text-[#CC7219] w-32 h-12 border border-solid border-[#807D7C] rounded-3xl"
            >Faucet >></button>
          </nuxt-link>
          <nuxt-link to="/stack" target="_blank">
            <button 
              class="text-[#CC7219] w-32 h-12 border border-solid border-[#807D7C] rounded-3xl ml-6"
            >Stack >></button>
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
      <div class="area-title">{{ $t("home.areaTitle") }}</div>
      <div class="area-desc">{{ $t("home.areaDesc") }}</div>
      <div class="text-center mt-[24px] mb-[72px]">
        <button class="text-btn">{{ $t("home.btnText2") }}</button>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-3 xl:gap-[64px] gap-[8px]">
        <div class="flex flex-col bg-[#2E2A28] rounded-[16px] h-[460px] sm:h-auto p-[20px] xl:p-[42px]" v-for="areaId in [1, 2, 3]" :key="areaId">
          <div class="img-center py-[40px]">
            <img class="rounded-full w-[128px]" :src="getImageURL(`area-img${areaId}.png`)">
          </div>
          <div class="font-bold text-base leading-[19px] text-center mb-[16px]">{{ $t(`home.subTitle${areaId}`) }}</div>
          <div class="overflow-y-auto area-desc">{{ $t(`home.subDesc${areaId}`) }}</div>
        </div>
      </div>
    </div>
    <div id="area-div2">
      <div class="area-title">{{ $t("home.areaTitle2") }}</div>
      <div class="img-center">
        <div class="area-desc area-desc-with">{{ $t("home.areaDesc2") }}{{ $t("home.areaDesc21") }}</div>
      </div>
      <div class="border-color mt-[80px]">
        <div class="bg-[#141212] rounded-[23px] p-[60px]">
          <img :src="getImageURL(`area2-img-${$i18n.locale}.png`)">
        </div>
      </div>
    </div>
    <div id="area-div3">
      <div class="area-title">{{ $t("home.areaTitle3") }}</div>
      <div class="img-center">
        <div class="area-desc area-desc-with">{{ $t("home.areaDesc3") }}{{ $t("home.areaDesc31") }}</div>
      </div>
      <div class="text-center mt-[24px] mb-[72px]">
        <button class="text-btn">{{ $t("home.btnText3") }}</button>
      </div>
      <div class="border-color2">
        <div class="bg-[#141212] rounded-[16px]">
          <div class="box-bg rounded-[16px] grid md:grid-cols-2 xl:gap-[40px] gap-[8px] p-[20px] xl:p-[50px]">
            <div class="img-center">
              <img src="~/assets/images/area3-img.png">
            </div>
            <div>
              <div class="font-bold text-[20px] text-center mt-[16px]">{{ $t("home.sub3Title") }}</div>
              <div class="img-center mt-[16px] flex">
                <div class="overflow-y-auto area-desc">{{ $t("home.sub3Desc") }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="area-div4">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[64px] gap-[8px] mt-[60px] lg:pt-[100px] pt-0 div-bg2">
        <div>
          <div class="leading-[60px] text-[20px] pl-[32px] border border-color3 rounded-t-[16px]">{{ $t("home.sub4Title") }}</div>
          <div class="flex p-[24px] h-[450px] border border-color3 rounded-b-[16px] border-t-0">
            <div class="overflow-y-auto div-box">
              <pre>
What are the newest DeFi projects?
QUERY [ result
categories(
where:{name:"DeFi"} "name":"DeFi Prime",
){ "description": "A source of DeFi data
project analytios and market information."
orderBy: createdAt,
)
{ name "name": "Opyn",
desoription trading and risk management platform.""description": "A decentralized optionsdesoription trading and risk
}
}，
}
{
}1 "name":"Airswap",
"description": "A decentralized exchange for peer-to-peer trading of crypto assets."
}
What are the newest DeFi projects?
QUERY [ result
categories(
where:{name:"DeFi"} "name":"DeFi Prime",
){ "description": "A source of DeFi data
project analytios and market information."
orderBy: createdAt,
)
{ name "name": "Opyn",
desoription trading and risk management platform.""description": "A decentralized optionsdesoription trading and risk
}
}，
}
{
}1 "name":"Airswap",
"description": "A decentralized exchange for peer-to-peer trading of crypto assets."
}
              </pre>
            </div>
          </div>
        </div>
        <div class="row-start-1 lg:col-start-2">
          <div class="font-bold text-[40px] leading-[47px] mt-[100px] mb-[16px] text-center lg:text-left">{{ $t("home.btnText") }}</div>
          <div class="area-desc !text-center lg:!text-left">{{ $t("home.areaDesc4") }}</div>
          <div class="mt-[50px] flex">
            <button class="flex leading-[24px] text-btn">
              <img class="w-[24px] mr-[4px]" src="~/assets/images/btn-img1.png">{{ $t("home.btnText4") }}
            </button>
            <button class="flex leading-[24px] text-btn2 ml-[24px]">
              <img class="w-[24px] mr-[4px]" src="~/assets/images/btn-img2.png">{{ $t("home.btnText") }}
            </button>
          </div>
          <div class="mb-[24px] lg:mb-0 lg:mt-[16px] text-center lg:text-left">{{ $t("home.sub4Desc") }}</div>
        </div>
      </div>
    </div>
    <div id="area-div5">
      <div class="area-title">{{ $t("home.areaTitle5") }}</div>
      <div class="img-center">
        <div class="area-desc area-desc-with">{{ $t("home.areaDesc5") }}</div>
      </div>
      <div class="mt-[80px]">
        <div class="grid sm:grid-cols-2 gap-[8px]">
          <div class="bg-[#2E2A28] group hover:bg-[#A05E1C] h-[220px] p-[20px] xl:p-[30px]" :class="[areaId == 1 || areaId == 3?'rounded-[16px] sm:rounded-r-none':'rounded-[16px] sm:rounded-l-none']" v-for="areaId in [1, 2, 3, 4]" :key="areaId">
            <div class="img-right">
              <img class="h-[20px]" src="~/assets/images/right.png">
            </div>
            <div class="flex">
              <div class="w-1/5 img-center">
                <img class="w-[66px]" :src="getImageURL(`area5-img${areaId}.png`)">
              </div>
              <div class="w-4/5">
                <div class="text-[20px] font-bold my-[12px] text-ellipsis text-line-2">{{ $t(`home.sub5Title${areaId}`) }}</div>
                <div class="overflow-y-auto text-[#807D7C] group-hover:text-white text-ellipsis text-line-2">{{ $t(`home.sub5Desc${areaId}`) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="area-div6">
      <div class="area-title">{{ $t("home.areaTitle6") }}</div>
      <div class="area-desc">{{ $t("home.areaDesc6") }}</div>
      <div class="mt-[80px]">
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-[16px]">
          <div class="group h-[200px]" v-for="areaId in [1, 2, 3, 4, 5, 6]" :key="areaId">
            <div class="border-color2 group-hover:bg-none">
              <div class="bg-[#141212] rounded-[16px]">
                <div class="box-bg group-hover:bg-none group-hover:bg-[#A05E1C] img-center rounded-[16px] h-[200px]">
                  <img class="w-[240px] hidden group-hover:block" :src="getImageURL(`area6-on-img${areaId}.png`)">
                  <img class="w-[240px] block group-hover:hidden" :src="getImageURL(`area6-img${areaId}.png`)">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="area-div7">
      <div class="area-title">{{ $t("home.areaTitle7") }}</div>
      <div class="area-desc">{{ $t("home.areaDesc7") }}</div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 xl:gap-[64px] gap-[8px] mt-[80px]">
        <div class="flex flex-col bg-[#2E2A28] rounded-[16px] p-[16px]" v-for="areaId in [1, 2, 3]" :key="areaId">
           <nuxt-link :to="{path:`/news/${areaId}`}" target="_blank">
            <div class="img-center">
              <img class="rounded-[16px]" :src="getImageURL(`area7-img${areaId}.png`)">
            </div>
            <div class="text-base font-bold leading-[19px] mb-[16px] mt-[24px] h-[38px] text-ellipsis text-line-2">{{ $t(`home.sub7Title${areaId}`) }}</div>
            <div class="text-[#807D7C] leading-[21px] text-ellipsis text-line-2">{{ $t(`home.sub7Desc${areaId}`) }}</div>
            <div class="text-[#807D7C] leading-[21px] text-right mt-[16px]">{{ $t(`home.sub7Date${areaId}`) }}</div>
          </nuxt-link>
        </div>
      </div>
      <div class="text-center mt-[24px] mb-[80px]">
        <button class="text-btn">{{ $t("home.btnText5") }}</button>
      </div>
    </div>
    <div class="aside"><!-- container  !hidden -->
      <ul>
        <li @click="setAside(`${asideId}`)" :class="{'aside-active' : curAsideId == asideId}" v-for="asideId in asideIdList" :key="asideId"></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  const { getImageURL } = useAssets()
  const beforeAsideId = ref(1)
  const curAsideId = ref(1)
  const asideIdList = ref([1,2,3,4,5,6,7,8,9])
  const beforeTopVal = ref(0)
  const topVal = ref(0)
  const scrollList = ref([])
  const scrollListDown = ref([0])
  const scrollListUp = ref([0])

  onMounted(async () => {
    if (typeof window !== 'undefined') {
      for (let i = 1; i < asideIdList.value.length - 1; i++) {
        if (i == 4) {
          scrollListDown.value.push(document.getElementById("area-div" + i).offsetTop + 65);
          scrollListUp.value.push(document.getElementById("area-div" + i).offsetTop - 20);
        } else {
          scrollListDown.value.push(document.getElementById("area-div" + i).offsetTop - 40);
          scrollListUp.value.push(document.getElementById("area-div" + i).offsetTop - 130);
        }
      }
      const footerTop = document.documentElement.scrollHeight - document.documentElement.clientHeight - 5;
      scrollListDown.value.push(footerTop);
      scrollListUp.value.push(footerTop);
    }
  });
  
  function setAside(asideId) {
    beforeAsideId.value = curAsideId.value
    curAsideId.value = asideId
    checkUpDown();
    const scrollTop = scrollList.value[asideId - 1] + 1;
    document.body.scrollTop = scrollTop;
    document.documentElement.scrollTop = scrollTop;
  }
  function checkUpDown() {
  
    if (beforeAsideId.value < curAsideId.value || beforeTopVal.value < topVal.value) { // 向下滚动  
      scrollList.value = scrollListDown.value;
    } else if (beforeAsideId.value > curAsideId.value || beforeTopVal.value > topVal.value) { //向上滚动
      scrollList.value = scrollListUp.value;
    }
  }
  function handleScrolls() {
    topVal.value = document.body.scrollTop || document.documentElement.scrollTop
    
    checkUpDown();
    if (topVal.value >= scrollList.value[8]) {
      curAsideId.value = 9
    } else if (topVal.value >= scrollList.value[7]) {
      curAsideId.value = 8
    } else if (topVal.value >= scrollList.value[6]) {
      curAsideId.value = 7
    } else if (topVal.value >= scrollList.value[5]) {
      curAsideId.value = 6
    } else if (topVal.value >= scrollList.value[4]) {
      curAsideId.value = 5
    } else if (topVal.value >= scrollList.value[3]) {
      curAsideId.value = 4
    } else if (topVal.value >= scrollList.value[2]) {
      curAsideId.value = 3
    } else if (topVal.value >= scrollList.value[1]) {
      curAsideId.value = 2
    } else {
      curAsideId.value = 1
    }
    beforeTopVal.value = topVal.value;
  }
  onMounted(() => {
    window.addEventListener("scroll", handleScrolls)
    handleScrolls();
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrolls)
  })
</script>
<style>
  .div-bg {
    background: url('~/assets/images/div-bg1.png') no-repeat;
    background-origin: border-box;
    background-size: 130% 500px;
  }
  .div-bg2 {
    background: url('~/assets/images/div-bg2.png') no-repeat;
    background-origin: border-box;
    background-size: 450px 570px;
    background-position: 100% 10%;
  }
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
  .img-right {
    @apply flex justify-end;
  }
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
  .text-left-style {
    @apply text-left !important;
  }
  .area-desc {
    @apply text-[#807D7C] leading-[21px] text-center;
  }
  .area-desc-with {
    @apply max-w-[910px];
  }
  .text-btn {
    @apply bg-[#CC7219] text-base rounded-[45px] px-[24px] py-[10px] hidden;
  }
  .text-btn2 {
    @apply text-[#CC7219] border border-[#807D7C] text-base rounded-[45px] px-[24px] py-[10px] hidden;
  }
  .bg-img {
    background: url('~/assets/images/area4-img.png') no-repeat;
    background-size: contain;
  }
  .box-bg {
    background: linear-gradient(180deg, #2e2a28 0%, rgba(46, 42, 40, 0) 100%);
  }
  .aside {
    @apply fixed top-[50%] flex justify-end right-0 m-auto pr-[2%];
    z-index: 100;
    /* justify-content: end; */
    -webkit-transform: translateY(-40%);
    transform: translateY(-40%);
  }
  .aside li {
    @apply w-[8px] h-[8px] bg-[#807D7C] rounded-[4px] mt-[8px] cursor-pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .aside-active {
    @apply h-[20px] bg-[#cc7219] !important;
  }
  .border-color3 {
    @apply border-[#514F4E] !important;
  }
  .div-box {
    word-wrap: break-word;
    white-space: normal;
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
  div {
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  .title-h{
    @apply text-[40px] leading-[50px];
  }
  .title-h-en{
    @apply h-auto;
  }
  @screen sm {
    @keyframes bounce {
      50% {
        transform: translateY(72%);
      }
    }
    .div-bg {
      background-size: 750px 500px;
    }
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
