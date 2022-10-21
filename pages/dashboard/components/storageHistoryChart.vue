<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Storage History</div>
    <div id="storag-history-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
import { paseDate } from '../common'

const storageHistoryData = ref([])

onMounted(async () => {
  await getStorageHistoryData()
  initChart()
})

const getStorageHistoryData = async () => {
  const url = '/hamster/dashboard/storage-history'
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

    const generalStorage = arr.filter(val => val.item === 'generalStorage')
    const enhancedStorage = arr.filter(val => val.item === 'enhancedStorage')
    const highRankingStorage = arr.filter(val => val.item === 'highRankingStorage')

    storageHistoryData.value = generalStorage.concat(...enhancedStorage, ...highRankingStorage)
  }).catch(err => {
    console.log(err)
  })
}

const initChart = () => {
  const chart = new Chart({
    container: 'storag-history-chart',
    autoFit: true,
    height: 294,
  });

  chart.data(storageHistoryData.value);
  chart.axis(false)
  // 横坐标无法显示时间格式
  // chart.scale('time', {
  //   type: 'linear',
  //   tickInterval: 50,
  // });
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
      'l(90) 0:rgba(155, 38, 203, 1) 1:rgba(46, 42, 40, 0.53)'])
    .tooltip('item*value', (item, value) => {
      value = value + 'TB';
      return {
        name: item,
        value: value,
      };
    });
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