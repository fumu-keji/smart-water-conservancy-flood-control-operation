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
    color: ["#4EA8FF", "#68E0FF", "#3A81C7", "#2E7CD6", "#11467E"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#4EA8FF",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      data: ["防洪能力指数", "调度效率指数", "应急响应指数"],
      textStyle: {
        color: "#fff",
      },
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["2019", "2020", "2021", "2022", "2023", "2024"],
      axisLine: {
        lineStyle: {
          color: "#4EA8FF",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      name: "指数",
      nameTextStyle: {
        color: "#fff",
      },
      axisLine: {
        lineStyle: {
          color: "#4EA8FF",
        },
      },
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(78,168,255,0.2)",
        },
      },
    },
    series: [
      {
        name: "防洪能力指数",
        type: "line",
        data: [75, 78, 82, 86, 91, 95],
        smooth: true,
        lineStyle: {
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
      },
      {
        name: "调度效率指数",
        type: "line",
        data: [72, 76, 80, 84, 88, 92],
        smooth: true,
        lineStyle: {
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
      },
      {
        name: "应急响应指数",
        type: "line",
        data: [70, 74, 78, 83, 87, 90],
        smooth: true,
        lineStyle: {
          width: 3,
        },
        symbol: "circle",
        symbolSize: 8,
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
