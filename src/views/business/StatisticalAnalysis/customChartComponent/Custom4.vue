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
      "#2E7CD6",
      "#11467E",
      "#5B9BD5",
      "#70AD47",
      "#FFC000",
    ],
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#4EA8FF",
      textStyle: {
        color: "#fff",
      },
    },
    radar: {
      indicator: [
        {
          name: "预警能力",
          max: 100,
        },
        {
          name: "响应速度",
          max: 100,
        },
        {
          name: "调度精度",
          max: 100,
        },
        {
          name: "设备状态",
          max: 100,
        },
        {
          name: "人员素质",
          max: 100,
        },
        {
          name: "应急保障",
          max: 100,
        },
      ],
      axisName: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(78,168,255,0.3)",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["rgba(78,168,255,0.1)", "rgba(78,168,255,0.05)"],
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(78,168,255,0.5)",
        },
      },
    },
    series: [
      {
        name: "防汛能力评估",
        type: "radar",
        data: [
          {
            value: [95, 88, 92, 98, 91, 89],
            name: "当前能力",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(78,168,255,0.6)",
                },
                {
                  offset: 1,
                  color: "rgba(78,168,255,0.1)",
                },
              ]),
            },
            lineStyle: {
              width: 2,
            },
          },
          {
            value: [85, 78, 82, 88, 83, 80],
            name: "历史平均",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(104,224,255,0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(104,224,255,0.05)",
                },
              ]),
            },
            lineStyle: {
              width: 2,
              type: "dashed",
            },
          },
        ],
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
