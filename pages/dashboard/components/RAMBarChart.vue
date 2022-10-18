<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Total RAM：{{ totalRam }} TB</div>
    <div id="RAM-total-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
const RamData = ref([])
const totalRam = ref(0)

onBeforeMount(async () => {
  await getCoresData()
  initChart()
})

const getCoresData = async () => {
  const url = '/hamster/dashboard/total-ram'
  await $fetch(url, {
    method: "GET",
  }).then((res) => {
    totalRam.value = res.totalRam
    for (let key in res) {
      if (key !== 'totalRam') {
        RamData.value.push({ item: key, value: res[key] })
      }
    }
  }).catch((err) => {
    console.log(err)
  })
}

const initChart = () => {
  const chart = new Chart({
    container: 'RAM-total-chart',
    autoFit: true,
    height: 294,
  });
  chart.data(RamData.value);
  chart.axis('item', {
    tickLine: null
  });

  chart.tooltip({
    showMarkers: false
  });
  chart.legend(false)
  // chart.interaction('active-region');
  chart.interval().position('item*value').color('item', (val) => {
    if (val === 'generalTotalRam') {
      return '#FF8A00';
    }
    if (val === 'enhancedTotalRam') {
      return '#57D2B4'
    }
    return '#B835F5';
  })

  chart.render();
}

</script>
<style scoped>

</style>