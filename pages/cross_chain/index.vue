<template>
  <div>
    <img src="~/assets/images/stake-cross-banner.png" class="relative w-full" />
    <div class="flex banner-contain">
      <img src="~/assets/images/stake-cross-banner.svg" class="h-60">
      <div class="mt-20 ml-6 text-center">
        <span class="text-6xl">CROSS CHAIN <span class="pub-goerli">Goerli</span> </span>
        <span class="block text-4xl">hamsternet.io</span>
      </div>
    </div>
  </div> 
  
  <Form :model="formData" ref="formRef" :rules="formRules">
    <div class="bg-color-[#141212]">
      <div class="w-2/3 mx-auto">
        <span class="hamster-cross-chain">Hamster Cross Chain(Goerli)</span>
        <div class="h-[800px] rounded-2xl contain-part">
          <div class="px-8 pt-8">
            <FormItem name="selectValue">
              <Select class="w-full" :options="accountOptions" v-model:value="formData.selectValue"></Select>
            </FormItem>
            <div class="flex justify-between my-6 text-base top-wallet-balance">
              <span>Wallet Balance</span>
              <div>
                <span>1,000.000000000000</span>
                <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
              </div>
            </div>
            <hr />
          </div>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Transfer Into" key="1" class="px-8">
              <div class="bg-color-[#141212] pt-12" v-if="!showHamsterCross">
                <div class="mx-auto text-center">
                  <img src="~/assets/images/stake-meta.png" class="w-12 h-12 mx-auto mt-20 mb-8" />
                  <button class="text-color-[#fff] text-2xl" @click="installMetaWallet" v-if="showInstallWallet"
                    >Please Install MetaMask Wallet
                  </button>
                  <button
                    class="text-2xl text-color-[#fff]"
                    @click="connectMetaWallet"
                    v-if="showConnectWallet"
                    >Please Connect To MetaMask Wallet
                  </button>
                </div>
              </div>

              <div v-if="showHamsterCross" class="flex flex-col text-color-[#fff] text-base">
                <span class="mt-1 mb-6">Transer Amount</span>
                <FormItem name="intoAmount">
                  <Input
                    type="number"
                    placeholder="Please enter the amount to be transferred"
                    v-model:value="formData.intoAmount"
                  />
                </FormItem>
                <span class="mb-6">Transfer Out Wallet</span>
                <div class="flex">
                  <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
                  <span class="text-sm">666666666</span>
                </div>
                <hr class="mt-6" />
                <div class="flex justify-between my-6">
                  <span>Wallet Balance</span>
                  <div>
                    <span>1,000.000000000000</span>
                    <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
                  </div>
                </div>
                <hr />
                <FormItem class="text-center">
                  <Button class="w-32 mx-auto mt-8 h-9" @click="handleTransferIntoAmount">Submit</Button>
                </FormItem>
              </div>
            </TabPane>
            <TabPane tab="Transfer Out" key="2" class="px-8">
              <div class="flex flex-col text-color-[#fff] text-base">
                <span class="mt-1 mb-6">Transer Amount</span>
                <FormItem name="outAmount">
                  <Input
                    type="number"
                    placeholder="Please enter the amount to be transferred"
                    v-model="formData.outAmount"
                  />
                </FormItem>
                <span class="mb-6">Transfer Into Wallet</span>
                <div class="flex">
                  <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
                  <span class="text-sm">666666666</span>
                </div>
                <hr class="mt-6" />
                <div class="flex justify-between my-6">
                  <span>Wallet Balance</span>
                  <div>
                    <span>1,000.000000000000</span>
                    <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
                  </div>
                </div>
                <hr />
                <FormItem class="text-center">
                  <Button class="w-32 mx-auto mt-8 h-9 transferout-button" @click="handleTransferOutAamount">Submit</Button>
                </FormItem>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  </Form>
  
</template>

<script>
  import { ref, reactive, onMounted } from 'vue';
  import Web3 from 'web3'
  // import { ABI } from '../faucet/-components/contract.ts'
  import { Select, Tabs, Button, Input, TabPane, Form, FormItem } from 'ant-design-vue';

  definePageMeta({
    layout: "no-ssr"
  });

  export default {
    
    components: { Select, Tabs, Button, Input, TabPane, Form, FormItem },
    
    async setup() {
      if (!process.client) return {}

      const {
      web3Accounts,
      web3Enable,
      web3FromAddress,
      } = await import('@polkadot/extension-dapp')
      const {
        ApiPromise,
        WsProvider
      } = await import('@polkadot/api')

      const formData = reactive({})
      const formRef = ref();

      const accountOptions = ref([
        {
          label:'11111',
          value:'11111',
        },
        {
          label:'22222',
          value:'22222',
        }
      ])
      const showInstallWallet = ref(true);
      const showConnectWallet = ref(false);
      const showHamsterCross = ref(false);
      const connected = ref(false)

      const hookWeb3 = function () {
        if (window.ethereum) {
          window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(() => {
              connected.value = true
            })
        } else {
          alert('请安装MateMask')
        }
      }

      const getPolkaAccounts = async () => {
        const wsProvider = new WsProvider('wss://ws.test.hamsternet.io')
        const api = await ApiPromise.create({ provider: wsProvider })

        const allInjected = await web3Enable('my cool dapp')
        const allAccounts = await web3Accounts()
        console.log('allAccounts', allAccounts)
        if (allAccounts.length === 0) {
          alert('you need init an polkadot account')
          return
        }
      }
      
      const installMetaWallet = async() => {
        showInstallWallet.value = false;
        showConnectWallet.value = true;
        await hookWeb3()
      };
      const connectMetaWallet = () => {
        showConnectWallet.value = false;
        showHamsterCross.value = true;
      };

      const formRules = computed(() => ({
        selectValue: [{ message: 'this is can not empty', trigger: 'change', required: true }],
        intoAmount: [{ message: 'this is can not empty', trigger: 'change', required: true }],
        outAmount: [{ message: 'this is can not empty', trigger: 'change', required: true }],
      }));

      const handleTransferIntoAmount = async() => {
        console.log(formData,formData.intoAmount,formData.selectValue)
        await formRef.value?.validate(['selectValue', 'intoAmount']);

      }

      const handleTransferOutAamount = async function() {
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const contract = new web3.eth.Contract(ABI, '0x58DC15156C520cB4d18Df8807419c1989B05c960')
        contract.methods.burn(polkaAmount.value*1000000000000, polkaAddress.value).send({
          from: accounts[0]
        }).on('transactionHash', function (hash) {
          console.log('transactionHash:', hash)
        }).on('receipt', function (receipt) {
          // receipt example
          console.log('receipt:', receipt)
        }).on('error', function (error) {
          console.log('error:', error)
        })
      }

      onMounted(()=>{
        console.log('test mounted')
        getPolkaAccounts()
      })

      return{
        installMetaWallet,
        connectMetaWallet,
        handleTransferIntoAmount,
        handleTransferOutAamount,
        formData,
        formRef,
        formRules,
        showInstallWallet,
        showConnectWallet,
        showHamsterCross,
        accountOptions
      }
    }
  }
</script>

<style scoped>
  .hamster-cross-chain {
    @apply inline-block text-base text-[#fff] mt-12 mb-7;
  }
  .hamster-cross-chain::before {
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
  .pub-goerli{
    font-size: 12px;
    vertical-align: super;
    margin-left: -20px;
  }
  .contain-part{
    background: #2E2A28 !important;
  }
  .top-wallet-balance{
    color: white;
  }
  .top-wallet-balance-hat{
    color: #CC7219;
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
    color: white;
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
</style>
