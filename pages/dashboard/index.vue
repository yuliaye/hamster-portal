<template>
  <div class="main-margin sm:mt-[160px] mt-[120px]">
    <div>
      <div class="text-[40px] mb-[4px] text-center font-bold">HAMSTER Dashboard</div>
      <div class="area-desc text-center text-[16px]">Explore the latest stats on the HAMSTER network via the HAMSTER
        dashboard
      </div>
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-3 mt-[64px] xl:gap-[24px] gap-[8px]">
      <div class="flex flex-col sm:col-span-1 md:col-span-1 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <BinChart />
      </div>
      <div class="flex flex-col sm:col-span-1 md:col-span-2 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <AreaChart />
      </div>
    </div>

    <div class="mt-[24px] grid sm:grid-cols-1 md:grid-cols-3 xl:gap-[24px] gap-[8px]">
      <div class="flex flex-col sm:col-span-1 md:col-span-1 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <BarChart />
      </div>
      <div class="flex flex-col sm:col-span-1 md:col-span-2 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <CPUHistoryChart />
      </div>
    </div>

    <div class=" mt-[24px] grid sm:grid-cols-1 md:grid-cols-3 xl:gap-[24px] gap-[8px]">
      <div class="flex flex-col sm:col-span-1 md:col-span-1 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <RAMBarChart />
      </div>
      <div class="flex flex-col sm:col-span-1 md:col-span-2 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <RAMHistoryChart />
      </div>
    </div>

    <div class="mt-[24px] grid sm:grid-cols-1 md:grid-cols-3 xl:gap-[24px] gap-[8px]">
      <div class="flex flex-col sm:col-span-1 md:col-span-1 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <StorageBarChart />
      </div>
      <div class="flex flex-col sm:col-span-1 md:col-span-2 bg-[#2E2A28] rounded-[16px] h-[418px] sm:h-auto p-[30px]">
        <StorageHistoryChart />
      </div>
    </div>
  </div>
</template>
<script setup>
import BinChart from './components/binChart.vue'
import BarChart from './components/barChart.vue'
import AreaChart from './components/areaChart.vue'
import CPUHistoryChart from './components/CPUHistoryChart.vue';
import RAMBarChart from './components/RAMBarChart.vue';
import RAMHistoryChart from './components/RAMHistoryChart.vue'
import StorageBarChart from './components/storageBarChart.vue';
import StorageHistoryChart from './components/storageHistoryChart.vue';


definePageMeta({
  layout: "no-ssr"
})

</script>

<style scoped>

</style>