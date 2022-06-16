<template>
  <div  class="top-bg main-margin">
    <div class="flex justify-center items-center h-[500px]">
      <div class="text-center font-bold text-[72px] w-[550px]">NEWS hamsternet.io</div>
    </div>
    <div class="grid grid-cols-3 gap-[16px]">
      <div class="col-span-2 bg-[#2E2A28] p-[32px] rounded-[16px]">
        <div>
          <nuxt-link :to="{path:'/'}">{{ $t("header.menu1") }}</nuxt-link> > 
          <nuxt-link :to="{path:'/news'}">{{ $t("header.menu7-sub1") }}</nuxt-link> > 
          <label class="text-[#807D7C]">{{ $t("news.newsDetails") }}</label>
        </div>
        <div class="text-[32px] font-bold mt-[32px]">{{ $t(`home.sub7Title${newsId}`) }}</div>
        <div class="mt-[16px]">
          <label class="text-[#CC7219]">{{ $t("news.newsSources") }}：Hamster </label>
          <label class="text-[#807D7C] ml-[16px]">{{ $t("news.releaseDate") }}：2022-06-05</label>
        </div>
        <div class="mt-[24px] text-[14px]">
          <div>{{ $t(`home.sub7Desc${newsId}`) }}</div>
          <img class="rounded-[16px] w-full mt-[16px]" :src="getImageURL(`area7-img-detail${newsId}.png`)">
          <div class="mt-[16px]" v-for="subId in newsSubList" :key="subId">{{ $t(`news.newsContent${newsId}-sub${subId}`) }}</div>
        </div>
      </div>
      <div class="">
        <div class="text-[24px] font-bold pl-[12px] border-[#CC7219] border-l-[4px] mb-[24px]">{{ $t("news.newsRecommend") }}</div>
        <div class="bg-[#2E2A28] px-[16px] py-[32px] rounded-[16px]">
          <div v-for="(newId,index) in [1, 2, 3, 4]" :key="newId" :class="{'hidden' : Number(newId) === Number(newsId)}">
            <nuxt-link :to="{path:`/news/${newId}`}" target="_blank">
              <div class="grid grid-cols-2 gap-[16px]" :class="{'mb-[24px]' : index < 3},{'mt-[24px]' : index > 1}">
                <div>
                  <img class="rounded-[8px] w-full" :src="getImageURL(`area7-img-detail${newId}.png`)" />
                </div>
                <div class="text-[14px]">
                  <div class="font-bold !leading-[16px] text-ellipsis text-line-3">{{ $t(`home.sub7Title${newId}`) }}</div>
                  <div class="text-[#807D7C] mt-[16px]">{{ $t(`home.sub7Date${newId}`) }}</div>
                </div>
              </div>
            </nuxt-link>
            <div class="border-t-[1px] border-[#504B48]" :class="{'hidden' : index === 3}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const { getImageURL } = useAssets()

  const route = useRoute();
  const newsId = ref(0);
  const newsSubList = ref([]);
  const newsSubTotal = ref([0,6,3,6,9])

  onMounted(async () => {
    newsId.value = route.params.id;
    for (let i = 1; i <= newsSubTotal.value[newsId.value]; i++) {
      newsSubList.value.push(i)
    }
    
  });

</script>
<style scope>
.top-bg{
  background: url('~/assets/images/news-details-top.png') no-repeat;
  background-origin: border-box;
  background-size: contain;
  background-position: 100% 10%;
}
</style>