<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Storage History</div>
    <div id="storag-history-chart"></div>
  </div>

</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';

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