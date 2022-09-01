<template>
  <div class="download-top-bg main-margin">
    <div class="bg-div-style"></div>
    <div class="flex justify-center items-center text-center sm:text-[20px] -mt-[30px]">
      <div @click="setType('client')" :class="[activeType === 'client'?'bg-[#CC731A] text-[#FFFFFF]':'bg-[#FFFFFF] text-[#807D7C]']" class="rounded-l-[8px] download-tab-title">{{ $t('download.client') }}</div>
      <div @click="setType('provider')" :class="[activeType === 'provider'?'bg-[#CC731A] text-[#FFFFFF]':'bg-[#FFFFFF] text-[#807D7C]']" class="rounded-r-[8px] download-tab-title">{{ $t('download.provider') }}</div>
    </div>
    <div class="mt-[50px] lg:mx-[100px]">
      <Tabs v-model:activeKey="activeKey">
        <TabPane v-for="i in 3" :key="i" :disabled="disableTab(i)">
          <template #tab>
            <span class="flex">
              <img v-if="activeKey===i" :src="getImageURL(`tabs-active${i}.svg`)" class="w-4 mr-2">
              <img v-else :src="getImageURL(`tabs${i}.svg`)" class="w-4 mr-2">
              {{ $t(`download.tabTitle${i}`) }}
            </span>
          </template>
          <div class="md:grid grid-cols-3 gap-[48px] lg:mx-[20px]">
            <div class="mt-[50px]">
              <div class="text-[24px]">{{ $t(`download.tabSubTitle${i}`) }}</div>
              <div class="my-[20px]" v-if="activeType === 'client'">{{ $t(`download.${activeType}TabContent${i}`) }}</div>
              <div class="my-[20px]" v-if="activeType === 'provider'">{{ $t(`download.${activeType}TabContent`) }}</div>
              <div @click="download(i)" class="group px-[16px] h-[40px] w-[160px] flex justify-center items-center rounded-[8px] bg-white text-[#807D7C] cursor-pointer hover:text-white  hover:bg-[#cc7219]">
                <img :src="getImageURL(`tabs-btn${i}.svg`)" class="w-4 mr-2 group-hover:hidden">
                <img :src="getImageURL(`tabs${i}.svg`)" class="w-4 mr-2 hidden group-hover:inline">
                {{ $t('header.download') }}
              </div>
              <div v-if="activeType === 'client'" class="text-[#807D7C] mt-[10px]">{{ $t('download.versions') }}</div>
            </div>
            <div class="col-span-2 mt-[50px]">
              <img :src="getImageURL(`${activeType}-pic.png`)" class="w-full">
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  const { getImageURL } = useAssets()
  const { hamsterClientPackage, hamsterProviderPackage } = useRuntimeConfig()

  useHead({
    title: "Download Hasmter"
  })

  definePageMeta({
    layout: "no-ssr",
  })

  const activeType = ref('client');
  const activeKey = ref(1);

  function setType(val) {
    activeType.value = val;
    activeKey.value = 1;
  }

  function download(key) {
    if (activeType.value === 'client') {
      if (key === 1) {
        window.location.href = hamsterClientPackage.windowsLink;
      } else if (key === 2) {
        window.location.href = hamsterClientPackage.macLink;
      } else {
        window.location.href = hamsterClientPackage.linuxLink;
      }
    } else {
      if (key === 1) {
        window.location.href = hamsterProviderPackage.windowsLink;
      } else if (key === 2) {
        window.location.href = hamsterProviderPackage.macLink;
      } else {
        window.location.href = hamsterProviderPackage.linuxLink;
      }
    }
  }

  function disableTab(key) {
    // Disable client linux download
    return activeType.value === 'client' && key == 3;
  }
</script>
<style>
.download-tab-title{
  @apply w-[300px] h-[60px] leading-[60px] cursor-pointer;
}
.ant-tabs{
  @apply !text-white;
}
.ant-tabs-nav-list{
  @apply w-full;
}
.ant-tabs-tab{
  @apply justify-center w-1/3;
}
.ant-tabs-tab:hover{
  @apply !text-[#CC731A]
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
  @apply !text-[#CC731A]
}
.ant-tabs-tab.ant-tabs-tab-disabled {
  @apply !text-gray-500;
}
.ant-tabs-ink-bar{
  @apply !bg-[#CC731A]
}
</style>
