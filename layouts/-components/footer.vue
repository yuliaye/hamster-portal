<template>
  <div class="container max-w-screen-xl mx-auto my-20 main-margin">
    <!-- <div class="mb-10 logo">
      <img :src="getImageURL(`logo-${$i18n.locale}.png`)" class="h-8">
    </div> -->
    <!-- <div class="flex flex-col-reverse gap-4 text-white md:flex-row md:justify-between"> -->
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[64px] gap-[8px]">
      <div class="leading-8 row-start-1">
        <div class="mb-4">
          <nuxt-link to="/" target="_blank">
          <img class="h-[32px]" src="~/assets/images/header.png">
          </nuxt-link>
        </div>
        <div>{{ $t("footer.email") }}: hamster@hamsternet.io</div>
        <div class="mb-8">{{ $t("footer.address") }}: {{ $t("footer.addressValue") }}</div>
        <div class="flex">
          <!-- <img class="h-[24px] mr-[20px]" src="~/assets/images/wechat.png">
          <img class="h-[24px] mr-[20px]" src="~/assets/images/weibo.png"> -->
          <nuxt-link target='_blank' to='https://github.com/hamster-shared'><img class="h-[24px] mr-[20px]" src="~/assets/images/github.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://twitter.com/Hamsternetio'><img class="h-[24px] mr-[20px]" src="~/assets/images/twitter.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://medium.com/@Hamsternetio'><img class="h-[24px] mr-[20px]" src="~/assets/images/medium.png"></nuxt-link>
          <nuxt-link target='_blank' to='https://discord.gg/MrJWxRwXpb'><img class="h-[24px]" src="~/assets/images/discord.png"></nuxt-link>
          
        </div>
      </div>
      <div class="flex gap-20 sm:justify-start mt-8 lg:mt-0 lg:justify-end">
        <div>
          <div class="text-white leading-8">{{ $t("footer.resource") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub1") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub2") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub3") }}</div>
          <div class="footer-sub">{{ $t("footer.resourceSub4") }}</div>
        </div>
        <div>
          <div class="text-white leading-8">{{ $t("footer.other") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub1") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub2") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub3") }}</div>
          <div class="footer-sub">{{ $t("footer.otherSub4") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { getImageURL } = useAssets()
</script>
<style>
  .footer-sub {
    @apply text-[#807D7C] leading-8;
  }
</style>