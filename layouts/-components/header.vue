<template>
  <div class="fixed inset-x-0 top-0 z-10 bg-opacity-50"
    :class="{ 'hidden': !isMobile && scrollDown, 'bg-black': topBgShow}">
    <div class="m-auto">
      <div class="container py-4 mx-6 md:mx-auto">
        <div class="relative flex flex-row items-center justify-between text-center text-white">
          <div class="absolute logo">
            <nuxt-link to="/">
              <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center md:ml-auto">
            <img @click="showPhoneMenu = true;" v-if="isMobile" class="h-4 ml-[82vw]"
              src="~/assets/images/head-menu-down.svg">
            <div v-else class="menu">
              <VDropdown 
                auto-hide 
                v-model:shown="subMenuDropdownShow"
                :distance="10" 
                placement="bottom-start" 
                popper-class="locale-dropdown"
                :skidding="16"
              >
                <div class="cursor-pointer select-none">
                  <div
                    class="px-4 h-[32px] text-base flex justify-center items-center hover:color-[#27FFB8]"
                    :class="{'menu-dropdown-opened': subMenuDropdownShow}"
                  >
                    <div>Solutions</div>
                    <div class="h-2 ml-2" :class="{'rotate-dropdown-icon': subMenuDropdownShow}">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81261 0.348328L7.05525 5.59097L5.99459 6.65163L0.751953 1.40899L1.81261 0.348328Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9452 5.59096L10.1878 0.348323L11.2485 1.40898L6.00586 6.65162L4.9452 5.59096Z" fill="white"/>
                      </svg>   
                    </div>
                  </div>
                </div>
                <template #popper>
                  <div class="bg-[white] py-4 rounded-[2px] max-w-[400px]">
                    <div class="px-6 py-4">
                      <img src="~/assets/images/development-toolkit.png" class="inline-block w-4 h-4" />
                      <span class="text-base align-middle"> Developer Toolkit</span>
                    </div>
                    <div class="px-6 py-4">
                      <img src="~/assets/images/node-service.png" class="inline-block w-4 h-4" />
                      <span class="text-base align-middle"> Node Service</span>
                    </div>
                    <!-- <div class="px-6 py-4">
                      <img src="~/assets/images/decentralized-computing.png" class="inline-block w-4 h-4" />
                      <span class="text-base align-middle"> Decentralized Computing Power Network</span>
                    </div> -->
                  </div>
                </template>
              </VDropdown>
              <div>
                <nuxt-link v-for="link in navLinks" :key="link.path"
                  :class="{'menu-active' : `/${curMenu}` === link.path}" class="mx-4 hover:text-[#27FFB8]" :to="link.path"
                 >
                  {{ link.title }}
                </nuxt-link>
              </div>
              <button class="mx-4 start-today hover:bg-[#27FFB8] hover:text-[#131313] hover:border-[#27FFB8]">{{ $t('header.menu1') }}</button>
            </div>
            <VDropdown class="hidden" v-model:shown="drodownShow" auto-hide :triggers="[]" :skidding="-2" :distance="10"
              popper-class="locale-dropdown">
              <div class="relative cursor-pointer select-none" @click="drodownShow = !drodownShow">
                <div
                  class="px-4 h-[32px] flex justify-center items-center border border-solid box-border rounded-[71px] hover:bg-[#0c0e2f]">
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
  <div v-if="showPhoneMenu" :class="{ 'hidden': scrollDown }"
    class="inset-x-0 top-0 fixed z-[300] py-4 px-6 bg-black">
    <div class="relative flex justify-start">
      <img class="h-4 md:h-[24px]" src="~/assets/images/header.png">
      <div class="absolute right-[-1px] top-0" @click="showPhoneMenu = false;">
        <img class="h-[24px] ml-[36vw]" src="~/assets/images/menu-close.svg" />
      </div>
    </div>
    <div class="my-[20px]">
      <div>
        <div class="relative cursor-pointer select-none" @click="subMenuDropdownShow = !subMenuDropdownShow">
          <div
            class="h-[32px] text-base flex justify-between items-center hover:color-[#27FFB8]">
            <div>Solutions</div>
            <img src="~/assets/images/chervon-right.svg" class="w-6 h-6 ml-2"
              :class="{'rotate-dropdown-icon-mobile': subMenuDropdownShow}">
          </div>
          <div class="text-[#CECFD0] w-[100%]" v-if="subMenuDropdownShow">
            <div class="my-4">
              <img src="~/assets/images/development-toolkit-mobile.png" class="inline-block w-4 h-4"/>
              <span class="text-sm align-middle"> Developer Toolkit</span>
            </div>
            <div class="my-4">
              <img src="~/assets/images/node-service-mobile.png" class="inline-block w-4 h-4"/>
              <span class="text-sm align-middle"> Node Service</span>
            </div>
            <!-- <div class="my-4">
              <img src="~/assets/images/decentralized-computing-mobile.png" class="inline-block w-4 h-4"/>
              <span class="text-sm align-middle"> Decentralized Computing Power Network</span>
            </div> -->
          </div>
        </div>
        <nuxt-link v-for="link in navLinks" :key="link.path" :to="link.path" target="_blank">
          <div :class="{'menu-active' : `/${curMenu}` === link.path}" class="phone-menu">
            <span>{{ link.title }}</span>
            <img src="~/assets/images/chervon-right.svg" />
          </div>
        </nuxt-link>
      </div>
      <button class="start-today w-[100%] mt-6">{{ $t('header.menu1') }}</button>
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
  // { title: 'Solutions', path: "/solutions", children: [] },
  { title: t('header.dashboard'), path: '/dashboard' },
  { title: 'Grant', path: "" }, //
  { title: 'Pricing', path: "" }, //
  { title: 'About', path: "" },
  { title: t('header.docs'), path: "https://hamsternet.io/docs/" },
  // { title: t('header.faucet'), path: "/faucet" },
  // { title: t('header.stake'), path: "/stake" },
  // { title: t('header.cross_chain'), path: "/cross_chain" },
  { title: 'News', path: "https://hamsternet.medium.com/" },
])

const drodownShow = ref(false)
const subMenuDropdownShow = ref(false)
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

const device = useDevice()
const isMobile = device.value.isMobile
const showPhoneMenu = ref(false);

// Add `is-mobile` class to <html> tag
onMounted(() => {
  const rootClassList = document.querySelector("html").classList
  if (isMobile) {
    rootClassList.add("is-mobile")
  } else {
    rootClassList.remove("is-mobile")
  }
})

function handleScroll() {
  subMenuDropdownShow.value = false
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
.rotate-dropdown-icon-mobile {
  @apply -rotate-90;
}

.drop-bg {
  background: rgba(255, 255, 255, 0.30141);
  border-radius: 4px;
}

.menu {
  @apply cursor-pointer text-[white] leading-[32px] flex items-center;
}

.menu-active {
  @apply text-white !important;
}

.menu-dropdown-opened {
  color:#27FFB8;
  svg path {
    fill: #27FFB8;
  }
}

.start-today{
  border: 1px solid white;
  padding: 5px 18px;
}

@screen md {
  .menu-active {
    color: #27FFB8 !important;
    font-weight: 700;    
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
