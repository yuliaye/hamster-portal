<template>
  <div class="container mx-auto my-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-[54px]">
      <div>
        <img class="h-[20px] md:h-[32px]" src="~/assets/images/header.png">
        <span class="inline-block mt-4 mb-8 text-sm md:text-base md:mr-20 md:mt-7 md:mb-10">
          One-Stop infrastructure,
          <br>
          development, operation and maintenance service platform for projects in Web3.0
        </span>
        <div class="flex items-center">
          <img :src="getImageURL('aptos-grant.png')" class="h-[64px] md:h-[67px] mr-12"/>
          <img class="h-[64px] md:h-[75px]" src="~/assets/images/web3_foundation.png" />
        </div>
      </div>

      <div class="flex md:justify-between md:px-16">
        <div class="flex flex-col text-base">
          <span class="inline-block mb-5 font-bold cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('about')">About</span>
          <span class="md:hover:text-[#27FFB8] cursor-pointer">Grant</span>
          <span class="inline-block my-5 md:hover:text-[#27FFB8] cursor-pointer">Careers</span>
          <span class="md:hover:text-[#27FFB8] cursor-pointer">Roadmap</span>
        </div>
        <div class="flex flex-col text-base ml-[40px] md:ml-0">
          <div class="inline-block mb-5 font-bold cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('docs')">
            Docs
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
          <div class="inline-block mb-5 cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('github')">
            Github
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
          <div class="cursor-pointer md:hover:text-[#27FFB8]" @click="skipNewUrl('news')">
            News
            <img class="w-[18px] inline-block" :src="getImageURL('transmit.svg')" />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:justify-self-end">
        <span class="inline-block mb-5 text-base font-bold md:text-2xl">Hamster Ltd.</span>
        <span class="text-sm md:text-base">
          Harbour Plaza, 103 South Church Street Grand Cayman, Cayman Islands
        </span>
        <span class="inline-block my-5 text-sm md:text-base">+49 17647 082974</span>
        <span class="text-sm md:text-base">Email: hamster@hamsternet.io</span>
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
    // window.open('/company')
  } else if (val === 'news') {
    window.open('https://hamsternet.medium.com/')
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
