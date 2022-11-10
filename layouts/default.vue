<template>
  <div :class="[showContent===true?'inline':'hidden']" class="container mx-auto text-white">
    <Head>
      <Title>{{ $t('meta.title') }}</Title>
      <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <Link rel="shortcut icon" type="image/png" :href="getImageURL('logo.png')" />
    </Head>
    <Header  />
    <div class="container max-w-screen-xl mx-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import { onMounted } from "vue"
  import Header from "./-components/header.vue"
  import Footer from "./-components/footer.vue"

  const { getImageURL } = useAssets()
  const { t } = useI18n()

  const showContent = ref(false)

  // For metas
  const { host } = useRequestHeaders()
  const websiteBaseUrl = host ? (host.startsWith("localhost") ? "http://" : "https://") + host : ""
  const metaImage = websiteBaseUrl + getImageURL('search-show.jpg')

  useHead({
    meta: [
      { name: 'description', itemprop: 'description', content: t('meta.introduced') },
      { itemprop: 'image', content: metaImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Hamsternetio' },
      { name: 'twitter:creator', content: '@Hamsternetio' },
      { property: 'og:description', content: t('meta.introduced') },
      { property: 'og:url', content: 'https://hamsternet.io/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: metaImage },
      { property: 'og:image:alt', content: t('meta.introduced') },
      { property: 'og:locale', content: 'en' },
      { property: 'og:site_name', content: 'Hamster' },
      { property: 'og:title', content: 'Hamster' },
    ]
  })

  onMounted(() => {
    showContent.value = true;
  })
</script>

<style>
  body {
    @apply text-[14px];
    background-color: #141212;
    &::-webkit-scrollbar {
      width: 0;
    }
    
  }
  .main-margin {
    @apply px-[6%];
  }
  .text-ellipsis {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .text-line-2{
    -webkit-line-clamp: 2;
  }
  .text-line-3{
    -webkit-line-clamp: 3;
  }
  .news-top-bg{
    background: url('~/assets/images/news-top.png') no-repeat top;
    background-size: contain;
  }
  .news-detail-top-bg{
    background: url('~/assets/images/news-details-top.png') no-repeat top;
    background-size: contain;
  }
  .company-top-bg{
    background: url('~/assets/images/company-top-bg.png') no-repeat top;
    background-size: contain;
  }
  .download-top-bg{
    background: url('~/assets/images/download-top.png') no-repeat top;
    background-size: contain;
  }
  .bg-div-style{
    @apply flex justify-center items-center h-[180px] sm:h-[280px] md:h-[340px] lg:h-[480px] xl:h-[600px];
  }
  .bg-div-text-style{
    @apply text-center font-bold text-[22px] md:text-[26px] lg:text-[36px] xl:text-[45px] leading-[30px] md:leading-[50px] w-[200px] lg:w-[350px] mt-[80px] sm:mt-0;
  }
  .border-color2 {
    box-sizing: border-box;
    padding: 1px;
    border-radius: 16px;
    background-image: -webkit-linear-gradient(to bottom, #bda48a 0%, #141212 90%);
    background-image: -moz-linear-gradient(to bottom, #bda48a 0%, #141212 90%);
    background-image: linear-gradient(to bottom, #bda48a 0%, #141212 90%);
  }
  .img-center {
    @apply flex items-center justify-center;
  }
  .area-title {
    @apply font-bold text-[40px] leading-[47px] mt-[164px] text-center mb-[16px];
  }
</style>
<style lang="less">
  /* about antdv's style*/
  /*  message error and success*/
  .ant-message-custom-content {
    .anticon{
      vertical-align: text-bottom;
    }
  }
</style>
