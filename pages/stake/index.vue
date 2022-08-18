<template>
  <div>
    <img src="~/assets/images/stake-cross-banner.png" class="relative w-full" />
    <div class="flex banner-contain">
      <img src="~/assets/images/stake-cross-banner.svg" class="h-60">
      <div class="mt-20 ml-8 text-center">
        <span class="text-6xl">STAKE</span>
        <span class="block mt-2 text-5xl ">hamsternet.io</span>
      </div>
    </div>
  </div>
  
  <div class="bg-color-[#141212] pt-12" v-if="!showHamsterStake">
    <div class="w-2/3 h-[400px] mx-auto text-center rounded-xl contain-part">
      <div class="pt-20">
        <img src="~/assets/images/stake-polka.png" class="w-12 h-12 mx-auto mb-8" />
        <button
          class="text-2xl text-color-[#fff]"
          @click="installPolkaWallet"
          v-if="showInstallWallet"
          >Please Install Polkadot wallet</button
        >
        <button
          class="text-2xl text-color-[#fff]"
          @click="connectPolkaWallet"
          v-if="showConnectWallet"
          >Please Connect To Polkadot Wallet</button
        >
      </div>
    </div>
  </div>

  <div class="bg-color-[#141212]" v-if="showHamsterStake">
    <div class="w-2/3 mx-auto">
      <span class="hamster-stake">Hamster Stake</span>
      <div class="h-[860px] rounded-2xl contain-part">
        <div class="px-8 pt-8">
          <div class="flex mb-6">
            <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
            <span class="text-color-[#fff] text-sm">666666666</span>
          </div>
          <hr />
          <div class="flex justify-between my-6 text-color-[#fff] text-base">
            <span>Wallet Balance</span>
            <div>
              <span>1,000.000000000000</span>
              <span class="text-color-[#CC7219] text-xs ml-1">HAT</span>
            </div>
          </div>
          <hr />
          <div class="flex justify-between my-6 text-color-[#fff] text-base">
            <span>Income</span>
            <div>
              <span>500.00</span>
              <span class="text-color-[#CC7219] text-xs ml-1">GRT</span>
            </div>
          </div>
          <hr />
          <div class="flex flex-col">
            <span class="my-6 text-color-[#fff] text-base bold">Staking Amount</span>
            <Input
              type="number"
              placeholder="Please enter the amount to be transferred"
              v-model="stakingAmount"
            />
          </div>
        </div>

        <Tabs defaultActiveKey="1">
          <TabPane tab="Stake" key="1" class="px-8">
            <div class="flex flex-col text-color-[#fff] text-base">
              <div class="flex justify-between mb-6 mt-2 text-color-[#fff] text-base">
                <span>Staking Amount</span>
                <div>
                  <span>230,00</span>
                  <span class="text-color-[#CC7219] text-xs ml-1">HAT</span>
                </div>
              </div>
              <hr />
              <div class="flex mt-6">
                <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
                <span class="text-sm">Allow HAT to Be Staked</span>
                <Tooltip
                  placement="topLeft"
                  title="Prompt Text"
                  arrowPointAtCenter
                  class="tooltip-button"
                >
                  <ExclamationOutlined class="w-3 h-3 border-0 border-solid rounded-full"/>
                </Tooltip>
              </div>
              <Button class="w-5/6 mx-auto my-6 h-9">Allow HAT Access</Button>
              <div class="flex mt-6">
                <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
                <span class="text-sm">Stake HAT</span>
                <Tooltip
                  placement="topLeft"
                  title="Prompt Text"
                  arrowPointAtCenter
                  class="tooltip-button"
                >
                  <ExclamationOutlined class="w-3 h-3 border-0 border-solid rounded-full"/>
                </Tooltip>
              </div>
              <Button class="w-5/6 mx-auto my-6 h-9 stake-button">Stake</Button>
            </div>
          </TabPane>
          <TabPane tab="Receive Benefits" key="2" class="px-8 text-center">
            <Button class="w-5/6 my-6 h-9">Receive</Button>
          </TabPane>
          <TabPane tab="Withdraw" key="3" class="px-8">
            <div class="flex flex-col text-color-[#fff] text-base">
              <div class="mb-6">
                <span class="text-color-[#fff] text-base bold">Withdraw Amount</span>
                <span class="text-color-[#CC7219] text-xs">
                  （Pledge amount can be retrieved：300）
                </span>
              </div>
              <Input
                type="number"
                placeholder="Please enter the amount to be transferred"
                v-model="withdrawAmount"
              />
              <Button class="w-5/6 mx-auto mt-8 h-9">Retrieve</Button>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { ExclamationOutlined } from '@ant-design/icons-vue';
  import { Tabs, Button, Input, Tooltip, TabPane } from 'ant-design-vue';

  definePageMeta({
    layout: "no-ssr"
  });

  export default {

    components: { Tooltip, Tabs, Button, Input, TabPane, ExclamationOutlined },

    async setup() {
      if (!process.client) return {}

      const showInstallWallet = ref(true)
      const showConnectWallet = ref(false)
      const showHamsterStake = ref(false)

      const stakingAmount = ref(0)
      const withdrawAmount = ref(0)

      const installPolkaWallet = () => {
        showInstallWallet.value = false
        showConnectWallet.value = true
      };
      const connectPolkaWallet = () => {
        showConnectWallet.value = false
        showHamsterStake.value = true
      }

      return {
        installPolkaWallet,
        connectPolkaWallet,
        showInstallWallet,
        showConnectWallet,
        showHamsterStake,
        stakingAmount,
        withdrawAmount,
      }
    }
  }
</script>

<style scoped>
  .hamster-stake {
    @apply inline-block text-base text-[#fff] mt-12 mb-7;
  }
  .hamster-stake::before {
    content: '';
    height: 30px;
    display: inline-block;
    border-left: 3px solid #cc7219;
    margin-right: 8px;
    margin-bottom: -9px;
  }
  .banner-contain{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -160px;
  }
  .contain-part{
    background: #2E2A28 !important;
  }
  
  :deep(.ant-select:not(.ant-select-customize-input) .ant-select-selector) {
    background-color: unset;
    border: 1px solid #807d7c;
    border-radius: 4px;
    height: 40px;
  }
  :deep(.ant-select-single.ant-select-show-arrow
      .ant-select-selection-item, .ant-select-single.ant-select-show-arrow
      .ant-select-selection-placeholder) {
    color: white;
    margin-top: 3px;
  }
  :deep(.anticon svg) {
    width: 4px;
    height: 10px;
  }
  :deep(.anticon[tabindex]){
    background: #807D7C;
    margin: 5px 0 0 4px;
  }
  hr {
    border: none;
    height: 1px;
    background-color: #504b48;
  }
  :deep(.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
    color: #fff;
    font-size: 16px;
    margin: 16px 0;
  }
  :deep(.ant-tabs-ink-bar) {
    background: #cc7219;
  }
  :deep(.ant-tabs-top > .ant-tabs-nav::before) {
    border-bottom: 1px solid #807d7c;
  }
  
  :deep(.ant-tabs-nav-wrap) {
    padding-left: 32px;
    height: 80px;
  }
  :deep(.ant-tabs-tab:hover) {
    color: #fff;
  }
  :deep(.ant-tabs){
    color: #fff;
  }
  :deep(.ant-tabs-tab){
    color: #807d7c;
  }

  input {
    background: unset;
    height: 40px;
    @apply text-sm pl-3 text-[#807D7C];
    border: 1px solid #807d7c;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    border-radius: 4px;
  }

  .ant-btn {
    border-radius: 20px;
  }
  .transferout-button {
    background: #cc7219;
    border: unset;
    color: #fff;
  }
  .stake-button {
    background: unset;
    border-color: #cc7219;
    color: #fff;
  }
  
</style>
