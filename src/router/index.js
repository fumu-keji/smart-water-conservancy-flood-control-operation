import { createRouter, createWebHashHistory } from "vue-router";
// 引入模块路由

const routes = [
  {
    path: "/",
    component: () => import("@/components/singleComponent/Skeleton.vue"),
    redirect: { name: "ComprehensiveMonitoring" },
    children: [
      {
        path: "ComprehensiveMonitoring",
        name: "ComprehensiveMonitoring",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/ComprehensiveMonitoring/ComprehensiveMonitoring.vue"),
      },
      {
        path: "WarningForecast",
        name: "WarningForecast",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/WarningForecast/WarningForecast.vue"),
      },
      {
        path: "DispatchCommand",
        name: "DispatchCommand",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/DispatchCommand/DispatchCommand.vue"),
      },
      {
        path: "StatisticalAnalysis",
        name: "StatisticalAnalysis",
        meta: { activeMenuIndex: ""},
        component: () => import("@/views/business/StatisticalAnalysis/StatisticalAnalysis.vue"),
      },

    ],
  },

];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
