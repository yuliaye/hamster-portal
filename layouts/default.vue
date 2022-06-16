<template>
  <div class="text-white">
    <Head>
      <Title>{{ $t('meta.title') }}</Title>
      <Meta name="description" :content="$t('meta.description')" />
      <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <Link rel="shortcut icon" type="image/png" :href="getImageURL('logo.png')" />
    </Head>
    <Header />
    <div class="container max-w-screen-xl mx-auto">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import Header from "./-components/header.vue"
  import Footer from "./-components/footer.vue"
  const { getImageURL } = useAssets()
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
    @apply sm:mt-[160px] mt-[120px] px-[6%];
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
</style>