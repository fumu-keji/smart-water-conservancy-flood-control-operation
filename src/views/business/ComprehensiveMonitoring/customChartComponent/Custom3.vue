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
    color: [
      "#4EA8FF",
      "#68E0FF",
      "#3A81C7",
      "#11467E",
      "#0D3460",
      "#082248",
      "#051830",
      "#031020",
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#4EA8FF",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      data: ["上游", "中游", "下游"],
      textStyle: {
        color: "#fff",
      },
      top: "5%",
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "20%",
    },
    xAxis: {
      type: "category",
      data: ["1时", "2时", "3时", "4时", "5时", "6时", "7时", "8时"],
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
      name: "流量(m³/s)",
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
        name: "上游",
        type: "line",
        smooth: true,
        data: [850, 880, 920, 950, 980, 1020, 1050, 1080],
      },
      {
        name: "中游",
        type: "line",
        smooth: true,
        data: [720, 750, 780, 810, 840, 870, 900, 930],
      },
      {
        name: "下游",
        type: "line",
        smooth: true,
        data: [580, 600, 620, 640, 660, 680, 700, 720],
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
