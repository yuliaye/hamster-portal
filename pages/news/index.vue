<template>
  <div class="news-top-bg main-margin">
    <div class="bg-div-style">
      <div class="bg-div-text-style">NEWS hamsternet.io</div>
    </div>
    <div class="mt-[47px]">
      <div class="text-[20px] font-bold mb-[24px] cursor-pointer flex justify-between sm:justify-start">
        <label class="text-[#CC7219]">{{ $t("news.companyNews") }}</label>
        <label class="text-[#807D7C] sm:pl-[32px]">{{ $t("news.industryNews") }}</label>
      </div>
      <div class="bg-[#2E2A28] px-[16px] py-[32px] rounded-[16px]">
        <div v-for="(newId,index) in [1, 2, 3, 4]" :key="newId">
          <div class="md:grid grid-cols-5 gap-[48px] group" :class="{'mb-[24px]' : index < 3},{'mt-[24px]' : index > 0}">
            <div class="col-span-2">
              <img class="rounded-[8px] w-full" :src="getImageURL(`area7-img-detail${newId}.png`)" />
            </div>
            <div class="col-span-3">
              <div class="text-[24px] font-bold mt-[16px] leading-[28px] text-[#FFFFFF] group-hover:text-[#CC7219] text-ellipsis text-line-2">{{ $t(`home.sub7Title${newId}`) }}</div>
              <div class="text-[#807D7C] mt-[24px] leading-[20px] h-[60px] text-ellipsis text-line-3">{{ $t(`home.sub7Desc${newId}`) }}</div>
              <div class="text-[#807D7C] mt-[24px] flex justify-between">
                <div>{{ $t(`home.sub7Date${newId}`) }}</div>
                <nuxt-link :to="{path:`/news/${newId}`}" target="_blank">
                  <button class="bg-[#FFFFFF] group-hover:bg-[#CC7219] text-base rounded-[54px] px-[24px] py-[10px] text-[#807D7C] group-hover:text-[#FFFFFF]">{{ $t("news.viewDetails") }}</button>
                </nuxt-link>
              </div>
            </div>
          </div>
          
          <div class="border-t-[1px] border-[#504B48]" :class="{'hidden' : index === 3}"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const { getImageURL } = useAssets()
</script>