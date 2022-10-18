<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·CPU History</div>
    <div id="cpu-history-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
import { paseDate } from '../common'

const cpuHistoryData = ref([])

onMounted(async () => {
  await getCpuHistoryData()
  initChart()
})

const getCpuHistoryData = async () => {
  const url = '/hamster/dashboard/cpu-history'
  await $fetch(url, {
    method: "GET",
  }).then(res => {
    let arr = []
    for (let key in res) {

      for (let val in res[key]) {
        arr.push({ item: val, date: key, value: res[key][val] })
      }
    }
    arr.forEach(item => {
      item.time = paseDate(item.date)
    })
    const generalCpu = arr.filter(val => val.item === 'generalCpu')
    const enhancedCpu = arr.filter(val => val.item === 'enhancedCpu')
    const highRankingCpu = arr.filter(val => val.item === 'highRankingCpu')

    cpuHistoryData.value = generalCpu.concat(...enhancedCpu, ...highRankingCpu)
  }).catch(err => {
    console.log(err)
  })
}

const initChart = () => {
  const chart = new Chart({
    container: 'cpu-history-chart',
    autoFit: true,
    height: 294,
  });

  chart.data(cpuHistoryData.value);
  chart.axis(false)
  chart.scale('value', {
    nice: true,
  });

  chart.tooltip({
    // 辅助线
    showCrosshairs: true,
    shared: true,
  });
  chart.legend(false)

  chart
    .area()
    .adjust('stack')
    .position('time*value')
    .color('item', ['l(90) 0:rgba(255, 153, 0, 0.45), 1:rgba(46, 42, 40, 0)',
      'l(90) 0:rgba(0, 255, 163, 0.31) 1:rgba(46, 42, 40, 0)',
      'l(90) 0:rgba(155, 38, 203, 1) 1:rgba(46, 42, 40, 0.53)']);
  chart
    .line()
    .adjust('stack')
    .position('time*value')
    .color('item', ['#FF8A00', '#57D2B4', '#B835F5'])
    .tooltip(false);

  chart.interaction('element-highlight');

  chart.render();
}

</script>
<style scoped>

</style>