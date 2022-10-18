<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Nodes History</div>
    <div id="area-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';

const nodesHistoryData = ref([])

onMounted(async () => {
  await getNodesHistoryData()
  initChart()
  // const e = document.createEvent('Event')
  // e.initEvent('resize', true, true)
  // window.dispatchEvent(e)
})

const getNodesHistoryData = async () => {
  const url = '/hamster/dashboard/nodes-history'
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

    const generalNodes = arr.filter(val => val.item === 'generalNodes')
    const enhancedNodes = arr.filter(val => val.item === 'enhancedNodes')
    const highRankingNodes = arr.filter(val => val.item === 'highRankingNodes')

    nodesHistoryData.value = generalNodes.concat(...enhancedNodes, ...highRankingNodes)
  }).catch(err => {

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
    container: 'area-chart',
    autoFit: true,
    height: 294,
  });

  chart.data(nodesHistoryData.value);
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