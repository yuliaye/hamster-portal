<template>
  <div class="container max-w-screen-xl mx-auto my-20 main-margin">
    <!-- <div class="mb-10 logo">
      <img :src="getImageURL(`logo-${$i18n.locale}.png`)" class="h-8">
    </div> -->
    <!-- <div class="flex flex-col-reverse gap-4 text-white md:flex-row md:justify-between"> -->
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[64px] gap-[8px]">
      <div class="row-start-1 leading-8">
        <div class="mb-4">
          <nuxt-link to="/" target="_blank">
            <img class="h-[32px]" src="~/assets/images/header.png">
          </nuxt-link>
        </div>
        <div class="font-family-style">{{ $t("footer.email") }}: hamster@hamsternet.io</div>
        <div class="mb-8 font-family-style">{{ $t("footer.address") }}: {{ $t("footer.addressValue") }}</div>
        <div class="flex">
          <!-- <img class="h-[24px] mr-[20px]" src="~/assets/images/wechat.png">
          <img class="h-[24px] mr-[20px]" src="~/assets/images/weibo.png"> -->
          <nuxt-link target='_blank' to='https://github.com/hamster-shared'><img class="h-[24px] mr-[20px]"
              src="~/assets/images/github.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://twitter.com/Hamsternetio'><img class="h-[24px] mr-[20px]"
              src="~/assets/images/twitter.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://discord.gg/MrJWxRwXpb'><img class="h-[24px] mr-[20px]"
              src="~/assets/images/discord.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://medium.com/@Hamsternetio'><img class="h-[24px] mr-[20px]"
              src="~/assets/images/medium.png"></nuxt-link>

        </div>
      </div>
      <div class="flex gap-20 mt-8 sm:justify-start lg:mt-0 lg:justify-end">
        <div>
          <!-- <div class="leading-8 text-white">{{ $t("footer.resource") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub1") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub2") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub3") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub4") }}</div> -->
          <div class="leading-8 text-white font-site-links">{{ $t("footer.siteLinks") }}</div>
          <div class="leading-8 text-[#BABABA] cursor-pointer font-family-style" @click="skipNewUrl('about')">{{ $t("footer.about") }}
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
          <!-- <div class="leading-8 text-white font-family-style">{{ $t("footer.parachains") }}</div> -->
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.community") }}</div>
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.grant") }}</div>
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.careers") }}</div>
          <div class="leading-8 text-[#BABABA] cursor-pointer font-family-style" @click="skipNewUrl('news')">{{ $t("footer.news") }}
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
        </div>
        <div class="mt-[32px]">
          <!-- <div class="leading-8 text-white">{{ $t("footer.other") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub1") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub2") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub3") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub4") }}</div> -->
          <div class="leading-8 text-[#BABABA] cursor-pointer font-family-style" @click="skipNewUrl('docs')">{{ $t("footer.docs") }}
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
          <div class="leading-8 text-[#BABABA] cursor-pointer font-family-style" @click="skipNewUrl('github')">{{ $t("footer.github") }}
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.mediaAssets") }}
          </div>
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.imprint") }}</div>
          <div class="leading-8 text-[#BABABA] font-family-style">{{ $t("footer.privacy") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getImageURL } = useAssets()

const skipNewUrl = (val) => {
  if (val === 'github') {
    window.open('https://github.com/hamster-shared')
  } else if (val === 'about') {
    window.open('https://hamsternet.io/company')
  } else if (val === 'news') {
    window.open('https://medium.com/@Hamsternetio')
  } else {
    window.open('https://hamsternet.io/docs/')
  }
}

</script>

<style scoped>
  .font-site-links{
    font-family: 'Open Sans' !important;
    font-weight: 700;
  }
  .font-family-style {
    font-family: 'Open Sans' !important;
    font-weight: 400;
  }
  .footer-sub {
    @apply text-[#807D7C] leading-8;
  }
</style>