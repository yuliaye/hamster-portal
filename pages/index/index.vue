<template>
  <DefaultLayout :showFooter="false" :showHeader="showHeader" :showHeaderBg="showHeaderBg">
    <full-page :options="fullpageOptions" :skip-init="true" ref="fullpageRef" class="mx-6 md:mx-auto">
      <div class="absolute transparent" ref="animateUfoRef">
        <div class="relative text-center">
          <img src="~/assets/images/ufo.png" id="ufo-image" class="w-full" />
          <img src="~/assets/images/ufo-light.png" id="ufo-light-image" class="absolute top-0 left-0 w-full transparent"/>
        </div>
      </div>
      <div :class="fullPageSectionClass">
        <div class="md:flex md:items-center">
          <div class="md:w-3/5">
            <!-- <div class="text-2xl font-bold md:text-[54px] md:leading-[74px]">Hamster empowers projects and developers in <span class="text-[#27FFB8]">web3</span> to build their dreams</div> -->
            <div><img :src="$device.isMobile ? getImageURL('hamster-slug-mobile.svg') : getImageURL('hamster-slug-pc.svg')" /></div>
            <div class="mt-5 mb-6 text-sm md:text-2xl">One-Stop infrastructure, development, operation and maintenance service platform for projects in Web3.0</div>
            <div class="mb-6">
              <button class="border border-[#FFFFFF] w-[120px] h-[43px] md:w-[148px] md:h-[54px] md:hover:bg-[#27FFB8] md:hover:text-[#131313] md:hover:border-[#27FFB8]">Start Building</button>
              <nuxt-link to="/download">
                <button class="border border-[#27FFB8] bg-[#27FFB8] w-[120px] h-[43px] ml-4 md:w-[148px] md:h-[54px] md:ml-6 text-[#131313]">Download</button>
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <span class="text-[#738A92] text-base font-bold">Investors</span>
              <img src="./images/waterdrip.png" class="w-[84px] h-[36px] inline-block ml-14"/>
              <img src="./images/stratified.png" class="w-[101px] h-[36px] inline-block ml-6"/>
            </div>
          </div>
          <div class="md:w-2/5">
            <div ref="ufoRef"></div>
          </div>
          <div class="flex justify-between px-6 md:hidden">
            <span class="text-[#738A92] text-base font-bold">Investors</span>
            <img src="./images/waterdrip.png" class="w-[84px] h-[36px]"/>
            <img src="./images/stratified.png" class="w-[101px] h-[36px]"/>
          </div>
        </div>
      </div>

      <div :class="fullPageSectionClass">
        <div class="grid gap-6 md:grid-cols-12">
          <div class="md:col-span-5">
            <div class="text-[32px] leading-[44px] font-bold md:text-[54px] md:leading-[74px]">Hamster DevOps Solutions</div>
            <div class="text-base mt-3 text-[#738A92] md:text-2xl md:mt-6">
              Hamster offers the integrated approach to build , test and run projects in web3.
              We provide the most flexible platform for developers to turn their blockchain ideas into reality.
            </div>
          </div>
          <div id="ufo-point--toolkit" class="md:col-span-3 md:h-[430px] border border-[#203E42] flex flex-col px-6 pt-6 pb-4 devops-bg">
            <div class="flex-1">
              <img src="./images/devops-one.png" class="h-[105px] w-[132px] mb-[19px] mx-auto"/>
              <div class="mb-2 text-2xl font-bold">Hamster Developer Toolkit</div>
              <div class="text-base text-[#738A92]">Multiple development tools, faster code check, easier contract deployment and more</div>
            </div>
            <div class="flex mt-3">
              <span class="text-base font-bold text-[#27FFB8] mr-2">Learn more</span>
              <img :src="getImageURL('learnmore-arrow.svg')" />
            </div>
          </div>
          <div class="md:col-span-4">
            <div class="relative md:h-[202px] border border-[#203E42] flex flex-col px-6 pt-6 pb-4 devops-bg">
              <div class="flex-1">
                <img src="./images/devops-three.png" class="h-[95px] absolute right-6 bottom-[20px] opacity-10"/>
                <div class="mb-2 text-base font-bold">Hamster Node Service</div>
                <div class="text-base text-[#738A92]">Enjoy the smooth and safe RPC service on multichains</div>
              </div>
              <div class="flex mt-3">
                <span class="text-base font-bold text-[#27FFB8] mr-2">Learn more</span>
                <img :src="getImageURL('learnmore-arrow.svg')" />
              </div>
            </div>
            <div class="relative md:h-[204px] border border-[#203E42] flex flex-col p-6 mt-[24px] devops-bg">
              <div class="flex-1">
                <img src="./images/devops-four.png" class="h-[115px] absolute right-6 bottom-[20px] opacity-10"/>
                <div class="mb-2 text-base font-bold">Hamster Decentralized Computing Power Network</div>
                <div class="text-base text-[#738A92]">Aggregated check of the security risks for exsiting contracts, tokens, NFTs and dApps and more</div>
              </div>
              <div class="flex mt-3">
                <nuxt-link to="/download">
                  <span class="text-base font-bold text-[#27FFB8] mr-2">Learn more</span>
                  <img :src="getImageURL('learnmore-arrow.svg')" class="inline-block"/>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div :class="fullPageSectionClass">
        <span class="text-[32px] leading-[44px] font-bold md:text-[54px] md:leading-[74px]">Hamster Ecology</span>
        <div class="grid grid-cols-1 gap-8 mt-8 overflow-hidden md:mt-0 md:grid-cols-12">
          <div class="flex justify-center select-none order-2 py-[20px] md:py-[50px] md:order-1 md:col-span-6">
            <div class="relative w-[300px] h-[300px] md:w-[470px] md:h-[470px]">
              <div class="w-[40%] h-[40%] flex flex-col justify-center items-center ecology-center">
                <img :src="getImageURL('ecology-hamster.svg')" class="h-[24px] md:h-[36px]"/>
                <img :src="getImageURL('ecology-close.svg')" class="h-[24px] inline-block my-1 md:my-[10px]"/>
                <span class="text-xs font-bold md:text-base">{{currentEcologyType}}</span>
              </div>
              <div class="w-[70%] h-[70%] ecology-level-one">
                <div class="w-[100%] h-[100%] relative animation-rotate">
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[0]" class="absolute h-[30px] left-[38%] top-[-15px] md:h-[48px] md:top-[-20px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[1]" class="absolute h-[30px] left-[93%] top-[35%] md:h-[48px] md:left-[300px] md:top-[100px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[2]" class="absolute h-[30px] left-[80%] top-[78%] md:h-[48px] md:left-[245px] md:top-[270px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[3]" class="absolute h-[30px] top-[65%] left-[-2%] md:h-[48px] md:left-[-15px] md:top-[200px]"/>
                  </transition>
                </div>
              </div>
              <div class="w-[100%] h-[100%] ecology-level-two">
                <div class="w-[100%] h-[100%] relative animation-rotate">
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[4]" class="absolute h-[30px] left-[65%] md:h-[48px] md:left-[300px] md:top-[-16px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[5]" class="absolute h-[30px] left-[88%] top-[20%]  md:h-[48px] md:left-[400px md:top-[70px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[6]" class="absolute h-[30px] left-[93%] top-[60%] md:h-[48px] md:left-[440px] md:top-[280px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[7]" class="absolute h-[30px] left-[70%] top-[90%] md:h-[48px] md:left-[330px] md:top-[420px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[8]" class="absolute h-[30px] left-[30%] top-[95%] md:h-[48px] md:left-[130px] md:top-[435px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[9]" class="absolute h-[20px] left-[5%] top-[76%] md:left-[20px] md:top-[360px] h-[34px]"/>
                  </transition>
                  <transition name="ecology-fade" mode="out-in">
                    <img :key="currentEcologyTypeIndex" :src="currentEcologyImages[10]" class="absolute h-[30px] top-[20%] md:h-[48px] md:top-[110px]"/>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center md:w-[575px] justify-self-center order-1 md:order-2 md:col-span-6">
            <div class="grid grid-cols-2 gap-[20px] xl:gap-[32px]">
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef1">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Supported Projects</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef2">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Supported Chain Networks</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef3">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Supported Contracts</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef4">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Deployments</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef5">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Code Templates</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold md:text-[54px] md:leading-[74px]">
                  <span ref="numberRollerRef6">0</span>
                </span>
                <span class="flex-1 text-xs mb-3 mt-2 text-[#AFC6C8] md:text-base md:mt-2 md:mb-6">Supported Detection Tools</span>
                <img :src="getImageURL('green-line.svg')" class="w-8"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div :class="fullPageSectionClass">
        <span class="text-[32px] leading-[44px] font-bold md:text-[54px] md:leading-[74px]">Who’s using Hamster</span>
        <div class="grid mt-8 md:gap-[84px] md:grid-cols-2 md:mt-12">
          <div class="relative p-3 overflow-hidden using-imgbg md:p-6 md:h-[502px] md:w-[455px]">
            <Carousel :autoplay="carouselsAutoPlay" :wrap-around="true" @slide-start="handleSlideStart">
              <Slide v-for="(slide, slideIndex) in carousels" :key="slideIndex">
                <div class="w-full">
                  <div class="hidden md:block">
                    <div class="carousel__item">
                      <img :src="slide.src" class="h-[374px] w-[411px]" />
                    </div>
                  </div>
                  <div class="text-left md:hidden">
                    <div class="h-[300px] text-base text-[#FFFFFF]">{{slide.comment}}</div>
                    <div>
                      <div class="flex items-center">
                        <div class="rounded-full h-[32px] w-[32px]">
                          <img :src="slide.src" class="object-cover rounded-full" />
                        </div>
                        <div class="text-base font-bold text-[#FFFFFF] ml-3">{{slide.name}}</div>
                      </div>
                      <div class="text-sm text-[#AFC6C8] mt-1">{{slide.desc}}</div>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons="slideData">
                <Pagination/>
                <div class="flex justify-between mt-4 custom-carousel-navigation">
                  <div class="flex text-center">
                    <div class="w-[55px] bg-[#27392D] h-[49px] py-[13px] cursor-pointer">
                      <img :src="getImageURL('using-left-arrow.svg')" @click="handleSlidePrev(slideData)" class="m-auto"/>
                    </div>
                    <div class="w-[55px] bg-[#27392D] h-[49px] py-[13px] cursor-pointer">
                      <img :src="getImageURL('using-right-arrow.svg')" @click="handleSlideNext(slideData)" class="m-auto"/>
                    </div>
                  </div>
                  <div>
                    <span class="text-[34px]">{{`${slideData.currentSlide+1}`}}</span>
                    <span class="text-base">{{` / ${slideData.slidesCount}`}}</span>
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
          <div class="hidden md:block">
            <div class="flex flex-col h-[100%] py-7">
              <div class="flex-1 text-2xl">{{carouselsCurrentSlide.comment}}</div>
              <div>
                <div class="text-[54px] font-bold leading-[74px] mb-2">{{carouselsCurrentSlide.name}}</div>
                <span class="text-base text-[#AFC6C8]">{{carouselsCurrentSlide.desc}}</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div :class="fullPageSectionClass" class="z-[100] -mx-6 md:mx-0">
        <span class="mx-6 md:mx-0 text-[32px] leading-[44px] font-bold md:text-[54px] md:leading-[74px]" id="ufo-point--news-title">
          Trending News
        </span>
        <div class="px-6 my-6 overflow-x-auto md:my-12 md:px-0 news-overflow-scrollbar">
          <div class="flex gap-6 md:grid md:grid-cols-12">
            <div class="w-[214px] flex flex-col flex-shrink-0 md:w-auto md:h-auto col-span-3" v-for="(newsItem, index) in news" :key="index">
              <img :src="newsItem.image" />
              <div class="flex flex-col flex-1 pb-6 pl-6 pr-5 border-x border-b border-[#203E42] trending-bg">
                <span class="mt-[37px] mb-[19px] flex-1" :title="newsItem.title">{{ newsItem.title }}</span>
                <nuxt-link :to="newsItem.url" target="_blank">
                  <span class="text-[#27FFB8]">More</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-3 mx-6 mt-5 md:mx-0 md:grid-cols-12 md:mt-auto">
          <input type="text" @keyup="emailInfo = emailInfo.replace(/\s/g, '')" v-if="!$device.isMobile" v-model="emailInfo" placeholder="Enter your email to get the latest Hamster News！" class="subscription col-span-1 pl-4 md:pl-6 md:col-span-10 md:h-[64px]"/>
          <textarea v-if="$device.isMobile" @keyup="emailInfo = emailInfo.replace(/\s/g, '')" v-model="emailInfo" placeholder="Enter your email to get the latest Hamster News！" class="subscription-mobile col-span-1 pl-4 pt-3 h-[109px]"></textarea>
          <span v-if="$device.isMobile" class="w-[100%] text-[red]">{{alertEmailInfo}}</span>
          <button @click="hamsterSendEmail" class="block border border-[#27FFB8] bg-[#27FFB8] md:h-[64px] col-span-1 h-[43px] md:col-span-2 text-[#131313]">Subscribe</button>
          <span v-if="!$device.isMobile" class="w-[500px] text-[red]">{{alertEmailInfo}}</span>
        </div>
      </div>
      
      <div class="section fp-auto-height">
        <div class="relative mt-3 md:mt-12 md:w-[100%] md:h-auto -mx-6 md:mx-0 w-screen" @mouseover="handleFlagRaise">
          <img v-if="!$device.isMobile" src="./images/moon.png" class="w-[100%] flag-planet"/>
          <img v-if="$device.isMobile" src="./images/mobile-moon.png" class="w-[100%]"/>
          <div class="absolute top-[55px] md:top-[10%] xl:top-[44%] md:left-[43%] left-[33%]">
            <img src="./images/pole.png" class="w-6 h-[80px] inline-block"/>
            <img src="./images/flag.png" class="flag" ref="flagRef"/>
          </div>
        </div>
        <Footer />
      </div>
    </full-page>
  </DefaultLayout> 
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import lottie from "lottie-web"
  import anime from 'animejs/lib/anime.es.js';
  import DefaultLayout from "~/layouts/default.vue"
  import Footer from "~/layouts/-components/footer.vue"
  import { UfoAnimation } from "~/utils/animateUtil/ufoAnimation"
  import ufojson from "../../assets/json/ufo.json"
  import 'vue3-carousel/dist/carousel.css'

  definePageMeta({
    layout: false
  })

  const { getImageURL, getAssets } = useAssets()

  const showHeader = ref(true)
  const showHeaderBg = ref(false)

  const numberRollerRef1 = ref(null)
  const numberRollerRef2 = ref(null)
  const numberRollerRef3 = ref(null)
  const numberRollerRef4 = ref(null)
  const numberRollerRef5 = ref(null)
  const numberRollerRef6 = ref(null)
  const numberRollerNumber1 = ref(16)
  const numberRollerNumber2 = ref(73)
  const numberRollerNumber3 = ref(20)
  const numberRollerNumber4 = ref(143)
  const numberRollerNumber5 = ref(24)
  const numberRollerNumber6 = ref(162)

  const device = useDevice()
  const fullpageRef = ref()
  const fullpageMobileOptions = {
    autoScrolling: false,
    fitToSection: false,
    scrollOverflow: false,
    verticalCentered: false,
    paddingTop: "4rem",
  }

  const fullpageExtraOptions = device.value.isMobile ? fullpageMobileOptions : {}
  const fullpageOptions = { 
    ...fullpageExtraOptions,
    scrollBar: true,
    licenseKey: "gplv3-license",
    beforeLeave( origin, destination, direction, trigger ) {
      showHeader.value = direction === 'up'
      showHeaderBg.value = !destination.isFirst

      // Run UFO animation by fullpage
      ufoAnimation.animate(origin, destination, direction)
    },
    afterLoad(origin, destination, direction, trigger) {
      // handle fullpage scroll
      // ecology and number roller section index is：2
      if (destination.index === 2) {
        // handle ecology
        handleEcologyExhibit()

        // handle number roller
        const numberRollers = [
          { ref: numberRollerRef1, number: numberRollerNumber1 },
          { ref: numberRollerRef2, number: numberRollerNumber2 },
          { ref: numberRollerRef3, number: numberRollerNumber3 },
          { ref: numberRollerRef4, number: numberRollerNumber4 },
          { ref: numberRollerRef5, number: numberRollerNumber5 },
          { ref: numberRollerRef6, number: numberRollerNumber6 },
        ]

        numberRollers.forEach(item => {
          const number = item.number.value
          const renderedNumber = parseInt(item.ref.value.textContent)
          // Skip animation when number renderer
          if (!renderedNumber && number !== renderedNumber) {
            anime({
              targets: item.ref.value,
              innerHTML: [0, number],
              round: 1,
              easing: 'easeInOutExpo'
            })
          }
        })
      }
    }
  }
  const fullPageSectionClass = computed(() => 
    device.value.isMobile ? "section fp-auto-height" : "section overflow-hidden"
  )

  const ufoRef = ref(null)
  const animateUfoRef = ref(null)
  const ufoAnimation = new UfoAnimation(animateUfoRef, ufoRef)

  // carousels
  // autoplay interval
  const carouselsAutoPlay = ref(5000)
  const carouselsCurrentIndex = ref(0)
  const carouselsCurrentSlide = computed(() => carousels[carouselsCurrentIndex.value] || {})
  const carousels = [
    {
      name: "James Bayly",
      desc: "Head Of Business Development at SubQuery & OnFinality",
      comment: "No information available",
      src: getImageURL('usinghamster-one.png')
    },
    {
      name: "Zhangsan",
      desc: "abcdefg",
      comment: "No information available 2",
      src: getImageURL('usinghamster-two.png')
    },
    {
      name: "Lisi",
      desc: "hijklmn",
      comment: "No information available 3",
      src: getImageURL('usinghamster-three.png')
    }
  ]

  // carousels autoplay interval is 3000ms
  const handleSlideStart = (slideData) => {
    const { slidingToIndex, slidesCount } = slideData
    carouselsCurrentIndex.value = slidesCount > slidingToIndex ? slidingToIndex : 0
  }
  const handleSlidePrev = (slideData) => {
    const { currentSlide, slidesCount, slideTo, prev } = slideData
    if (currentSlide == 0) {
      slideTo(slidesCount)
    } else {
      prev()
    }
  }
  const handleSlideNext = (slideData) => {
    const { currentSlide, slidesCount, slideTo, next } = slideData
    if (currentSlide + 1 == slidesCount) {
      slideTo(0)
    } else {
      next()
    }
  }

  // handle ecology
  const ecologyTimer = ref(null)
  const ecologyTypes = ["Infrastructure", "Defi", "GameFi", "NFT"]
  const currentEcologyTypeIndex = ref(0)
  const currentEcologyType = computed(() => ecologyTypes[currentEcologyTypeIndex.value])
  const currentEcologyImages = computed(() => {
    const allEcologyAssets = getAssets("ecology")
    const currentEcologyAssets = []

    Object.entries(allEcologyAssets).forEach(([key, asset]) => {
      if (key.startsWith(currentEcologyType.value)) {
        currentEcologyAssets.push(asset)
      }
    })

    return currentEcologyAssets
  })
  const handleEcologyExhibit = () => {
    if (ecologyTimer.value) { return }

    const handler = () => {
      const newEcologyTypeIndex = currentEcologyTypeIndex.value + 1
      currentEcologyTypeIndex.value =
        newEcologyTypeIndex < ecologyTypes.length
        ? newEcologyTypeIndex
        : 0
    }

    ecologyTimer.value = setInterval(handler, 3000)
  }

  const news = [
    {
      url: 'https://hamsternet.medium.com/mokshya-x-hamster-to-liberate-developers-with-smart-contracts-making-it-easier-to-access-web3-d22b11d9d667',
      image: getImageURL('trending-one.jpg'),
      title: 'Mokshya x Hamster—to liberate developers with smart contracts, making it easier to access Web3 World',
    },
    {
      url: 'https://hamsternet.medium.com/vote-of-thanks-for-the-aptos-grant-dd2c271d7c44',
      image: getImageURL('trending-two.jpg'),
      title: 'Vote of THANKS for the Aptos Grant — a gratitude note from Hamster teamt',
    },
    {
      url: 'https://hamsternet.medium.com/hamster-network-bi-weekly-report-8a5efe5aad09',
      image: getImageURL('trending-three.jpg'),
      title: 'Hamster Network Bi-Weekly Report',
    },
    {
      url: 'https://hamsternet.medium.com/rebase-x-hamster-hamster-supports-rebase-hackathon-to-help-more-developers-build-their-dreams-c817a380d4c3',
      image: getImageURL('trending-four.jpg'),
      title: 'Rebase x Hamster — Hamster supports Rebase Hackathon to help more Developers build their Dreams',
    }
  ]

  const emailInfo = ref('')

  const sendEmail = async () => {
    const url = '/hamster/email'
    const data = {
      "email": emailInfo.value
    }
    await $fetch(url, {
      method: "POST",
      body: data
    }).then((res) => {
      console.log('res:', res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const alertEmailInfo = ref('')
  const hamsterSendEmail = ()=>{
    let myreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (myreg.test(emailInfo.value)){
      sendEmail()
      alertEmailInfo.value = 'Thank you for your attention'
    } else if(emailInfo.value == ''){
      alertEmailInfo.value = 'This field cannot be empty'
    } else{
      alertEmailInfo.value = 'Please enter the correct format of email'
    }
  }

  const flagRef = ref(null)
  const handleFlagRaise = () => {
    flagRef.value.classList.add("flag-show")
    setTimeout(() => flagRef.value.classList.add("flag-raise"), 500)
  }

  onMounted(()=>{
    // Init fullpage
    try {
      fullpageRef.value.init()
    } catch (error) {
      console.log("Fullpage init error", error)
    }
    
    // Run lottie animation
    lottie.loadAnimation({
        container: ufoRef.value,//选择渲染dom
        renderer: "svg",//渲染格式
        loop: false,//循环播放
        autoplay: true,//是否i自动播放,
        animationData: ufojson,//渲染动效json
    });
  })
</script>

<style lang="less" scoped>
  .transparent {
    opacity: 0
  }
  .force-transparent {
    opacity: 0 !important;
  }

  .devops-bg{
    background: radial-gradient(111.94% 125.64% at -11.86% 57.81%, rgba(109, 197, 160, 0.1147) 0%, rgba(14, 14, 19, 0) 100%);
  }
  .trending-bg{
    background: linear-gradient(180deg, #21342B 0%, #141414 100%);
  }
  .subscription {
    background: linear-gradient(180deg, #131C17 0%, #151616 100%);
    color: #AFC6C8;
    font-size: 16px;
    border: 1px solid #203E42;
    &:focus-visible {
      outline: none;
    }
  }
  .subscription-mobile {
    background: linear-gradient(180deg, #131C17 0%, #151616 100%);
    color: #AFC6C8;
    font-size: 14px;
    border: 1px solid #203E42;
    &:focus-visible {
      outline: none;
    }
  }

  .flag {
    width: 60px;
    display: inline-block;
    margin-left: -14px;
    margin-top: -50px;
    opacity: 1;
    @media screen and (min-width: 768px) {
      margin-top: 0;
      opacity: 0;
    }
  }

  .flag-show {
    opacity: 1;
    transition: opacity 500ms;
  }

  .flag-raise {
    margin-top: -50px;
    transition: margin-top 1000ms;
  }

  .flag-planet {
    // transform: scale(2);
    @media screen and (min-width: 768px) {
      transform: scale(1);
    }
  }

  .using-imgbg {
    background: linear-gradient(180deg, #1E2723 0%, #161817 100%);
  }

  .ecology-center{
    border: 0.3px solid rgba(255, 255, 255, 0.7);
    filter: drop-shadow(0px 0px 17px rgba(29, 60, 45, 0.25));
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%)
  }
  .ecology-level-one{
    border: 0.3px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 23px rgba(27, 41, 36, 0.25);
    border-radius: 50%;
    position: absolute;
    z-index: 90;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    .animation-rotate{
      animation: rotation 8s linear infinite;
    }
  }
  
  .ecology-level-two{
    border: 0.3px solid rgba(255, 255, 255, 0.4);
    filter: drop-shadow(0px 4px 15px rgba(32, 64, 27, 0.25));
    border-radius: 50%;
    position: absolute;
    z-index: 80;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    .animation-rotate{
      animation: rotation 8s linear infinite;
    }
  }

  .ecology-fade-enter-active,
  .ecology-fade-leave-active {
      transition: opacity 1s ease;
  }

  .ecology-fade-leave,
  .ecology-fade-enter-to {
      opacity: 1;
  }

  .ecology-fade-enter-from,
  .ecology-fade-leave-to {
      opacity: 0;
  }

  @keyframes rotation { 
    0% {
      -webkit-transform: rotate(0deg); 
      transform:rotate(0deg); 
    }
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(360deg); 
    } 
  }

  :deep(.carousel) {
    .carousel__item {
      min-height: 200px;
      width: 100%;
      background-color: var(--vc-clr-primary);
      color: var(--vc-clr-white);
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .carousel__pagination {
      margin-top: 20px;
    }
    .carousel__pagination-button::after {
      background-color: #48514B;
      width: 100%;
    }
    .carousel__pagination-button:hover::after , 
    .carousel__pagination-button--active::after {
      background-color: #27FFB8 !important;
      width: 100%;
    }
    .carousel__pagination-item {
      width: 33%;
      .carousel__pagination-button {
        width: 100%;
      }
    }
    .carousel__slide  {
      
    }
    .carousel__prev ,
    .carousel__next  {
      box-sizing: content-box;
      color: white;
      background: #27392D;
      height: 49px;
      width: 40px;
    }
  }

  .using-navigation {
    position: absolute;
    top: 102%;
    left: 18px;
    width: 100px;
  }
  .using-numprogress{
    position: absolute;
    bottom: -3px;
    right: 20px;
    z-index: 100;
    color: red !important;
  }

  .news-overflow-scrollbar::-webkit-scrollbar{
    display: none;
  }

  .ufo-onepage{
    margin-top: -220px;
  }
</style>
    
<style lang="less">
  // html.fp-enabled:not(.is-mobile) {
  //   body {
  //     background: url(~/assets/images/index-bg-top.png) left top no-repeat,
  //                 url(~/assets/images/index-bg-body.png) center center no-repeat,
  //                 #141212;
  //   }
  // }
  html.fp-enabled:not(.is-mobile) {
    body {
      background: url(~/assets/images/home-background.jpg) no-repeat #131313;
    }
  }
</style>
