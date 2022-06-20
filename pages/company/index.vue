<template>
  <div class="main-margin">
    <div class="flex justify-center items-center h-[70px] sm:h-[200px] md:h-[270px] lg:h-[390px] xl:h-[500px]">
      <div class="text-center font-bold text-[22px] md:text-[26px] lg:text-[36px] xl:text-[45px] leading-[30px] md:leading-[50px] w-[200px] lg:w-[350px] sm:-mt-[110px] md:-mt-[130px]">About hamsternet.io</div>
    </div>
    <div class="area-title !mt-[50px] md:!mt-[120px]">{{ $t("header.menu7-sub2") }}</div>
    <div class="border-color2 mt-[50px]">
      <div class="bg-[#141212] rounded-[16px]">
        <div class="box-bg rounded-[16px] grid md:grid-cols-2 xl:gap-[40px] gap-[8px] p-[20px] xl:p-[50px]">
          <div class="img-center">
            <img src="~/assets/images/company-profile.png">
          </div>
          <div class="flex items-center">
            <div class="text-[#807D7C]">
              <div v-for="profileId in [1, 2, 3]" :key="profileId">{{ $t(`company.companyProfile${profileId}`) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area-title md:!mt-[120px] !mt-[50px]">{{ $t("company.companyAdvantage") }}</div>
    <div class="mt-[16px] text-[#807D7C] text-[14px] leading-[21px] text-left md:text-center md:px-16">
      <div v-for="advantageId in [1, 2, 3]" :key="advantageId">{{ $t(`company.advantage${advantageId}`) }}</div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[50px]">
      <div class="flex flex-col bg-[#2E2A28] rounded-[16px] p-[20px] xl:p-[30px]" v-for="subId in [1, 2, 3, 4, 5, 6]" :key="subId">
        <div class="img-center py-[18px]">
          <img class="rounded-full w-[128px]" :src="getImageURL(`advantage-sub-img${subId}.png`)">
        </div>
        <div class="font-bold text-base leading-[19px] text-center mb-[16px]">{{ $t(`company.advantageSub${subId}`) }}</div>
        <div class="area-desc overflow-y-auto">{{ $t(`company.advantageSubDesc${subId}`) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const { getImageURL } = useAssets()
</script>