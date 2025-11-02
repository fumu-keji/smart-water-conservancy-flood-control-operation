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
    color: ["#4EA8FF", "#3A81C7", "#11467E", "#68E0FF", "#2E7CD6"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#4EA8FF",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      data: ["当前水情", "历史同期", "历史洪水"],
      textStyle: {
        color: "#fff",
      },
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
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
      name: "水位(m)",
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
        name: "当前水情",
        type: "line",
        data: [
          12.5, 13.2, 14.8, 16.5, 18.2, 22.5, 25.8, 24.3, 20.5, 17.2, 15.3,
          13.8,
        ],
        smooth: true,
        lineStyle: {
          width: 3,
        },
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
      },
      {
        name: "历史同期",
        type: "line",
        data: [
          11.8, 12.5, 13.9, 15.2, 17.8, 21.2, 23.5, 22.8, 19.2, 16.5, 14.8,
          12.9,
        ],
        smooth: true,
        lineStyle: {
          width: 2,
          type: "dashed",
        },
      },
      {
        name: "历史洪水",
        type: "line",
        data: [
          15.2, 16.8, 18.5, 21.2, 24.5, 28.9, 32.5, 30.8, 26.2, 22.5, 19.8,
          17.2,
        ],
        smooth: true,
        lineStyle: {
          width: 2,
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
