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
      "#FF6B6B",
      "#FFA500",
      "#FFD700",
      "#4EA8FF",
      "#68E0FF",
      "#3A81C7",
      "#11467E",
      "#0D3460",
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#FF6B6B",
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "10%",
    },
    xAxis: {
      type: "category",
      data: ["红色", "橙色", "黄色", "蓝色"],
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
      name: "预警数量",
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
        type: "bar",
        data: [2, 5, 12, 28],
        barWidth: "50%",
        itemStyle: {
          color: function (params) {
            const colors = ["#FF6B6B", "#FFA500", "#FFD700", "#4EA8FF"];
            return colors[params.dataIndex];
          },
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
