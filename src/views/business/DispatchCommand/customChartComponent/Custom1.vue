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
    color: ["#4EA8FF", "#3A81C7", "#11467E", "#68eaff", "#2E5F8A"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
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
      data: ["水库调度", "分洪区启用", "河道疏通", "堤防加固", "人员转移"],
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
        name: "指令数",
        type: "bar",
        data: [45, 28, 36, 52, 18],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#4EA8FF",
            },
            {
              offset: 1,
              color: "#3A81C7",
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
