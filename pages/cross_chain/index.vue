<template>
  <div class="relative">
    <img src="~/assets/images/stake-cross-banner.png" class="w-full" />
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
            <FormItem name="polkadotAddress">
              <Select class="w-full" :options="accountOptions" v-model:value="formData.polkadotAddress" @change="handleSelectChange"></Select>
            </FormItem>
            <div class="flex justify-between my-6 text-base top-wallet-balance">
              <span>Wallet Balance</span>
              <div>
                <LoadingOutlined v-if="polkaBalance.loading" />
                <div v-if="!polkaBalance.loading">
                  <span>{{ polkaBalance.value }}</span>
                  <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
                </div>
              </div>
            </div>
            <hr />
          </div>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Transfer Into" key="1" class="px-8">
              <div class="bg-color-[#141212] pt-12" v-if="!showHamsterCross">
                <div class="mx-auto text-center">
                  <img src="~/assets/images/stake-meta.png" class="w-12 h-12 mx-auto mt-20 mb-8" />
                  <button class="text-color-[#fff] text-2xl" v-if="showInstallWallet"
                    >Please Install MetaMask Wallet
                  </button>
                  <button
                    class="text-2xl text-color-[#fff]"
                    @click="checkIfMetaWalletInstalled"
                    v-if="showConnectWallet"
                    >Please Connect To MetaMask Wallet
                  </button>
                </div>
              </div>

              <div v-if="showHamsterCross" class="flex flex-col text-color-[#fff] text-base">
                <span class="mt-1 mb-6">Transfer Amount</span>
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
                  <span class="text-sm">{{ metaAccount }}</span>
                </div>
                <hr class="mt-6" />
                <div class="flex justify-between my-6">
                  <span>Wallet Balance</span>
                  <div>
                    <LoadingOutlined v-if="metaBalance.loading" />
                    <div v-if="!metaBalance.loading">
                      <span>{{ metaBalance.value }}</span>
                      <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
                    </div>
                  </div>
                </div>
                <hr />
                <FormItem class="text-center">
                  <Button class="w-32 mx-auto mt-8 h-9" @click="handleTransferIntoAmount" :disabled="isLoadingInto">
                    <LoadingOutlined v-if="isLoadingInto" class="loading-button" />
                    Submit
                  </Button>
                </FormItem>
              </div>
            </TabPane>
            <TabPane tab="Transfer Out" key="2" class="px-8" :disabled="tabTransferOutDisabled">
              <div class="flex flex-col text-color-[#fff] text-base">
                <span class="mt-1 mb-6">Transfer Amount</span>
                <FormItem name="outAmount">
                  <Input
                    type="number"
                    placeholder="Please enter the amount to be transferred"
                    v-model:value="formData.outAmount"
                  />
                </FormItem>
                <span class="mb-6">Transfer Into Wallet</span>
                <div class="flex">
                  <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
                  <span class="text-sm">{{ metaAccount }}</span>
                </div>
                <hr class="mt-6" />
                <div class="flex justify-between my-6">
                  <span>Wallet Balance</span>
                  <div>
                    <LoadingOutlined v-if="metaBalance.loading" />
                    <div v-if="!metaBalance.loading">
                      <span>{{ metaBalance.value }}</span>
                      <span class="ml-1 text-xs top-wallet-balance-hat">HAT</span>
                    </div>
                  </div>
                </div>
                <hr />
                <FormItem class="text-center">
                  <Button class="w-32 mx-auto mt-8 h-9 transferout-button" @click="handleTransferOutAmount" :disabled="isLoadingOut">
                    <LoadingOutlined v-if="isLoadingOut" class="loading-button"/>
                    Submit
                  </Button>
                </FormItem>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  </Form>
  
</template>

<script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { ABI } from '../faucet/-components/contract.ts'
  import { formatmetaMaskBalance } from '../../utils/web3Util/metaMask'
  import { LoadingOutlined } from '@ant-design/icons-vue'
  import { Select, Tabs, Button, Input, TabPane, Form, FormItem } from 'ant-design-vue';

  definePageMeta({
    layout: "no-ssr"
  });

  const { default: Web3 } = await import("web3")
  const { web3Accounts, web3Enable, web3FromAddress } = await import('@polkadot/extension-dapp')
  const { createPolkadotApi, formatBalance } = await import ('../../utils/polkadotUtil')

  const formData = reactive({})
  const formRef = ref();

  const accountOptions = ref([])
  const metaAccount = ref('');
  const isLoadingInto = ref(false)
  const isLoadingOut = ref(false)
  const polkaBalance = reactive({ loading: false, value: '0' });
  const metaBalance = reactive({ loading: false, value: '0' });
  const tabTransferOutDisabled = ref(true)
  const showInstallWallet = ref(false);
  const showConnectWallet = ref(true);
  const showHamsterCross = ref(false);
  const connected = ref(false)

  const formRules = computed(() => ({
    polkadotAddress: [{ message: 'this is can not empty', trigger: 'change', required: true }],
    intoAmount: [{ message: 'this is can not empty', trigger: 'change', required: true }],
    outAmount: [{ message: 'this is can not empty', trigger: 'change', required: true }],
  }));


  // create apis
  // const polkadotApi = ref();
  let polkadotApi;
  const buildPolkadotApi = async () => {
    if (!polkadotApi) {
      polkadotApi = await createPolkadotApi('wss://ws.test.hamsternet.io');
    }

    if (!polkadotApi.isConnected) {
      await polkadotApi.connect()
    }
    
    return polkadotApi
  }

  const getMetaBalance = ()=>{
    metaBalance.loading = true
    const web3 = new Web3(window.ethereum)

    web3.eth.getBalance(metaAccount.value).then( res => {
      metaBalance.value = formatmetaMaskBalance(res*1)
      metaBalance.loading = false
      tabTransferOutDisabled.value = false
    })
  }

  const getPolkaAccounts = async () => {
    const allInjected = await web3Enable('my cool dapp')

    const allAccounts = await web3Accounts()
    console.log('polkaAccounts', allAccounts)

    allAccounts.map( item => {
      const account = {
        label: item.meta.name+'('+item.address+')',
        value: item.address
      } 
      accountOptions.value.push(account)
    })

    if (allAccounts.length === 0) {
      alert('you need init an polkadot account')
      return
    }
  }

  const getMetaAccounts = async function() {
    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts()

    metaAccount.value = accounts[0]

    getMetaBalance()
  }
  
  const checkIfMetaWalletInstalled = async() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          connected.value = true
          showConnectWallet.value = false;
          showHamsterCross.value = true;
        })
    } else {
      alert('请安装MateMask')
      showConnectWallet.value = false;
      showInstallWallet.value = true;
    }
    await getMetaAccounts()
  };

  // transfer amount from meta to polka
  const handleTransferIntoAmount = async function() {
    await formRef.value?.validate(['polkadotAddress', 'intoAmount']);
    isLoadingInto.value = true

    const web3 = new Web3(window.ethereum)

    const contract = new web3.eth.Contract(ABI, '0x58DC15156C520cB4d18Df8807419c1989B05c960')
    contract.methods.burn(formData.intoAmount*1000000000000, accountOptions.value[0].value).send({
      from: metaAccount.value
    }).on('transactionHash', function (hash) {
      console.log('transactionHash:', hash)
    }).on('receipt', function (receipt) {
      // receipt example
      console.log('receipt:', receipt)
      isLoadingInto.value = false
    }).on('error', function (error) {
      isLoadingInto.value = false
      console.log('error:', error)
    })
    await handleSelectChange()
    getMetaBalance()
  }
  
  // transfer amount from polka to meta
  const handleTransferOutAmount = async() => {
    await formRef.value?.validate(['polkadotAddress', 'outAmount']);
    isLoadingOut.value = true

    try {
      const { polkadotAddress, outAmount } = formData
      const SENDER = polkadotAddress

      const injector = await web3FromAddress(SENDER);
      const polkadotApi = await buildPolkadotApi();
      polkadotApi.tx.burn.burn(outAmount*1000000000000, metaAccount.value).signAndSend(
        SENDER, {signer: injector.signer}, (result) => {
          if (result.status.isInBlock) {
            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
          } else if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            isLoadingOut.value = false
          }
        }
      )
      await handleSelectChange()
      getMetaBalance()
    } catch(error) {
      console.log('err',error)
    } finally {
      isLoadingOut.value = false
    }
  }

  const handleSelectChange = async () => {
    polkaBalance.loading = true
    console.log('polkaBalance.loading = true')

    try {
      const { polkadotAddress } = formData
      const polkadotApi = await buildPolkadotApi();
      const { data: balanceData } = await polkadotApi.query.system.account(polkadotAddress);
      polkaBalance.value = formatBalance(balanceData.free);
    } catch (error) {
      console.log("Error", error)
    } finally {
      polkaBalance.loading = false;
    }
  }

  onMounted(async () => {
    getPolkaAccounts()
  })
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
    transform: translate(-50%, -50%);
    width: max-content;
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
  :deep(.anticon-spin){
    color: #807D7C !important;
    margin-bottom: 6px;
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
