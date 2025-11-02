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
    color: ["#FF6B6B", "#FFA726", "#FFD54F", "#4FC3F7", "#29B6F6"],
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#3A81C7",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "50%"],
        data: [
          {
            value: 12,
            name: "暴雨预警",
          },
          {
            value: 28,
            name: "山洪预警",
          },
          {
            value: 45,
            name: "洪水预警",
          },
          {
            value: 18,
            name: "内涝预警",
          },
          {
            value: 8,
            name: "地质灾害",
          },
        ],
        label: {
          color: "#fff",
          fontSize: 12,
        },
        labelLine: {
          lineStyle: {
            color: "#fff",
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
