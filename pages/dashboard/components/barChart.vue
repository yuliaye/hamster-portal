<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Total Cores：{{ totalCpu }}</div>
    <div id="cpu-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
const coresData = ref([])
const totalCpu = ref(0)

onBeforeMount(async () => {
  await getCoresData()
  initChart()
})

const getCoresData = async () => {
  const url = '/hamster/dashboard/total-cpu'
  await $fetch(url, {
    method: "GET",
  }).then((res) => {
    totalCpu.value = res.totalCpu
    for (let key in res) {
      if (key !== 'totalCpu') {
        coresData.value.push({ item: key, value: res[key] })
      }
    }
  }).catch((err) => {
    // console.log(err)
  })
}

const initChart = () => {
  const chart = new Chart({
    container: 'cpu-chart',
    autoFit: true,
    height: 294,
  });
  chart.data(coresData.value);
  // chart.scale('value', {
  //   // alias: '销售额(万)',
  //   nice: true,
  // });
  chart.axis('item', {
    tickLine: null
  });

  chart.tooltip({
    showMarkers: false
  });
  chart.legend(false)
  // chart.interaction('active-region');
  chart.interval().position('item*value').color('item', (val) => {
    if (val === 'generalTotalCpu') {
      return '#FF8A00';
    }
    if (val === 'enhancedTotalCpu') {
      return '#57D2B4'
    }
    return '#B835F5';
  })

  chart.render();
}

</script>
<style scoped>

</style>