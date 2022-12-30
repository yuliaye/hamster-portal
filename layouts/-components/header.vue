<template>
  <div class="fixed inset-x-0 top-0 z-10 bg-opacity-50"
    :class="{ 'hidden': scrollDown === true },{'bg-black': topBgShow === true}">
    <div class="m-auto">
      <div class="container py-4 mx-6 md:mx-auto">
        <div class="relative flex flex-row items-center justify-between text-center text-white">
          <div class="absolute logo">
            <nuxt-link to="/" target="_blank">
              <img class="h-[16px] md:h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center md:ml-auto">
            <img @click="showPhoneMenu = true;" v-if="isPhone === true" class="h-[16px] ml-[82vw]"
              src="~/assets/images/head-menu-down.svg">
            <div v-else class="menu">
              <nuxt-link to="/" target="_blank">
                <div class="px-[16px]" :class="{'menu-active' : curMenu == ''}">Home</div>
              </nuxt-link>
              <nuxt-link v-for="link in navLinks" :key="link.path"
                :class="{'menu-active' : `/${curMenu}` === link.path}" class="px-[16px]" :to="link.path"
                target="_blank">
                {{ link.title }}
              </nuxt-link>
            </div>
            <VDropdown class="hidden" v-model:shown="drodownShow" auto-hide :triggers="[]" :skidding="-2" :distance="10"
              popper-class="locale-dropdown">
              <div class="relative cursor-pointer select-none" @click="drodownShow = !drodownShow">
                <div
                  class="px-[16px] h-[32px] flex justify-center items-center border border-solid box-border rounded-[71px] hover:bg-[#0c0e2f]">
                  <div>{{ selectedLocale.name }}</div>
                  <img src="~/assets/images/drop-down.png" class="w-4 h-4 ml-2"
                    :class="{'rotate-dropdown-icon': drodownShow}">
                </div>
              </div>
              <template #popper>
                <div class="to-top"
                  :class="[{'top-active' : selectedLocale.value == 'en'},{'top-focus' : focusVal == 'en'}]"></div>
                <div class="w-[90px] h-[80px] drop-bg text-white cursor-pointer">
                  <div v-for="option in localeOptions" :key="option.value"
                    class="choose-locale text-center leading-[40px] hover:bg-[#A05E1C] hover:text-white"
                    :class="{'choose-locale-active': selectedLocale.value == option.value}"
                    @mouseover="focusVal = option.value" @mouseleave="focusVal=false"
                    @click="locale = option.value; drodownShow = false;focusVal=false">
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
  <div v-if="showPhoneMenu" :class="{ 'hidden': scrollDown === true }"
    class="inset-x-0 top-0 fixed z-[300] py-4 px-6 bg-black">
    <div class="relative flex justify-start">
      <img class="h-[16px] md:h-[24px]" src="~/assets/images/header.png">
      <div class="absolute right-[-1px] top-0" @click="showPhoneMenu = false;">
        <img class="h-[24px] ml-[36vw]" src="~/assets/images/menu-close.svg" />
      </div>
    </div>
    <div class="my-[20px]">
      <nuxt-link to="/" target="_blank">
        <div :class="{'menu-active' : curMenu === ''}" class="phone-menu">
          <span>{{ $t('header.menu1') }}</span>
          <img src="~/assets/images/chervon-right.svg" />
        </div>
      </nuxt-link>
      <nuxt-link v-for="link in navLinks" :key="link.path" :to="link.path" target="_blank">
        <div :class="{'menu-active' : `/${curMenu}` === link.path}" class="phone-menu">
          <span>{{ link.title }}</span>
          <img src="~/assets/images/chervon-right.svg" />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, defineProps, watch } from "vue"

const props = defineProps({ 
  showHeader: {
    type: Boolean,
    default: true
  },
  showHeaderBg: {
    type: Boolean,
    default: false
  },
})

watch(() => props.showHeader, (newVal)=>{
  if (newVal) { 
    scrollDown.value = false;
  } else{
    scrollDown.value = true;
  }
})
watch(() => props.showHeaderBg, (newVal)=>{
  if (newVal) {
    topBgShow.value = true
  } else{
    topBgShow.value = false
  }
})

const { getImageURL } = useAssets()
const route = useRoute();
const { t, locale, availableLocales } = useI18n()
const localeOptions = availableLocales.map((lang) => {
  const name = t("general.langName", null, { locale: lang })
  return { name, value: lang }
})

const navLinks = computed(() => [
  { title: t('header.faucet'), path: "/faucet" },
  { title: t('header.dashboard'), path: '/dashboard' },
  // { title: t('header.stake'), path: "/stake" },
  // { title: t('header.cross_chain'), path: "/cross_chain" },
  { title: t('header.docs'), path: "https://hamsternet.io/docs/" },
  { title: 'News', path: "https://medium.com/@Hamsternetio" },
  { title: 'About', path: "https://hamsternet.io/company" },
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

// Add `is-phone` class to <html> tag
watch(isPhone, (newVal) => {
  if (newVal) {
    document.querySelector("html").classList.add("is-phone")
  }
})

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
  @apply cursor-pointer text-[white] leading-[32px] flex;
}

.menu-active {
  @apply text-white !important;
}

@screen md {
  .menu-active {
    border: 1px solid white;
  }
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

.phone-menu {
  @apply text-base md:text-[20px] my-[20px] flex justify-between items-center;
}

.menu-color {
  @apply text-[#807D7C];
}
</style>
