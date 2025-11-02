<template>
  <echart-render
    ref="renderRef"
    :options="renderOptions"
    :chartModel="renderModel"
  />
</template>
<script setup>
import { ref, useAttrs, onMounted } from "vue";
import * as echarts from "echarts/core";
const attrs = useAttrs();
let renderRef = ref(null);
let renderOptions = ref(null);
let renderModel = ref("");
onMounted(() => {
  initChart();
});
function initChart() {
  let optionRow = {
    color: ["#4EA8FF", "#66BB6A", "#FFA726"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: ["方案A", "方案B", "方案C"],
      textStyle: {
        color: "#daebff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1h", "2h", "3h", "4h", "5h", "6h"],
      axisLabel: {
        color: "#daebff",
      },
    },
    yAxis: {
      type: "value",
      name: "洪峰流量(m³/s)",
      nameTextStyle: {
        color: "#daebff",
      },
      axisLabel: {
        color: "#daebff",
      },
    },
    series: [
      {
        name: "方案A",
        type: "line",
        smooth: true,
        data: [3200, 2800, 2400, 2000, 1800, 1600],
      },
      {
        name: "方案B",
        type: "line",
        smooth: true,
        data: [3200, 3000, 2600, 2200, 1900, 1700],
      },
      {
        name: "方案C",
        type: "line",
        smooth: true,
        data: [3200, 2900, 2500, 2100, 1850, 1650],
      },
    ],
  };
  if (optionRow) {
    renderOptions.value = optionRow;
    renderModel.value = attrs.darkModel ? "dark" : "light";
    renderRef.value.initRenderChart();
  }
}
defineExpose({
  initChart,
});
</script>
