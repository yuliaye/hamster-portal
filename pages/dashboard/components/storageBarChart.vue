<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Total Storage：{{ totalStorage }} TB</div>
    <div id="storag-total-chart"></div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue'
import { Chart } from '@antv/g2';
const storageData = ref([])
const totalStorage = ref(0)

onBeforeMount(async () => {
  await getCoresData()
  initChart()
})

const getCoresData = async () => {
  const url = '/hamster/dashboard/total-storage'
  await $fetch(url, {
    method: "GET",
  }).then((res) => {
    totalStorage.value = res.totalStorage
    for (let key in res) {
      if (key !== 'totalStorage') {
        storageData.value.push({ item: key, value: res[key] })
      }
    }
  }).catch((err) => {
    console.log(err)
  })
}

const initChart = () => {
  const chart = new Chart({
    container: 'storag-total-chart',
    autoFit: true,
    height: 294,
  });
  chart.data(storageData.value);

  chart.axis('item', {
    tickLine: null
  });

  chart.axis('value', {
    tickLine: null,
    grid: {
      line: {
        style: {
          stroke: '#807D7C',
        }
      }
    }
  });

  chart.tooltip({
    showMarkers: false
  });
  chart.legend(false)
  // chart.interaction('active-region');
  chart.interval().position('item*value').color('item', (val) => {
    if (val === 'generalTotalStorage') {
      return '#FF8A00';
    }
    if (val === 'enhancedTotalStorage') {
      return '#57D2B4'
    }
    return '#B835F5';
  }).tooltip('item*value', (item, value) => {
    value = value + 'TB';
    return {
      name: item,
      value: value,
    };
  });

  chart.render();
}

</script>
<style scoped>

</style>