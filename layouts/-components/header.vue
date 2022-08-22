<template>
  <div class="inset-x-0 top-0  bg-opacity-50 fixed z-10" :class="{ 'hidden': scrollDown === true },{'bg-black': topBgShow === true}">
    <div class="m-auto">
      <div class="py-4 mx-4 xl:mx-8 xxl:mx-16">
        <div class="flex flex-row items-center justify-between text-white">
          <div class="logo">
            <nuxt-link to="/" target="_blank">
            <img class="h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>
          <div class="flex flex-row">
            <div v-for="menuId in [7]" :key="menuId" :class="{'menu-active' : curMenuId == menuId}" class="menu sm:pr-8" @click="setMenuId(menuId)">
              <nuxt-link class="px-[16px]" to="/faucet" target="_blank">Faucet</nuxt-link>
              <VDropdown v-model:shown="drodownShow7" auto-hide :triggers="[]" :skidding="-2" :distance="10" popper-class="locale-dropdown">
                <div class="relative cursor-pointer select-none" @click="drodownShow7 = !drodownShow7">
                  <div class="px-[16px] h-[32px] flex justify-center items-center">
                    <div> {{ $t(`header.menu${menuId}`) }}</div>
                    <img v-if="menuId === curMenuId" src="~/assets/images/menu-down-hover.png" class="w-4 ml-2" :class="{'rotate-dropdown-icon': drodownShow7}" />
                    <img v-else src="~/assets/images/menu-down.png" class="w-4 ml-2" :class="{'rotate-dropdown-icon': drodownShow7}" />
                  </div>
                </div>
                <template #popper>
                  <div class="to-top" :class="[{'top-active' : curSubMenu === 'news'},{'top-focus' : focusVal === 'news'}]"></div>
                  <div class="h-[80px] drop-bg text-white cursor-pointer">
                    <div v-for="option in aboutUsOptions" :key="option.value" class="choose-locale px-4 text-center leading-[40px] hover:bg-[#A05E1C] hover:text-white" :class="{'choose-locale-active': curSubMenu == option.value}" @mouseover="focusVal = option.value" @mouseleave="focusVal=false" @click="curSubMenu = option.value; drodownShow7 = false;focusVal=false">
                      <nuxt-link :to="`/${option.value}`" target="_blank">
                      <div>{{ option.label}}</div>
                      </nuxt-link>
                    </div>
                  </div>
                </template>
              </VDropdown>
            </div>
            <VDropdown class="hidden" v-model:shown="drodownShow" auto-hide :triggers="[]" :skidding="-2" :distance="10" popper-class="locale-dropdown">
              <div class="relative cursor-pointer select-none" @click="drodownShow = !drodownShow">
                <div class="px-[16px] h-[32px] flex justify-center items-center border border-solid box-border rounded-[71px] hover:bg-[#0c0e2f]">
                  <div>{{ selectedLocale.name }}</div>
                  <img src="~/assets/images/drop-down.png" class="w-4 h-4 ml-2" :class="{'rotate-dropdown-icon': drodownShow}">
                </div>
              </div>
              <template #popper>
                <div class="to-top" :class="[{'top-active' : selectedLocale.value == 'en'},{'top-focus' : focusVal == 'en'}]"></div>
                <div class="w-[90px] h-[80px] drop-bg text-white cursor-pointer">
                  <div v-for="option in localeOptions" :key="option.value" class="choose-locale text-center leading-[40px] hover:bg-[#A05E1C] hover:text-white" :class="{'choose-locale-active': selectedLocale.value == option.value}" @mouseover="focusVal = option.value" @mouseleave="focusVal=false" @click="locale = option.value; drodownShow = false;focusVal=false">
                    {{ option.label || option.name }}
                  </div>
                </div>
              </template>
            </VDropdown>
            <!-- <nuxt-link to="/download" target="_blank">
              <div class="px-[16px] h-[32px] flex justify-center items-center rounded-[4px] border border-solid hover:bg-[#cc7219]">
                <img src="~/assets/images/download.png" class="w-4 h-4 mr-2">
                {{ $t('header.download') }}
              </div>
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

  const { t, locale, availableLocales } = useI18n()
  const localeOptions = availableLocales.map((lang) => {
    const name = t("general.langName", null, { locale: lang })
    return { name, value: lang }
  })

  const drodownShow = ref(false)
  const drodownShow7 = ref(false)
  const selectedLocale = computed(() => {
    return localeOptions.find(option => option.value === locale.value)
  })
  const aboutUsOptions = computed(() => {
    return [
      { label: t('header.menu7-sub1'), value: 'news' },
      { label: t('header.menu7-sub2'), value: 'company' }
    ]
  })

const focusVal = ref()
  const topVal = ref(0)
  const curMenuId = ref(7)
  const curSubMenu = ref()
  const scrollDown = ref(false)
  const beforeTopVal = ref(0)
  const topBgShow = ref(false)

  function setMenuId(menuId) {
    curMenuId.value = menuId;
}
  
  function handleScroll() {
    topVal.value = document.body.scrollTop || document.documentElement.scrollTop
    if (beforeTopVal.value < topVal.value) { // 向下滚动  
      scrollDown.value = true;
    } else { //向上滚动
      scrollDown.value = false;
    }
    beforeTopVal.value = topVal.value
    setTopBgValue();
  }
  function setTopBgValue() {
    if (topVal.value > 0) {
      topBgShow.value = true
    } else {
      topBgShow.value = false
    }
  }
  onMounted(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll();
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
  })
</script>

<style>
  .choose-locale-active {
    @apply relative text-[#807D7C] bg-[#2E2A28];
  }

  .locale-dropdown {
    outline: none;

    .v-popper__arrow-container {
      @apply hidden;
    }

    .v-popper__inner {
      background: unset;
      border: unset;
      border-radius: unset;
      box-shadow: unset;
    }
  }

  .rotate-dropdown-icon {
    @apply rotate-180;
  }
  .drop-bg {
    background: rgba(255, 255, 255, 0.30141);
    border-radius: 4px;
  }
  .menu {
    @apply cursor-pointer text-[#807D7C] leading-[32px] flex;
  }
  .menu-active {
    @apply text-white !important;
  }
  .to-top {
    width: 0;
    height: 0;
    border-bottom: 8px solid rgba(255, 255, 255, 0.30141);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    margin-left: 44%;
  }
  .top-active {
    border-bottom-color: #2e2a28;
  }
  .top-focus {
    border-bottom-color: #a05e1c;
  }
</style>
