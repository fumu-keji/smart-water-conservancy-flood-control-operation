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
    color: ["#EF5350", "#FFA726", "#FFEE58", "#66BB6A"],
    tooltip: {
      trigger: "axis",
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
      data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      axisLabel: {
        color: "#daebff",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#daebff",
      },
    },
    series: [
      {
        name: "异常告警",
        type: "line",
        smooth: true,
        data: [2, 5, 3, 8, 4, 6, 2],
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(239, 83, 80, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(239, 83, 80, 0.1)",
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
