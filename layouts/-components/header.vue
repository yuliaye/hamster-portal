<template>
  <div class="fixed inset-x-0 top-0 z-10 bg-opacity-50" :class="{ 'hidden': scrollDown === true },{'bg-black': topBgShow === true}">
    <div class="m-auto">
      <div class="py-4 mx-4 xl:mx-8 xxl:mx-16">
        <div class="flex flex-row items-center justify-between text-white">
          <div class="logo">
            <nuxt-link to="/" target="_blank">
            <img class="h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>
          
          <div class="flex flex-row">
            <img @click="showPhoneMenu = true;" v-if="isPhone === true" class="h-[24px]" src="~/assets/images/menu.png">
            <div v-else class="menu sm:pr-8">
              <nuxt-link
                v-for="link in navLinks"
                :key="link.path"
                :class="{'menu-active' : `/${curMenu}` === link.path}"
                class="px-[16px]"
                :to="link.path"
                target="_blank"
              >
                {{ link.title }}
              </nuxt-link>
              <VDropdown :class="{'menu-active' : (curMenu === 'news' || curMenu === 'company')}" v-model:shown="drodownShow7" auto-hide :triggers="[]" :skidding="-2" :distance="10" popper-class="locale-dropdown">
                <div class="relative cursor-pointer select-none" @click="drodownShow7 = !drodownShow7">
                  <div class="px-[16px] h-[32px] flex justify-center items-center">
                    <div> {{ $t('header.menu7') }}</div>
                    <img v-if="curMenu === 'news' || curMenu === 'company'" src="~/assets/images/menu-down-hover.png" class="w-4 ml-2" :class="{'rotate-dropdown-icon': drodownShow7}" />
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showPhoneMenu" :class="{ 'hidden': scrollDown === true }" class="inset-x-0 top-0 fixed z-[300] p-[20px] bg-black">
    <div class="flex justify-between">
      <div class="flex items-center" @click="showPhoneMenu = false;"><img class="h-[24px] mr-2" src="~/assets/images/menu-close.png"/>close</div>
      <img class="h-[24px]" src="~/assets/images/header.png">
    </div>
    <div class="my-[20px]">
      <nuxt-link to="/" target="_blank" >
        <div :class="{'menu-active' : curMenu === ''}" class="phone-menu ml-[25px]">{{ $t('header.menu1') }}</div>
      </nuxt-link>
      <nuxt-link v-for="link in navLinks" :key="link.path" :to="link.path" target="_blank">
        <div :class="{'menu-active' : `/${curMenu}` === link.path}" class="phone-menu ml-[25px]">{{ link.title }}</div>
      </nuxt-link>
      <div :class="{'menu-active' : (curMenu === 'news' || curMenu === 'company')}" class="flex items-center phone-menu"><img class="h-[20px] mr-[5px]" src="~/assets/images/menu-sub.png"/>{{ $t('header.menu7') }}</div>
      <div class="ml-[25px] menu-color">
        <nuxt-link to="/news" target="_blank">
          <label :class="{'menu-active' : curMenu === 'news'}">{{ $t('header.menu7-sub1') }}</label>
        </nuxt-link>
        <nuxt-link to="/company" target="_blank">
          <label :class="{'menu-active' : curMenu === 'company'}" class="ml-6">{{ $t('header.menu7-sub2') }}</label>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

  const route = useRoute();
  const { t, locale, availableLocales } = useI18n()
  const localeOptions = availableLocales.map((lang) => {
    const name = t("general.langName", null, { locale: lang })
    return { name, value: lang }
  })

  const navLinks = computed(() => [
    { title: t('header.faucet'), path: "/faucet" },
    { title: t('header.stake'), path: "/stake" },
    { title: t('header.cross_chain'), path: "/cross_chain" },
    { title: t('header.docs'), path: "https://hamsternet.io/gitbook/" },
  ])

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
  const curMenu = ref('')
  const curSubMenu = ref()
  const scrollDown = ref(false)
  const beforeTopVal = ref(0)
  const topBgShow = ref(false)
  const isPhone = ref(false);
  const showPhoneMenu = ref(false);

  
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

    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
      isPhone.value = true;
    }

    curMenu.value = route.path.substring(1);
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
  .phone-menu{
    @apply text-[20px] my-[20px] text-[#807D7C];
  }
  .menu-color{
    @apply text-[#807D7C];
  }
</style>
