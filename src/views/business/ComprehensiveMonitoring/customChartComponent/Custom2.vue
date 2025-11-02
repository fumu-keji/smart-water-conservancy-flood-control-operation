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
      "#68E0FF",
      "#4EA8FF",
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
      borderColor: "#68E0FF",
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
      data: ["站点1", "站点2", "站点3", "站点4", "站点5", "站点6", "站点7"],
      axisLine: {
        lineStyle: {
          color: "#68E0FF",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      name: "水位(m)",
      nameTextStyle: {
        color: "#fff",
      },
      axisLine: {
        lineStyle: {
          color: "#68E0FF",
        },
      },
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(104,224,255,0.2)",
        },
      },
    },
    series: [
      {
        type: "bar",
        data: [25.6, 28.5, 26.8, 29.2, 27.5, 30.1, 28.8],
        barWidth: "60%",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#68E0FF",
            },
            {
              offset: 1,
              color: "#4EA8FF",
            },
          ]),
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
