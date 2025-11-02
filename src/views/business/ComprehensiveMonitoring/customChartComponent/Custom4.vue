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
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#4EA8FF",
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
            value: 35,
            name: "正常运行",
          },
          {
            value: 25,
            name: "维护中",
          },
          {
            value: 20,
            name: "离线",
          },
          {
            value: 15,
            name: "故障",
          },
          {
            value: 5,
            name: "待检修",
          },
        ],
        label: {
          color: "#fff",
          formatter: "{b}: {c}%",
        },
        itemStyle: {
          borderRadius: 5,
          borderColor: "#000",
          borderWidth: 2,
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
