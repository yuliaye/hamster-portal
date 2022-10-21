<template>
  <div>
    <div class="text-xl font-bold mb-[36px]">·Total Nodes：{{totalNodes}}</div>
    <div id="nodes-chart"></div>
  </div>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from '@antv/g2';

const nodesData = ref([])
const totalNodes = ref(0)


const getNodesData = async () => {
  const url = '/hamster/dashboard/total-nodes'
  await $fetch(url, {
    method: "GET",
  }).then((res) => {
    totalNodes.value = res.totalNodes
    for (let key in res) {
      if (key !== 'totalNodes') {
        let num = Number((res[key] / res.totalNodes).toFixed(2))
        nodesData.value.push({ item: key, count: res[key], percent: num })
      }
    }
  }).catch((err) => {
    console.log(err)
  })
}

onMounted(async () => {
  await getNodesData()
  initChart()
})

const initChart = () => {
  const chart = new Chart({
    container: 'nodes-chart',
    autoFit: true,
    height: 294,
  });
  chart.data(nodesData.value);
  chart.scale('percent', {
    formatter: (val) => {
      val = val * 100 + '%';
      return val;
    },
  });
  chart.coordinate('theta', {
    radius: 0.75,
    innerRadius: 0.6,
  });
  chart.tooltip({
    showTitle: false,
    showMarkers: false,
    itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
  });

  chart.legend(false)
  // 辅助文本
  chart
    .interval()
    .adjust('stack')
    .position('percent')
    .color('item', ['#FF8A00', '#57D2B4', '#B835F5'])
    .label('percent', (percent) => {
      return {
        content: (data) => {
          return `${data.item}: ${percent * 100}%`;
        },
        style: {
          fill: '#ffffff',
        }
      };
    })
    .tooltip('item*percent', (item, percent) => {
      percent = percent * 100 + '%';
      return {
        name: item,
        value: percent,
      };
    });

  chart.interaction('element-active');

  chart.render();
}

</script>
<style scoped>

</style>