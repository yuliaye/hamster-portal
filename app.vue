<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup>
  import { watch } from "vue"

  const localeCookie = useCookie("locale")
  const { locale, availableLocales } = useI18n()

  // Set locale based on Cookie
  if (localeCookie && availableLocales.includes(localeCookie.value)) {
    locale.value = localeCookie.value
  }

  // Watch locale and update cookie
  watch(locale, (newLocaleValue) => {
    localeCookie.value = newLocaleValue
  })
</script>
