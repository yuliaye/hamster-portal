<template>
  <div class="container mx-auto my-20">
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-[54px] gap-[8px]">
      <div>
        <img class="h-[32px]" src="~/assets/images/header.png">
        <span class="inline-block text-base md:mr-20 mt-7 mb-9">One-Stop infrastructure, 
          <br>
          development, operation and maintenance service platform for projects in Web3.0</span>
        <img class="h-[75px]" src="~/assets/images/web3_foundation.png" />
      </div>

      <div class="flex justify-between md:px-16">
        <div class="flex flex-col text-base">
          <span class="inline-block mb-5 font-bold">About</span>
          <span>Grant</span>
          <span class="inline-block my-5">Careers</span>
          <span>Roadmap</span>
        </div>
        <div class="flex flex-col text-base">
          <span class="inline-block mb-5 font-bold">Docs</span>
          <span class="inline-block mb-5">Github</span>
          <span>News</span>
        </div>
      </div>

      <div class="flex flex-col md:justify-self-end">
        <span class="inline-block mb-5 text-2xl font-bold">Hamster Ltd.</span>
        <span class="text-base">Harbour Plaza, 103 South Church Street
          <br>
          Grand Cayman, Cayman Islands
        </span>
        <span class="inline-block my-5 text-base">+4917647082974</span>
        <span class="text-base">Email: hamster@hamsternet.io</span>
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
    window.open('https://hamsternet.medium.com')
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