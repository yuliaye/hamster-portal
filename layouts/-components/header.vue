<template>
  <div class="container mx-auto">
    <div class="mx-4 my-8 2xl:mx-16 xl:mx-8">
      <div class="flex flex-row items-center justify-between text-white">
        <div class="logo">
          <img :src="getImageURL(`logo-${locale}.png`)" class="h-6">
        </div>
        <VDropdown
          v-model:shown="drodownShow"
          auto-hide
          :triggers="[]"
          :skidding="-22"
          :distance="20"
          popper-class="locale-dropdown"
        >
          <div class="relative cursor-pointer select-none" @click="drodownShow = !drodownShow">
            <div class="w-[100px] h-[40px] flex justify-center items-center border border-solid box-border hover:bg-[#0c0e2f]">
              <div>{{ selectedLocale.name }}</div>
              <img src="~/assets/images/vector-down.svg" class="w-4 ml-2" :class="{'rotate-dropdown-icon': drodownShow}">
            </div>
          </div>
          <template #popper>
            <div class="w-36 py-4 bg-[#161838] cursor-pointer">
              <div
                v-for="option in localeOptions"
                :key="option.value"
                class="choose-locale py-2 pl-8 text-base text-[#919AAD] hover:bg-[#0c0e2f] hover:text-white"
                :class="{'choose-locale-active': selectedLocale.value == option.value}"
                @click="locale = option.value; drodownShow = false"
              >
                {{ option.label || option.name }}
              </div>
            </div>
          </template>
        </VDropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue"

  const { getImageURL } = useAssets()

  const { t, locale, availableLocales } = useI18n()
  const localeOptions = availableLocales.map((lang) => {
    const name = t("general.langName", null, { locale: lang })
    return { name, value: lang }
  })

  const drodownShow = ref(false)
  const selectedLocale = computed(() => {
    return localeOptions.find(option => option.value === locale.value)
  })

</script>

<style>
  .choose-locale-active {
    @apply relative;

    &:before {
      @apply content-[''] w-[4px] h-[4px] bg-white absolute left-4 top-[1.1rem];
    }
  }

  .locale-dropdown {
    outline: none;

    .v-popper__arrow-container{
      @apply hidden;
    }

    .v-popper__inner {
      background: unset;
      border: unset;
      border-radius: unset;
      box-shadow: unset;
    }
  }

  .rotate-dropdown-icon{
    @apply rotate-180
  }
</style>
