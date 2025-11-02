<template>
  <div id="page_1" class="page_1">
    <normal-component id="normal_1" ref="normal_1" class="normal_1">
      <normal-component id="normal_2" ref="normal_2" class="normal_2">
        <normal-component id="normal_3" ref="normal_3" class="normal_3">
          <text-component
            id="text_1"
            ref="text_1"
            class="text_1"
            columnAlign="normal"
            rowAlign="center"
            letterSpacing="6"
            text=" 智慧水利防洪调度 "
          />
          <flex-component id="flex_1" ref="flex_1" class="flex_1">
            <text-component
              id="text_2"
              ref="text_2"
              class="text_2"
              rowAlign="center"
              text=" 综合监测 "
              @click="text2Click"
            />
            <text-component
              id="text_3"
              ref="text_3"
              class="text_3"
              rowAlign="center"
              text=" 预警预报 "
            />
          </flex-component>
          <flex-component id="flex_2" ref="flex_2" class="flex_2">
            <text-component
              id="text_4"
              ref="text_4"
              class="text_4"
              rowAlign="center"
              text=" 调度指挥 "
              @click="text4Click"
            />
            <text-component
              id="text_6"
              ref="text_6"
              class="text_6"
              rowAlign="center"
              text=" 统计分析 "
              @click="text6Click"
            />
          </flex-component>
        </normal-component>
        <flex-component id="flex_3" ref="flex_3" class="flex_3">
          <normal-component id="normal_4" ref="normal_4" class="normal_4">
            <normal-component id="normal_5" ref="normal_5" class="normal_5">
              <text-component
                id="text_8"
                ref="text_8"
                class="text_8"
                letterSpacing="2"
                text=" 预警信息发布 "
              />
              <custom-1 class="custom_1" />
            </normal-component>
            <normal-component id="normal_6" ref="normal_6" class="normal_6">
              <text-component
                id="text_9"
                ref="text_9"
                class="text_9"
                letterSpacing="2"
                text=" 预警等级分布 "
              />
              <custom-2 class="custom_2" />
            </normal-component>
            <normal-component id="normal_7" ref="normal_7" class="normal_7">
              <text-component
                id="text_10"
                ref="text_10"
                class="text_10"
                letterSpacing="2"
                text=" 预警趋势分析 "
              />
              <custom-3 class="custom_3" />
            </normal-component>
          </normal-component>
          <normal-component id="normal_8" ref="normal_8" class="normal_8">
            <flex-component id="flex_4" ref="flex_4" class="flex_4">
              <flex-component id="flex_5" ref="flex_5" class="flex_5">
                <image-component
                  id="image_1"
                  ref="image_1"
                  class="image_1"
                  fit=""
                  src="https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594938761254.png"
                />
                <flex-component id="flex_6" ref="flex_6" class="flex_6">
                  <text-component
                    id="text_11"
                    ref="text_11"
                    class="text_11"
                    text="红色预警"
                  />
                  <text-component
                    id="text_12"
                    ref="text_12"
                    class="text_12"
                    text=" 12 "
                  />
                </flex-component>
              </flex-component>
              <flex-component id="flex_7" ref="flex_7" class="flex_7">
                <image-component
                  id="image_2"
                  ref="image_2"
                  class="image_2"
                  fit=""
                  src="https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594938761254.png"
                />
                <flex-component id="flex_8" ref="flex_8" class="flex_8">
                  <text-component
                    id="text_13"
                    ref="text_13"
                    class="text_13"
                    text="橙色预警"
                  />
                  <text-component
                    id="text_14"
                    ref="text_14"
                    class="text_14"
                    text=" 28 "
                  />
                </flex-component>
              </flex-component>
              <flex-component id="flex_9" ref="flex_9" class="flex_9">
                <image-component
                  id="image_3"
                  ref="image_3"
                  class="image_3"
                  fit=""
                  src="https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594938761254.png"
                />
                <flex-component id="flex_10" ref="flex_10" class="flex_10">
                  <text-component
                    id="text_15"
                    ref="text_15"
                    class="text_15"
                    text="黄色预警"
                  />
                  <text-component
                    id="text_16"
                    ref="text_16"
                    class="text_16"
                    text=" 45 "
                  />
                </flex-component>
              </flex-component>
              <flex-component id="flex_11" ref="flex_11" class="flex_11">
                <image-component
                  id="image_4"
                  ref="image_4"
                  class="image_4"
                  fit=""
                  src="https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594938761254.png"
                />
                <flex-component id="flex_12" ref="flex_12" class="flex_12">
                  <text-component
                    id="text_17"
                    ref="text_17"
                    class="text_17"
                    text="影响人口"
                  />
                  <text-component
                    id="text_18"
                    ref="text_18"
                    class="text_18"
                    text=" 3.2万 "
                  />
                </flex-component>
              </flex-component>
              <flex-component id="flex_13" ref="flex_13" class="flex_13">
                <image-component
                  id="image_5"
                  ref="image_5"
                  class="image_5"
                  fit=""
                  src="https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319594938761254.png"
                />
                <flex-component id="flex_14" ref="flex_14" class="flex_14">
                  <text-component
                    id="text_19"
                    ref="text_19"
                    class="text_19"
                    text="风险区域"
                  />
                  <text-component
                    id="text_20"
                    ref="text_20"
                    class="text_20"
                    text=" 18个 "
                  />
                </flex-component>
              </flex-component>
            </flex-component>
            <map-component
              id="map_1"
              class="map_1"
              ref="map_1"
              :mapAttribute="map1Mapattribute"
              :baseLayer="map1BaseLayer"
            />
          </normal-component>
          <normal-component id="normal_9" ref="normal_9" class="normal_9">
            <normal-component id="normal_10" ref="normal_10" class="normal_10">
              <text-component
                id="text_21"
                ref="text_21"
                class="text_21"
                letterSpacing="2"
                text=" 洪水预报成果 "
              />
              <flex-component id="flex_15" ref="flex_15" class="flex_15">
                <flex-component id="flex_16" ref="flex_16" class="flex_16">
                  <flex-component id="flex_17" ref="flex_17" class="flex_17">
                    <text-component
                      id="text_22"
                      ref="text_22"
                      class="text_22"
                      text="洪峰到达时间"
                    />
                    <text-component
                      id="text_23"
                      ref="text_23"
                      class="text_23"
                      text="14:30 "
                    />
                  </flex-component>
                  <flex-component id="flex_18" ref="flex_18" class="flex_18">
                    <text-component
                      id="text_24"
                      ref="text_24"
                      class="text_24"
                      text="预计水位"
                    />
                    <text-component
                      id="text_25"
                      ref="text_25"
                      class="text_25"
                      text="28.5m "
                    />
                  </flex-component>
                </flex-component>
                <flex-component id="flex_19" ref="flex_19" class="flex_19">
                  <flex-component id="flex_20" ref="flex_20" class="flex_20">
                    <text-component
                      id="text_26"
                      ref="text_26"
                      class="text_26"
                      text="洪峰流量"
                    />
                    <text-component
                      id="text_27"
                      ref="text_27"
                      class="text_27"
                      text="5200m³/s "
                    />
                  </flex-component>
                  <flex-component id="flex_21" ref="flex_21" class="flex_21">
                    <text-component
                      id="text_28"
                      ref="text_28"
                      class="text_28"
                      text="演进速度"
                    />
                    <text-component
                      id="text_29"
                      ref="text_29"
                      class="text_29"
                      text="3.2km/h "
                    />
                  </flex-component>
                </flex-component>
                <flex-component id="flex_22" ref="flex_22" class="flex_22">
                  <flex-component id="flex_23" ref="flex_23" class="flex_23">
                    <text-component
                      id="text_30"
                      ref="text_30"
                      class="text_30"
                      text="持续时间"
                    />
                    <text-component
                      id="text_31"
                      ref="text_31"
                      class="text_31"
                      text="6小时 "
                    />
                  </flex-component>
                  <flex-component id="flex_24" ref="flex_24" class="flex_24">
                    <text-component
                      id="text_32"
                      ref="text_32"
                      class="text_32"
                      text="预警等级"
                    />
                    <text-component
                      id="text_33"
                      ref="text_33"
                      class="text_33"
                      text="橙色 "
                    />
                  </flex-component>
                </flex-component>
              </flex-component>
            </normal-component>
            <normal-component id="normal_11" ref="normal_11" class="normal_11">
              <text-component
                id="text_34"
                ref="text_34"
                class="text_34"
                letterSpacing="2"
                text=" 风险区域分析 "
              />
              <custom-4 class="custom_4" />
            </normal-component>
            <normal-component id="normal_12" ref="normal_12" class="normal_12">
              <text-component
                id="text_35"
                ref="text_35"
                class="text_35"
                letterSpacing="2"
                text=" 预警统计查询 "
              />
              <custom-5 class="custom_5" />
            </normal-component>
          </normal-component>
        </flex-component>
        <normal-component id="normal_13" ref="normal_13" class="normal_13">
        </normal-component>
      </normal-component>
    </normal-component>
  </div>
</template>
<script>
import mixin from "./WarningForecast";
import mixinConfig from "./WarningForecastConfig";
import Custom5 from "./customChartComponent/Custom5.vue";
import Custom4 from "./customChartComponent/Custom4.vue";
import Custom3 from "./customChartComponent/Custom3.vue";
import Custom2 from "./customChartComponent/Custom2.vue";
import Custom1 from "./customChartComponent/Custom1.vue";
export default {
  mixins: [mixin, mixinConfig],
  name: "WarningForecast",
  components: {
    Custom5,
    Custom4,
    Custom3,
    Custom2,
    Custom1,
  },
  data() {
    return {
      modelOption: {},
      map1BaseLayer: {
        terrainNoteUrl:
          "http://t1.tianditu.gov.cn/cta_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorBaseLayerName: "vec",
        terrainBaseUrl:
          "http://t1.tianditu.gov.cn/ter_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorNoteLayerName: "cva",
        imageBaseLayerName: "img",
        imageNoteUrl:
          "http://t1.tianditu.gov.cn/cia_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        vectorBaseUrl:
          "http://t1.tianditu.gov.cn/vec_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        imageNoteLayerName: "cia",
        terrainNoteLayerName: "cta",
        imageBaseUrl:
          "http://t1.tianditu.gov.cn/img_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
        terrainBaseLayerName: "ter",
        vectorNoteUrl:
          "http://t1.tianditu.gov.cn/cva_c/wmts?tk=03dd8495c94ffa92a3f1ffe4ed647be8",
      },
      map1Mapattribute: {
        mapToggleAttr: {
          bottom: 5,
          show: true,
          right: 1,
        },
        defaultZoom: 10,
        maxZoom: 22,
        baseLayerSource: "mapWorld",
        toolBarAttr: {
          area: true,
          length: true,
          draw: true,
          right: 1,
          fullscreen: true,
          top: 5,
          position: true,
        },
        zoomAttr: {
          show: true,
          right: 1,
          top: 60,
        },
        minZoom: 2,
        suffix: "",
        showBaseLayer: true,
        staticImgUrl: "",
        scaleAttr: {
          bottom: 3,
          show: true,
          left: 35,
        },
        baseLayerToken: "03dd8495c94ffa92a3f1ffe4ed647be8",
        defaultCenterPoint: "114.300894,30.594360",
        coordinateAttr: {
          bottom: 5,
          show: true,
          left: 0,
        },
        projection: "EPSG:4490",
      },
    };
  },
  created() {},
  watch: {},
  mounted() {},
  methods: {
    /**
     * 页面跳转-综合监测
     */
    text2Click() {
      // 当前页面跳转
      this.$router.push({ name: "ComprehensiveMonitoring" });
    },

    /**
     * 页面跳转-调度指挥
     */
    text4Click() {
      // 当前页面跳转
      this.$router.push({ name: "DispatchCommand" });
    },

    /**
     * 页面跳转-统计分析
     */
    text6Click() {
      // 当前页面跳转
      this.$router.push({ name: "StatisticalAnalysis" });
    },
  },
};
</script>
<style lang="less" scoped>
.page_1 {
  min-width: 1300px;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  overflow: auto;
  .normal_1 {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    .normal_2 {
      background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319591381991462.png");
      width: 100%;
      box-sizing: border-box;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      .normal_3 {
        background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319591463780390.png");
        width: 100%;
        box-sizing: border-box;
        background-size: 100% 100%;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        height: 116px;
        .text_1 {
          color: #daebff;
          background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319591491043366.png");
          display: flex;
          box-sizing: border-box;
          transform: translateX(-50%);
          top: 0px;
          left: 50%;
          width: 547px;
          font-size: 40px;
          background-size: 100% 100%;
          position: absolute;
          background-position: center;
          background-repeat: no-repeat;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
          font-weight: bold;
          height: 100%;
        }
        .flex_1 {
          align-items: center;
          top: 22px;
          flex-wrap: nowrap;
          left: 150px;
          display: flex;
          width: 450px;
          box-sizing: border-box;
          position: absolute;
          justify-content: space-around;
          .text_2 {
            cursor: pointer;
            color: #fff;
            display: flex;
            width: 130px;
            box-sizing: border-box;
            font-size: 14px;
            height: 37px;
          }
          .text_3 {
            cursor: pointer;
            color: #fff;
            background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319596723437606.png");
            display: flex;
            width: 130px;
            box-sizing: border-box;
            font-size: 14px;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            height: 37px;
          }
        }
        .flex_2 {
          align-items: center;
          top: 22px;
          flex-wrap: nowrap;
          display: flex;
          width: 450px;
          box-sizing: border-box;
          right: 150px;
          position: absolute;
          justify-content: space-around;
          .text_4 {
            cursor: pointer;
            color: #fff;
            display: flex;
            width: 130px;
            box-sizing: border-box;
            font-size: 14px;
            height: 37px;
          }
          .text_6 {
            cursor: pointer;
            color: #fff;
            display: flex;
            width: 130px;
            box-sizing: border-box;
            font-size: 14px;
            height: 37px;
          }
        }
      }
      .flex_3 {
        padding: 0px 14px 14px;
        margin: -25px 0px 0px 0px;
        flex-wrap: nowrap;
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: flex-start;
        margin-top: -25px;
        height: calc(100% - 136px);
        .normal_4 {
          width: 415px;
          box-sizing: border-box;
          height: 100%;
          .normal_5 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_8 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .custom_1 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 51px);
            }
          }
          .normal_6 {
            width: 100%;
            margin: 15px 0;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_9 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .custom_2 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 51px);
            }
          }
          .normal_7 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_10 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .custom_3 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 51px);
            }
          }
        }
        .normal_8 {
          width: calc(100% - 830px);
          padding: 10px 20px 20px;
          box-sizing: border-box;
          height: 100%;
          .flex_4 {
            flex-wrap: nowrap;
            display: flex;
            width: 100%;
            box-sizing: border-box;
            justify-content: space-around;
            height: 60px;
            .flex_5 {
              align-items: center;
              flex-wrap: nowrap;
              display: flex;
              box-sizing: border-box;
              justify-content: flex-start;
              height: 100%;
              .image_1 {
                margin-right: 5px;
                width: 60px;
                margin: 0px 5px 0px 0px;
                box-sizing: border-box;
                height: 60px;
              }
              .flex_6 {
                flex-wrap: nowrap;
                flex-direction: column;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                height: 100%;
                .text_11 {
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
                .text_12 {
                  font-size: 18px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
              }
            }
            .flex_7 {
              align-items: center;
              flex-wrap: nowrap;
              display: flex;
              box-sizing: border-box;
              justify-content: flex-start;
              height: 100%;
              .image_2 {
                margin-right: 5px;
                width: 60px;
                margin: 0px 5px 0px 0px;
                box-sizing: border-box;
                height: 60px;
              }
              .flex_8 {
                flex-wrap: nowrap;
                flex-direction: column;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                height: 100%;
                .text_13 {
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
                .text_14 {
                  font-size: 18px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
              }
            }
            .flex_9 {
              align-items: center;
              flex-wrap: nowrap;
              display: flex;
              box-sizing: border-box;
              justify-content: flex-start;
              height: 100%;
              .image_3 {
                margin-right: 5px;
                width: 60px;
                margin: 0px 5px 0px 0px;
                box-sizing: border-box;
                height: 60px;
              }
              .flex_10 {
                flex-wrap: nowrap;
                flex-direction: column;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                height: 100%;
                .text_15 {
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
                .text_16 {
                  font-size: 18px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
              }
            }
            .flex_11 {
              align-items: center;
              flex-wrap: nowrap;
              display: flex;
              box-sizing: border-box;
              justify-content: flex-start;
              height: 100%;
              .image_4 {
                margin-right: 5px;
                width: 60px;
                margin: 0px 5px 0px 0px;
                box-sizing: border-box;
                height: 60px;
              }
              .flex_12 {
                flex-wrap: nowrap;
                flex-direction: column;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                height: 100%;
                .text_17 {
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
                .text_18 {
                  font-size: 18px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
              }
            }
            .flex_13 {
              align-items: center;
              flex-wrap: nowrap;
              display: flex;
              box-sizing: border-box;
              justify-content: flex-start;
              height: 100%;
              .image_5 {
                margin-right: 5px;
                width: 60px;
                margin: 0px 5px 0px 0px;
                box-sizing: border-box;
                height: 60px;
              }
              .flex_14 {
                flex-wrap: nowrap;
                flex-direction: column;
                display: flex;
                box-sizing: border-box;
                justify-content: space-around;
                height: 100%;
                .text_19 {
                  font-size: 14px;
                  box-sizing: border-box;
                  color: #fff;
                  display: flex;
                }
                .text_20 {
                  font-size: 18px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
              }
            }
          }
          .map_1 {
            width: 100%;
            box-sizing: border-box;
            position: relative;
            height: calc(100% - 60px);
          }
        }
        .normal_9 {
          width: 415px;
          box-sizing: border-box;
          height: 100%;
          .normal_10 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_21 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .flex_15 {
              padding: 10px 10px 0 10px;
              flex-wrap: nowrap;
              flex-direction: column;
              display: flex;
              gap: 10px;
              width: 100%;
              box-sizing: border-box;
              justify-content: flex-start;
              height: calc(100% - 51px);
              .flex_16 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_17 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_22 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_23 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
                .flex_18 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_24 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_25 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
              }
              .flex_19 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_20 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_26 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_27 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
                .flex_21 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_28 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_29 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
              }
              .flex_22 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_23 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_30 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_31 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
                .flex_24 {
                  padding: 0px 0px 0px 68px;
                  flex-direction: column;
                  background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319595748261926.png");
                  display: flex;
                  box-sizing: border-box;
                  justify-content: center;
                  flex-wrap: nowrap;
                  flex: 1;
                  background-size: 100% 100%;
                  background-position: center;
                  background-repeat: no-repeat;
                  padding-left: 68px;
                  height: 100%;
                  .text_32 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_33 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
              }
            }
          }
          .normal_11 {
            width: 100%;
            margin: 15px 0;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_34 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .custom_4 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 51px);
            }
          }
          .normal_12 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_35 {
              padding: 0px 0px 0px 10px;
              color: #fff;
              background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592707391526.png");
              display: flex;
              box-sizing: border-box;
              padding-bottom: 0px;
              width: 100%;
              font-size: 20px;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.83);
              padding-left: 10px;
              font-weight: bold;
              height: 51px;
            }
            .custom_5 {
              width: 100%;
              box-sizing: border-box;
              height: calc(100% - 51px);
            }
          }
        }
      }
      .normal_13 {
        background-image: url("https://fmy-simple-test.oss-cn-wuhan-lr.aliyuncs.com/fmCloud/2025-09-17/8319592097120294.png");
        width: 100%;
        box-sizing: border-box;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        height: 45px;
      }
    }
  }
}
</style>
