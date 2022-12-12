<template>
  <div class="mt-[106px]">
    <div class="area-div1">
      <div class="flex flex-row justify-between">
        <div class="w-3/5">
          <div class="text-[54px] font-bold leading-[74px]">Hamster empowers projects and developers in <span class="text-[#27FFB8]">web3</span> to build their dreams</div>
          <div class="mt-5 mb-6 text-2xl">One-Stop infrastructure, development, operation and maintenance service platform for projects in Web3.0</div>
          <div class="mb-6">
            <button class="border border-[#FFFFFF] w-[148px] h-[54px]">Start Building</button>
            <button class="border border-[#27FFB8] bg-[#27FFB8] w-[148px] h-[54px] ml-6 text-[#131313]">Download</button>
          </div>
          <div>
            <span class="text-[#738A92] text-base font-bold">Investors</span>
            <img src="./images/waterdrip.png" class="w-[84px] h-[36px] inline-block ml-14"/>
            <img src="./images/stratified.png" class="w-[101px] h-[36px] inline-block ml-6"/>
          </div>
        </div>
        <div class="w-2/5">
          <div ref="animation1"></div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6 area-div2 mt-[120px]">
      <div class="col-span-5 mr-4">
        <div class="text-[54px] font-bold leading-[74px]">Hamster DevOps Solutions</div>
        <div class="text-2xl text-[#738A92] mt-6">Hamster offers the integrated approach to build , test and run projects in web3.
            We provide the most flexible platform for developers to turn their blockchain ideas into reality.
        </div>
      </div>
      <div class="col-span-3 h-[430px] border border-[#203E42] flex flex-col pl-6 pb-7 devops-bg">
        <img src="./images/devops-one.png" class="h-[105px] w-[132px] mt-[45px] mb-[19px] mx-auto"/>
        <span class="mb-2 text-2xl font-bold">Hamster Development Toolkit</span>
        <span class="text-base text-[#738A92] pr-[46px]">Multiple development tools, faster code check, easier contract deployment and more</span>
        <div class="flex mt-[32px]">
          <span class="text-base font-bold text-[#27FFB8] mr-2">Learn more</span>
          <img :src="getImageURL('learnmore-arrow.svg')" />
        </div>
      </div>
      <div class="col-span-4">
        <div class="relative h-[210px] border border-[#203E42] flex flex-col pl-6 pb-7 devops-bg">
          <img src="./images/devops-three.png" class="h-[95px] absolute right-6 top-[88px] opacity-10"/>
          <span class="mt-6 mb-2 text-base font-bold">Hamster Node Service</span>
          <span class="text-base text-[#738A92] pr-[46px]">Enjoy the smooth and safe RPC service on multichains</span>
          <div class="flex mt-[76px]">
            <span class="text-base font-bold text-[#27FFB8] mr-2">Learn more</span>
            <img :src="getImageURL('learnmore-arrow.svg')" />
          </div>
        </div>
        <div class="relative h-[210px] border border-[#203E42] flex flex-col pl-6 pb-7 mt-[12px] devops-bg">
          <img src="./images/devops-four.png" class="h-[115px] absolute right-6 top-[66px] opacity-10"/>
          <span class="mt-6 mb-2 text-base font-bold">Hamster Decentralized Computing Power Network</span>
          <span class="text-base text-[#738A92] pr-[15px]">Aggregated check of the security risks for exsiting contracts, tokens, NFTs and dApps and more</span>
          <div class="flex mt-[22px]">
            <span class="text-base font-bold text-[#27FFB8] mr-2">Check now</span>
            <img :src="getImageURL('learnmore-arrow.svg')" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between area-div3 mt-[200px]">
      <div>
        <img src="./images/ecology.png" class="w-[507px] h-[511px]"/>
      </div>
      <div>
        <span class="text-[54px] font-bold leading-[72px]">Hamster Ecology</span>
        <div class="flex justify-between mt-16">
          <div class="flex flex-col">
            <span class="text-[54px] font-bold leading-[74px]">16</span>
            <span class="text-[#AFC6C8] text-base mt-2 mb-6">Supported Ecosystems</span>
            <img :src="getImageURL('green-line.svg')" class="w-8"/>
          </div>
          <div class="flex flex-col">
            <span class="text-[54px] font-bold leading-[74px]">xx GT</span>
            <span class="text-[#AFC6C8] text-base mt-2 mb-6">Decentralized computing power</span>
            <img :src="getImageURL('green-line.svg')" class="w-8"/>
          </div>
        </div>
        <div class="flex justify-between mt-16">
          <div class="flex flex-col">
            <span class="text-[54px] font-bold leading-[74px]">16</span>
            <span class="text-[#AFC6C8] text-base mt-2 mb-6">Integrated Web3.0 Projects</span>
            <img :src="getImageURL('green-line.svg')" class="w-8"/>
          </div>
          <div class="flex flex-col">
            <span class="text-[54px] font-bold leading-[74px]">143days</span>
            <span class="text-[#AFC6C8] text-base mt-2 mb-6">RPC service without error</span>
            <img :src="getImageURL('green-line.svg')" class="w-8"/>
          </div>
        </div>
      </div>
    </div>
    <div class="area-div4 mt-[200px]">
      <span class="text-[54px] font-bold leading-[74px]">Who’s using Hamster</span>
      <div class="flex justify-between mt-16">
        <div>
          <img src="./images/usinghamster-one.png" class=" h-[498px]"/>
        </div>
        <div class="flex flex-col justify-between h-110">
          <div class="text-2xl">No info</div>
          <div>
            <div class="text-[54px] font-bold leading-[74px]">James Bayly</div>
            <span class="text-base text-[#AFC6C8]">Head Of Business Development at SubQuery & OnFinality</span>
          </div>
        </div>
      </div>
    </div>
    <div class="area-div5 mt-[200px]">
      <span class="text-[54px] font-bold leading-[74px]">Trending News</span>
      <div class="grid grid-cols-12 gap-6 my-12">
        <div class="h-[310px] col-span-3">
          <img src="./images/trending-one.png" />
          <div class="flex flex-col pl-6 pr-5 border-x border-b border-[#203E42] trending-bg">
            <span class="mt-[37px] mb-[19px]">Web3Go Delivered Milestone 1 for Our Web3 Foundation Grant</span>
            <span class="text-[#27FFB8] pb-[21px]">Read article</span>
          </div>
        </div>
        <div class="h-[310px] col-span-3">
          <img src="./images/trending-two.png" />
          <div class="flex flex-col pl-6 pr-5 border-x border-b border-[#203E42] trending-bg">
            <span class="mt-[37px] mb-[19px]">Web3Go Delivered Milestone 1 for Our Web3 Foundation Grant</span>
            <span class="text-[#27FFB8] pb-[21px]">Read article</span>
          </div>
        </div>
        <div class="h-[310px] col-span-3">
          <img src="./images/trending-three.png" />
          <div class="flex flex-col pl-6 pr-5 border-x border-b border-[#203E42] trending-bg">
            <span class="mt-[37px] mb-[19px]">Web3Go Delivered Milestone 1 for Our Web3 Foundation Grant</span>
            <span class="text-[#27FFB8] pb-[21px]">Read article</span>
          </div>
        </div>
        <div class="h-[310px] col-span-3">
          <img src="./images/trending-four.png" />
          <div class="flex flex-col pl-6 pr-5 border-x border-b border-[#203E42] trending-bg">
            <span class="mt-[37px] mb-[19px]">Web3Go Delivered Milestone 1 for Our Web3 Foundation Grant</span>
            <span class="text-[#27FFB8] pb-[21px]">Read article</span>
          </div>
        </div>
      </div>
      <div class="flex inline-block pt-12">
        <input type="text" placeholder="Enter your email to get latest Hamster News!" class="flex-1 h-[64px]"/>
        <button class="border border-[#27FFB8] bg-[#27FFB8] w-[200px] h-[64px] ml-3 text-[#131313]">Subscribe</button>
      </div>
      <div class="relative mt-12 w-[100%]">
        <img src="./images/moon.png" class="w-[100%]"/>
        <div class="absolute top-[44%] left-[43%]">
            <img src="./images/pole.png" class="w-6 h-[80px] inline-block"/>
            <img src="./images/flag.png" class="w-[60px] inline-block flag-show"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import lottie from "lottie-web"
  import json001 from "../../assets/json/ufo.json"

  const animation1 = ref(null)

  const { getImageURL } = useAssets()

  onMounted(()=>{
    lottie.loadAnimation({
        container: animation1.value,//选择渲染dom
        renderer: "svg",//渲染格式
        loop: false,//循环播放
        autoplay: true,//是否i自动播放,
        animationData: json001,//渲染动效json
    });
  })
</script>

<style lang="less" scoped>
  .devops-bg{
    background: radial-gradient(111.94% 125.64% at -11.86% 57.81%, rgba(109, 197, 160, 0.1147) 0%, rgba(14, 14, 19, 0) 100%);
  }
  .trending-bg{
    background: linear-gradient(180deg, #21342B 0%, #141414 100%);
  }
  input{
    background: linear-gradient(180deg, #131C17 0%, #151616 100%);
    color: #AFC6C8;
    font-size: 16px;
    padding-left: 24px;
    border: 1px solid #203E42;
  }
  input:focus-visible {
    outline: none;
  }
  .flag-show{
    margin-left: -14px;
    margin-top: -50px;
  }
</style>