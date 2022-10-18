<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·CPU History</div>
    <div id="cpu-history-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';

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


const paseDate = (val) => {
  val = val * 1
  let time = new Date(val)
  let y = time.getFullYear();
  let m = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  let s = time.getSeconds()
  return `${y}-${checkAddZero(m)}-${checkAddZero(d)} ${checkAddZero(h)}:${checkAddZero(mm)}:${checkAddZero(s)}`
}

const checkAddZero = (m) => {
  return m < 10 ? '0' + m : m
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
    .color('item', ['l(100) 0:#FF8A00 1:#ffffff', 'l(100) 0:#57D2B4 1:#ffffff', 'l(100) 0:#B835F5 1:#ffffff']);
  chart
    .line()
    .adjust('stack')
    .position('time*value')
    .color('item', ['#FF8A00', '#57D2B4', '#B835F5']);

  chart.interaction('element-highlight');

  chart.render();
}

</script>
<style scoped>

</style>