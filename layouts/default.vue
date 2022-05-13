<template>
  <div class="text-white">
    <!-- <Head>
      <Title>{{ $t('meta.title') }}</Title>
      <Meta name="description" :content="$t('meta.description')" />
      <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <Link rel="shortcut icon" type="image/png" :href="getImageURL('favicon.png')" />
    </Head> -->
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
    padding: 0 6%;
  }
</style>