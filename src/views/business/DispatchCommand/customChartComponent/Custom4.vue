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
    color: ["#4EA8FF", "#66BB6A", "#FFA726", "#AB47BC"],
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "救援力量",
        type: "pie",
        radius: "50%",
        data: [
          {
            value: 35,
            name: "消防救援队",
          },
          {
            value: 28,
            name: "武警部队",
          },
          {
            value: 22,
            name: "民兵应急队",
          },
          {
            value: 15,
            name: "专业救援队",
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
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
