<template>
  <div class="w-full mx-auto text-center">
    <div class="mt-24">
      <div class="img-center">
        <img src="~/assets/images/faucet.png">
      </div>
      <div class="mt-8 text-2xl">You will receive 1TTC to your account, only once per day</div>
    </div>
    <div class="mt-14">
      <input type="text" placeholder="Please enter the account address" v-model="addressValue"
        class="w-[716px] h-20 border border-solid border-[#807D7C] mr-5 rounded-[40px]"
      />
      <button class="w-[292px] h-20 bg-[#CC7219] rounded-[40px] text-2xl" @click="handleAddress">Confirm</button>
      <span class="block text-xl text-red-500 error-message">{{ errorMessage }}</span>
    </div>
    <client-only>
      <CrossChain />
    </client-only>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CrossChain from './-components/CrossChain.vue'

// if(process.client){
//   console.log(window)
// }

const addressValue = ref('')
const errorMessage = ref('')

const handleAddress =()=>{
  if(!addressValue.value){
    errorMessage.value = 'this cannot be empty'
  } else{
    errorMessage.value = ''
  }

  const url = '/api/v1/facuet/request'
  const data = {
    address: addressValue.value
  }

  $fetch(url, {
    method: "POST",
    body: data
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.data)
  })
  
}
</script>

<style scoped>
input{
  background: unset;
  @apply text-xl pl-6 text-[#807D7C]
}
.error-message{
  margin-left: -720px;
  margin-top: 8px;
}
</style>
