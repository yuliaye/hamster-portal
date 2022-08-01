<template>
  <div class="w-[1024px] h-[622px] mt-[60px] rounded-[31px] cross-chain mx-auto">
    <h1 class="text-2xl mb-14 pt-14">Cross Chain</h1>
    <div>
      <h3 class="mb-10 text-xl">Hamster Polkadot Token To Hamster ERC20 Token</h3>
      <input type="number" placeholder="amount"  v-model="ercAmount"
        class="mr-5 w-48 h-16 border border-solid border-[#514F4E] rounded-[40px]"
      />
      <input type="text" placeholder="address" v-model="ercAddress"
        @input="ercAddress = ercAddress.replace(/\s+/g, '')"
        class="mr-5 w-[378px] h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <button
        @click="handlerPolkadot"
        :disabled="!ercAmount || !ercAddress || isLoadingHandler"
        class="w-[200px] h-16 rounded-[32px] bg-[#2E2A28] text-xl text-[#CC7219]"
      >
        <LoadingOutlined v-if="isLoadingHandler" />Submit
      </button>
    </div>
    <div>
      <h3 class="mt-10 mb-10 text-xl">Hamster ERC20 Token To Hamster Polkadot Token</h3>
      <input type="number" placeholder="amount" v-model="polkaAmount"
        class="mr-5 w-48 h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <input type="text" placeholder="address" v-model="polkaAddress"
        @input="polkaAddress = polkaAddress.replace(/\s+/g, '')"
        class="mr-5 w-[378px] h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <button
        @click="transformPolkadot"
        :disabled="!polkaAmount || !polkaAddress || isLoadingTransform"
        class="w-[200px] h-16 rounded-[32px] bg-[#2E2A28] text-xl text-[#CC7219]"
      >
        <LoadingOutlined v-if="isLoadingTransform" />
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Web3 from 'web3'
import { ABI } from './contract.ts'
import { LoadingOutlined } from '@ant-design/icons-vue';

export default {
  components: { LoadingOutlined },

  async setup() {
    if (!process.client) return {}

    const ercAmount = ref('')
    const ercAddress = ref('')
    const isLoadingHandler = ref(false)

    const {
      web3Accounts,
      web3Enable,
      web3FromAddress,
    } = await import('@polkadot/extension-dapp')
    const {
      ApiPromise,
      WsProvider
    } = await import('@polkadot/api')

    const handlerPolkadot = async function () {
      isLoadingHandler.value = true
      const wsProvider = new WsProvider('wss://ws.test.hamsternet.io')
      const api = await ApiPromise.create({ provider: wsProvider })

      const allInjected = await web3Enable('my cool dapp')
      const allAccounts = await web3Accounts()
      console.log('allAccounts',allAccounts)
      if (allAccounts.length === 0) {
        alert('you need init an polkadot account')
        isLoadingHandler.value = false
        return
      }
      const SENDER = allAccounts[0].address

      const injector = await web3FromAddress(SENDER);
      api.tx.burn.burn(ercAmount.value*1000000000000, ercAddress.value).signAndSend(
        SENDER, {signer: injector.signer}, (result) => {
          if (result.status.isInBlock) {
            console.log(`Transaction included at blockHash ${result.status.asInBlock}`);
          } else if (result.status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${result.status.asFinalized}`);
            isLoadingHandler.value = false
          } 
        }
      ).catch((error) => { 
        console.log('err',error)
        isLoadingHandler.value = false
      })
    }

    const connected = ref(false)
    const polkaAmount = ref('')
    const polkaAddress = ref('')
    const isLoadingTransform = ref(false)

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

    const transformPolkadot = async function() {
      isLoadingTransform.value = true
      await hookWeb3()

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
        isLoadingTransform.value = false
      }).on('error', function (error) {
        isLoadingTransform.value = false
        console.log('error:', error)
      })
    }

    return {
      handlerPolkadot,
      transformPolkadot,
      ercAmount,
      ercAddress,
      polkaAmount,
      polkaAddress,
      isLoadingTransform,
      isLoadingHandler
    }

  }
}

</script>

<style scoped>
.cross-chain{
  border: double 1px transparent;
  background-image: linear-gradient(180deg, rgba(46,42,40,0.9900) 0%, #141212 100%), 
                    linear-gradient(180deg, rgba(254, 201, 122, 1), rgba(20, 18, 18, 0));
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-bottom: 0;
}
input{
  background: unset;
  @apply text-xl pl-6 text-[#807D7C]
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
:deep(.anticon svg){
  @apply mb-2 mr-2;
}
</style>