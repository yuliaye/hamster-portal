<template>
  <div class="w-[1024px] h-[622px] mt-[80px] rounded-[31px] cross-chain mx-auto">
    <h1 class="text-2xl mb-14 pt-14">Cross Chain</h1>
    <div>
      <h3 class="mb-10 text-xl">Hamster Polkadot Token To Hamster ERC20 Token</h3>
      <input type="text" placeholder="amount"
        class="mr-5 w-48 h-16 border border-solid border-[#514F4E] rounded-[40px]"
      />
      <input type="text" placeholder="address"
        class="mr-5 w-[378px] h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <button class="w-[200px] h-16 rounded-[32px] bg-[#2E2A28] text-xl text-[#CC7219]">Submit</button>
    </div>
    <div>
      <h3 class="mt-10 mb-10 text-xl">Hamster ERC20 Token To Hamster Polkadot Token</h3>
      <input type="text" placeholder="amount"
        class="mr-5 w-48 h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <input type="text" placeholder="address"
        class="mr-5 w-[378px] h-16 border border-solid border-[#514F4E] rounded-[32px]"
      />
      <button class="w-[200px] h-16 rounded-[32px] bg-[#2E2A28] text-xl text-[#CC7219]">Submit</button>
    </div>
  </div>
</template>

<script setup>
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
</style>