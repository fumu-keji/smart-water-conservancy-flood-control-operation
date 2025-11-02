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
    color: ["#4EA8FF", "#3A81C7", "#11467E", "#29B6F6", "#4FC3F7"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#3A81C7",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
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
        data: [5, 8, 12, 18, 25, 20, 15],
        type: "line",
        smooth: true,
        lineStyle: {
          width: 3,
          color: "#4EA8FF",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(78,168,255,0.4)",
            },
            {
              offset: 1,
              color: "rgba(78,168,255,0.1)",
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
