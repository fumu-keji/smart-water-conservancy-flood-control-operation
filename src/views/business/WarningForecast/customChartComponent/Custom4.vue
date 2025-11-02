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
    color: ["#FF6B6B", "#FFA726", "#4FC3F7", "#66BB6A", "#AB47BC"],
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
        type: "treemap",
        data: [
          {
            name: "高风险区",
            value: 32000,
            itemStyle: {
              color: "#FF5252",
            },
          },
          {
            name: "中风险区",
            value: 58000,
            itemStyle: {
              color: "#FF9800",
            },
          },
          {
            name: "低风险区",
            value: 120000,
            itemStyle: {
              color: "#4FC3F7",
            },
          },
          {
            name: "安全区",
            value: 280000,
            itemStyle: {
              color: "#66BB6A",
            },
          },
          {
            name: "监测区",
            value: 45000,
            itemStyle: {
              color: "#AB47BC",
            },
          },
        ],
        label: {
          color: "#fff",
          fontSize: 12,
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
