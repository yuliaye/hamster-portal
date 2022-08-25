<template>
  <div class="relative">
    <img src="~/assets/images/stake-cross-banner.png" class="w-full" />
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
          v-if="showInstallWallet"
          >Please Install Polkadot wallet</button
        >
        <button
          class="text-2xl text-color-[#fff]"
          @click="checkIfPolkaWalletInstalled"
          v-if="showConnectWallet"
          >Please Connect To Polkadot Wallet</button
        >
      </div>
    </div>
  </div>

  <Form :model="formData" ref="formRef" :rules="formRules">
    <div class="bg-color-[#141212]" v-if="showHamsterStake">
      <div class="w-2/3 mx-auto">
        <span class="hamster-stake">Hamster Stake</span>
        <div class="h-[800px] rounded-2xl contain-part">
          <div class="px-8 pt-8">
            <div class="flex mb-6">
              <img src="~/assets/images/stake-meta.png" class="w-4 h-4 mr-2 mt-0.5" />
              <span class="text-sm contain-color">{{ metaAccount }}</span>
            </div>
            <hr />
            <div class="flex justify-between my-6 text-base contain-color">
              <span>Wallet Balance</span>
              <div>
                <LoadingOutlined v-if="isLoadingControl.isLoadingWalletBalance" />
                <div v-if="!isLoadingControl.isLoadingWalletBalance" >
                  <span>{{ walletBalance }}</span>
                  <span class="ml-1 text-xs contain-color-super">HAT</span>
                </div>
              </div>
            </div>
            <hr />
            <div class="flex justify-between my-6 text-base contain-color">
              <span>Income</span>
              <div>
                <LoadingOutlined v-if="isLoadingControl.isLoadingIncome" />
                <div v-if="!isLoadingControl.isLoadingIncome">
                  <span>{{ incomeAmount }}</span>
                  <span class="ml-1 text-xs contain-color-super">GRT</span>
                </div>
              </div>
            </div>
            <hr />
            <div class="flex justify-between my-6 text-base contain-color">
              <span>Staking Amount</span>
              <div>
                <LoadingOutlined v-if="isLoadingControl.isLoadingStakingAmount" />
                <div v-if="!isLoadingControl.isLoadingStakingAmount">
                  <span>{{ stakingAmount }}</span>
                  <span class="ml-1 text-xs contain-color-super">HAT</span>
                </div>
              </div>
            </div>
            <hr/>
          </div>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Stake" key="1" class="px-8">
              <div class="flex flex-col text-color-[#fff] text-base">
                <div>
                  <span class="inline-block mb-5">Staking Amount</span>
                  <FormItem name="stakingAmount">
                    <Input
                      type="number"
                      placeholder="Please enter the amount to be transferred"
                      v-model:value="formData.stakingAmount"
                    />
                  </FormItem>
                </div>
                <div class="flex">
                  <span class="mr-1 text-xs text-center rounded-full serial-number">1</span>
                  <span class="text-sm">Allow HAT to Be Staked</span>
                  <Tooltip
                    placement="bottomLeft"
                    title="By performing the authorization operation, you will use your Hamster in the same way as our contract."
                    arrowPointAtCenter
                    class="tooltip-button"
                  >
                    <ExclamationOutlined class="w-3 h-3 border-0 border-solid rounded-full"/>
                  </Tooltip>
                </div>
                <FormItem name="allowHatButton" class="text-center">
                  <Button class="w-5/6 mx-auto mt-6 h-9" @click="handleAllowButton" :disabled="isLoadingControl.isLoadingAllowButton">
                    <LoadingOutlined v-if="isLoadingControl.isLoadingAllowButton" />
                    Allow HAT Access
                  </Button>
                </FormItem>
                <div class="flex">
                  <span class="mr-1 text-xs text-center rounded-full serial-number">2</span>
                  <span class="text-sm">Stake HAT</span>
                  <Tooltip
                    placement="bottomLeft"
                    title="After stake, all the current stakeing amount will be frozen for 20 minutes and you can get back the whole amount after it is unfrozen."
                    arrowPointAtCenter
                    class="tooltip-button"
                  >
                    <ExclamationOutlined class="w-3 h-3 border-0 border-solid rounded-full"/>
                  </Tooltip>
                </div>
                <FormItem name="stakeHatButton" class="text-center">
                  <Button class="w-5/6 mx-auto my-6 h-9" :class="{'stake-button': isStakeSuccess}" @click="handleStakeButton" :disabled="stakeButtonDisabled||isLoadingControl.isLoadingStakeButton">
                    <LoadingOutlined v-if="isLoadingControl.isLoadingStakeButton" />
                    Stake
                  </Button>
                </FormItem>
              </div>
            </TabPane>
            <TabPane tab="Receive Benefits" key="2" class="w-full px-8">
              <div class="flex flex-col items-center mx-auto">
                <Button class="w-5/6 mt-6 mb-2 h-9" @click="handleReceiveButton" :disabled="isLoadingControl.isLoadingReceiveButton||disabledReceiveButton">
                  <LoadingOutlined v-if="isLoadingControl.isLoadingReceiveButton" />
                  Receive
                </Button>
                <span class="inline-block w-5/6 text-red-500" v-if="showReceive">The amount is 0, can't receive！</span>
              </div>
            </TabPane>
            <TabPane tab="Withdraw" key="3" class="px-8">
              <div class="flex flex-col text-color-[#fff] text-base">
                <div class="mb-6">
                  <span class="text-color-[#fff] text-base bold">Withdraw Amount</span>
                  <!-- <span class="text-xs contain-color-super">
                    （Pledge amount can be retrieved：300）
                  </span> -->
                </div>
                <FormItem name="withdrawAmount">
                  <Input
                    type="number"
                    placeholder="Please enter the amount to be transferred"
                    v-model:value="formData.withdrawAmount"
                  />
                </FormItem>
                <FormItem name="retrieveButton" class="w-full">
                  <div class="flex flex-col items-center mx-auto">
                    <Button class="w-5/6 mt-6 mb-2" @click="handleRetrieveButton" :disabled="isLoadingControl.isLoadingRetrieveButton">
                      <LoadingOutlined v-if="isLoadingControl.isLoadingRetrieveButton" />
                      Retrieve
                    </Button>
                    <span class="inline-block w-5/6 text-red-500" v-if="errRetrieveMessage">Can't withdraw at the moment, please withdraw after unfreezing</span>
                  </div>
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
  import { ExclamationOutlined } from '@ant-design/icons-vue';
  import { ERCABI } from '../../utils/abi/erc20'
  import { HAMABI } from '../../utils/abi/hamsterPool'
  import { LoadingOutlined } from '@ant-design/icons-vue'
  import { Tabs, Button, Input, Tooltip, TabPane, Form, FormItem } from 'ant-design-vue';

  definePageMeta({
    layout: "no-ssr"
  });

  const { default: Web3 } = await import("web3")
  const { web3Accounts, web3Enable } = await import('@polkadot/extension-dapp')

  const formData = reactive({})
  const formRef = ref();
  const accountOptions = ref([])
  const metaAccount = ref('');
  const walletBalance = ref(0)
  const stakingAmount = ref(0)
  const incomeAmount = ref(0)
  
  const connected = ref(false)
  const isStakeSuccess = ref(true)
  const showReceive = ref(false)
  const disabledReceiveButton = ref(false)
  const errRetrieveMessage = ref(false)
  const showInstallWallet = ref(false)
  const showConnectWallet = ref(true)
  const showHamsterStake = ref(false)
  const stakeButtonDisabled = ref(true)
  const isLoadingControl = reactive({
    isLoadingAllowButton: false,
    isLoadingStakeButton: false,
    isLoadingReceiveButton: false,
    isLoadingRetrieveButton: false,
    isLoadingWalletBalance: false, 
    isLoadingIncome: false,
    isLoadingStakingAmount: false
  })

  let web3Api
  const buildWeb3Api = () => {
    if (web3Api) {
      return web3Api
    }

    web3Api = new Web3(window.ethereum)
    return web3Api
  }
  
  const formatFromWei = (val) => {
    const api = buildWeb3Api()
    return api.utils.fromWei(val, 'micro')
  }

  const formatToWei = (val) => {
    const api = buildWeb3Api()
    return api.utils.toWei(val, 'micro')
  }

  const checkIfPolkaWalletInstalled = async() => {
    const allInjected = await web3Enable('my cool dapp')

    const allAccounts = await web3Accounts()
    console.log('polkaAccounts', allAccounts)

    allAccounts.map( item => {
      const account = {
        label: item.meta.name+'('+item.address+')',
        value: item.address
      } 
      accountOptions.value.push(account)
      showConnectWallet.value = false
      showHamsterStake.value = true
    })

    if (allAccounts.length === 0) {
      showConnectWallet.value = false
      showInstallWallet.value = true
      return
    }
  };

  const formRules = computed(() => ({
    stakingAmount: [
      { message: 'this is can not empty', trigger: 'change', required: true },
      {
        trigger: 'change',
        validator: async (_, newStakingAmount) => {
          const val = +newStakingAmount
          if (val <= 0) {
            return Promise.reject('The input amount must be greater than 0')
          } else if (val > walletBalance.value) {
            return Promise.reject('The input amount cannot be greater than the balance')
          } else {
            Promise.resolve()
          }
        }
      }
    ],
    withdrawAmount: [{ message: 'this is can not empty', trigger: 'change', required: true }],
  }));

  const getMetaAccounts = async function() {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          connected.value = true
        })
    } else {
      alert('请安装MateMask')
    }
    const api = buildWeb3Api()
    const accounts = await api.eth.getAccounts()

    metaAccount.value = accounts[0]
    console.log('metaAccount',accounts[0])
  }

  const getWalletBalance = async function(){
    isLoadingControl.isLoadingWalletBalance = true

    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(ERCABI, '0x83BF7FB708dA62E14768c745512680B51d28be4b')
      const balance = await contract.methods.balanceOf(metaAccount.value).call()
      walletBalance.value = formatFromWei(balance)
    } catch(error){
      console.log('error',error)
    } finally {
      isLoadingControl.isLoadingWalletBalance = false
    }
  }

  const getIncome = async() =>{
    isLoadingControl.isLoadingIncome = true

    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(HAMABI, '0x75930F4bC45eacc658B6DC111Bbbc664f66449CC')
      const income = await contract.methods.getAccountGrt().call({ from: metaAccount.value })
      incomeAmount.value = formatFromWei(income)
    } catch(error) {
      console.log('error',error)
    } finally {
      isLoadingControl.isLoadingIncome = false
    }
  }

  const getStakingAmount = async() =>{
    isLoadingControl.isLoadingStakingAmount = true

    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(HAMABI, '0x75930F4bC45eacc658B6DC111Bbbc664f66449CC')
      const stakeAmount = await contract.methods.getStakingBalance().call({ from: metaAccount.value })
      stakingAmount.value = formatFromWei(stakeAmount)
    } catch(error) {
      console.log('error',error)
    } finally {
      isLoadingControl.isLoadingStakingAmount = false
    }
  }

  // authorization
  const handleAllowButton = async() => {
    await formRef.value?.validate('stakingAmount');
    isLoadingControl.isLoadingAllowButton = true
    
    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(ERCABI, '0x83BF7FB708dA62E14768c745512680B51d28be4b')
      const approveResult = await contract.methods.approve('0x75930F4bC45eacc658B6DC111Bbbc664f66449CC', formatToWei(formData.stakingAmount)).send({ from: metaAccount.value })
      stakeButtonDisabled.value = false
    } catch(error) {
      console.log('error',error)
    } finally {
      isLoadingControl.isLoadingAllowButton = false
    }
  }

  // pledge
  const handleStakeButton = async() => {
    isLoadingControl.isLoadingStakeButton = true

    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(HAMABI, '0x75930F4bC45eacc658B6DC111Bbbc664f66449CC')
      const staking = await contract.methods.staking(formatToWei(formData.stakingAmount)).send({ from: metaAccount.value })
      isStakeSuccess.value = false
      await getStakingAmount()
      await getWalletBalance()
    } catch(error) {
      console.log('error',error)
    } finally {
      isLoadingControl.isLoadingStakeButton = false
    }
  }

  // Get the benefits
  const handleReceiveButton = async() => {
    if (!+incomeAmount.value) {
      showReceive.value = true
      disabledReceiveButton.value = true

    } else {
      isLoadingControl.isLoadingReceiveButton = true

      try {
        const api = buildWeb3Api()
        const contract = new api.eth.Contract(HAMABI, '0x75930F4bC45eacc658B6DC111Bbbc664f66449CC')
        const getBenefits = await contract.methods.withdrawGrt().send({ from: metaAccount.value })
        await getIncome()
      } catch(error) {
        console.log('error',error)
      } finally {
        isLoadingControl.isLoadingReceiveButton = false
      }
    }
  }

  // Retrieve the pledge
  const handleRetrieveButton = async() => {
    await formRef.value?.validate('withdrawAmount');
    isLoadingControl.isLoadingRetrieveButton = true

    try {
      const api = buildWeb3Api()
      const contract = new api.eth.Contract(HAMABI, '0x75930F4bC45eacc658B6DC111Bbbc664f66449CC')
      const retrieveResult = await contract.methods.withdraw(formatToWei(formData.withdrawAmount)).send({ from: metaAccount.value })
      await getStakingAmount()
      await getWalletBalance()
      await getIncome()
    } catch(error) {
      console.log('error',error)
      errRetrieveMessage.value = true
    } finally {
      isLoadingControl.isLoadingRetrieveButton = false
    }
  }

  onMounted(async () => {
    await getMetaAccounts()
    await getWalletBalance()
    await getIncome()
    await getStakingAmount()
  })
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
    transform: translate(-50%, -50%);
    width: max-content;
  }
  .contain-part{
    background: #2E2A28 !important;
  }
  .contain-color{
    color: #fff;
  }
  .contain-color-super{
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
  .serial-number{
    width: 16px;
    height: 16px;
    margin-top: 2px;
    border: 1px solid #CC7219;
    background: #CC7219;
  }
  :deep(.anticon svg) {
    width: 4px;
    height: 10px;
  }
  :deep(.anticon[tabindex]){
    background: #807D7C;
    margin: 5px 0 0 4px;
  }
  :deep(.anticon-spin){
    color: #807D7C !important;
    margin-bottom: 6px;
    width: 12px !important;
    height: 12px !important;
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
    background: rgba(100,100,100,0.3);
    border: none;
    color: #646464;
  }
  
</style>
