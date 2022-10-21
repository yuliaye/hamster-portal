<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Nodes History</div>
    <div id="area-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
import { paseDate } from '../common'

const nodesHistoryData = ref([])

onMounted(async () => {
  await getNodesHistoryData()
  initChart()
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