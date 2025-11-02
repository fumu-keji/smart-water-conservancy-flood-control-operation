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
    color: ["#3A81C7", "#4EA8FF", "#11467E", "#29B6F6", "#4FC3F7"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#3A81C7",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      data: ["发布数量", "确认数量", "处理数量"],
      textStyle: {
        color: "#fff",
      },
      top: 10,
    },
    xAxis: {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月"],
      axisLine: {
        lineStyle: {
          color: "#3A81C7",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#3A81C7",
        },
      },
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(58,129,199,0.2)",
        },
      },
    },
    series: [
      {
        name: "发布数量",
        type: "bar",
        data: [120, 132, 101, 134, 90, 230],
        itemStyle: {
          color: "#4EA8FF",
        },
      },
      {
        name: "确认数量",
        type: "bar",
        data: [110, 122, 91, 124, 80, 210],
        itemStyle: {
          color: "#3A81C7",
        },
      },
      {
        name: "处理数量",
        type: "bar",
        data: [100, 110, 81, 114, 70, 190],
        itemStyle: {
          color: "#11467E",
        },
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
