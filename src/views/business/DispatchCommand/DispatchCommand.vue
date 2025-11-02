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
              @click="text3Click"
            />
          </flex-component>
          <flex-component id="flex_2" ref="flex_2" class="flex_2">
            <text-component
              id="text_4"
              ref="text_4"
              class="text_4"
              rowAlign="center"
              text=" 调度指挥 "
            />
            <text-component
              id="text_5"
              ref="text_5"
              class="text_5"
              rowAlign="center"
              text=" 统计分析 "
              @click="text5Click"
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
                text=" 指令执行监控 "
              />
              <custom-1 class="custom_1" />
            </normal-component>
            <normal-component id="normal_6" ref="normal_6" class="normal_6">
              <text-component
                id="text_9"
                ref="text_9"
                class="text_9"
                letterSpacing="2"
                text=" 执行进度分析 "
              />
              <custom-2 class="custom_2" />
            </normal-component>
            <normal-component id="normal_7" ref="normal_7" class="normal_7">
              <text-component
                id="text_10"
                ref="text_10"
                class="text_10"
                letterSpacing="2"
                text=" 异常告警统计 "
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
                    text="调度方案数"
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
                    text="执行进度"
                  />
                  <text-component
                    id="text_14"
                    ref="text_14"
                    class="text_14"
                    text=" 78% "
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
                    text="资源储备"
                  />
                  <text-component
                    id="text_16"
                    ref="text_16"
                    class="text_16"
                    text=" 156 "
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
                    text="救援力量"
                  />
                  <text-component
                    id="text_18"
                    ref="text_18"
                    class="text_18"
                    text=" 89 "
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
                    text="指令总数"
                  />
                  <text-component
                    id="text_20"
                    ref="text_20"
                    class="text_20"
                    text=" 245 "
                  />
                </flex-component>
              </flex-component>
            </flex-component>
            <flex-component id="flex_15" ref="flex_15" class="flex_15">
              <text-component
                id="text_21"
                ref="text_21"
                class="text_21"
                text=" 当前防洪调度方案 "
              />
              <flex-component id="flex_16" ref="flex_16" class="flex_16">
                <normal-component id="normal_9" ref="normal_9" class="normal_9">
                  <text-component
                    id="text_22"
                    ref="text_22"
                    class="text_22"
                    text=" 方案目标 "
                  />
                  <text-component
                    id="text_23"
                    ref="text_23"
                    class="text_23"
                    text=" 通过联合调度上游水库、中游分洪区和下游河道，确保洪峰流量控制在安全范围内，保障下游城市防洪安全。 "
                  />
                </normal-component>
                <normal-component
                  id="normal_10"
                  ref="normal_10"
                  class="normal_10"
                >
                  <text-component
                    id="text_24"
                    ref="text_24"
                    class="text_24"
                    text=" 调度措施 "
                  />
                  <text-component
                    id="text_25"
                    ref="text_25"
                    class="text_25"
                    text=" 1. 上游水库：提前预泄，腾出库容3.2亿立方米 "
                  />
                  <text-component
                    id="text_26"
                    ref="text_26"
                    class="text_26"
                    text=" 2. 中游分洪区：启用2处分洪区，分洪流量1500m³/s "
                  />
                  <text-component
                    id="text_27"
                    ref="text_27"
                    class="text_27"
                    text=" 3. 下游河道：加强堤防巡查，确保行洪畅通 "
                  />
                </normal-component>
                <normal-component
                  id="normal_11"
                  ref="normal_11"
                  class="normal_11"
                >
                  <text-component
                    id="text_28"
                    ref="text_28"
                    class="text_28"
                    text=" 执行状态 "
                  />
                  <flex-component id="flex_17" ref="flex_17" class="flex_17">
                    <tag-component
                      id="tag_1"
                      ref="tag_1"
                      class="tag_1"
                      type="success"
                      tagText="执行中"
                    />
                    <text-component
                      id="text_29"
                      ref="text_29"
                      class="text_29"
                      text=" 已完成78%，预计2小时后全部完成 "
                    />
                  </flex-component>
                </normal-component>
              </flex-component>
            </flex-component>
          </normal-component>
          <normal-component id="normal_12" ref="normal_12" class="normal_12">
            <normal-component id="normal_13" ref="normal_13" class="normal_13">
              <text-component
                id="text_30"
                ref="text_30"
                class="text_30"
                letterSpacing="2"
                text=" 应急资源分布 "
              />
              <flex-component id="flex_18" ref="flex_18" class="flex_18">
                <flex-component id="flex_19" ref="flex_19" class="flex_19">
                  <flex-component id="flex_20" ref="flex_20" class="flex_20">
                    <text-component
                      id="text_31"
                      ref="text_31"
                      class="text_31"
                      text="救生衣"
                    />
                    <text-component
                      id="text_32"
                      ref="text_32"
                      class="text_32"
                      text="3200 "
                    />
                  </flex-component>
                  <flex-component id="flex_21" ref="flex_21" class="flex_21">
                    <text-component
                      id="text_33"
                      ref="text_33"
                      class="text_33"
                      text="冲锋舟"
                    />
                    <text-component
                      id="text_34"
                      ref="text_34"
                      class="text_34"
                      text="45 "
                    />
                  </flex-component>
                </flex-component>
                <flex-component id="flex_22" ref="flex_22" class="flex_22">
                  <flex-component id="flex_23" ref="flex_23" class="flex_23">
                    <text-component
                      id="text_35"
                      ref="text_35"
                      class="text_35"
                      text="沙袋"
                    />
                    <text-component
                      id="text_36"
                      ref="text_36"
                      class="text_36"
                      text="85000 "
                    />
                  </flex-component>
                  <flex-component id="flex_24" ref="flex_24" class="flex_24">
                    <text-component
                      id="text_37"
                      ref="text_37"
                      class="text_37"
                      text="水泵"
                    />
                    <text-component
                      id="text_38"
                      ref="text_38"
                      class="text_38"
                      text="128 "
                    />
                  </flex-component>
                </flex-component>
                <flex-component id="flex_25" ref="flex_25" class="flex_25">
                  <flex-component id="flex_26" ref="flex_26" class="flex_26">
                    <text-component
                      id="text_39"
                      ref="text_39"
                      class="text_39"
                      text="应急照明"
                    />
                    <text-component
                      id="text_40"
                      ref="text_40"
                      class="text_40"
                      text="560 "
                    />
                  </flex-component>
                  <flex-component id="flex_27" ref="flex_27" class="flex_27">
                    <text-component
                      id="text_41"
                      ref="text_41"
                      class="text_41"
                      text="通讯设备"
                    />
                    <text-component
                      id="text_42"
                      ref="text_42"
                      class="text_42"
                      text="230 "
                    />
                  </flex-component>
                </flex-component>
              </flex-component>
            </normal-component>
            <normal-component id="normal_14" ref="normal_14" class="normal_14">
              <text-component
                id="text_43"
                ref="text_43"
                class="text_43"
                letterSpacing="2"
                text=" 救援力量分布 "
              />
              <custom-4 class="custom_4" />
            </normal-component>
            <normal-component id="normal_15" ref="normal_15" class="normal_15">
              <text-component
                id="text_44"
                ref="text_44"
                class="text_44"
                letterSpacing="2"
                text=" 方案效果评估 "
              />
              <custom-5 class="custom_5" />
            </normal-component>
          </normal-component>
        </flex-component>
        <normal-component id="normal_16" ref="normal_16" class="normal_16">
        </normal-component>
      </normal-component>
    </normal-component>
  </div>
</template>
<script>
import mixin from "./DispatchCommand";
import mixinConfig from "./DispatchCommandConfig";
import Custom5 from "./customChartComponent/Custom5.vue";
import Custom4 from "./customChartComponent/Custom4.vue";
import Custom3 from "./customChartComponent/Custom3.vue";
import Custom2 from "./customChartComponent/Custom2.vue";
import Custom1 from "./customChartComponent/Custom1.vue";
export default {
  mixins: [mixin, mixinConfig],
  name: "DispatchCommand",
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
     * 页面跳转-预警预报
     */
    text3Click() {
      // 当前页面跳转
      this.$router.push({ name: "WarningForecast" });
    },

    /**
     * 页面跳转-统计分析
     */
    text5Click() {
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
            display: flex;
            width: 130px;
            box-sizing: border-box;
            font-size: 14px;
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
          .text_5 {
            cursor: pointer;
            color: #fff;
            display: flex;
            width: 114px;
            box-sizing: border-box;
            font-size: 14px;
            height: 34px;
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
          .flex_15 {
            border: 1px solid rgba(78, 168, 255, 0.3);
            padding: 20px;
            border-radius: 8px;
            flex-wrap: nowrap;
            flex-direction: column;
            background: rgba(17, 70, 126, 0.1);
            display: flex;
            width: 100%;
            box-sizing: border-box;
            justify-content: flex-start;
            height: calc(100% - 60px);
            .text_21 {
              margin: 0px 0px 20px 0px;
              color: #4ea8ff;
              text-align: center;
              display: flex;
              box-sizing: border-box;
              font-size: 28px;
              margin-bottom: 20px;
              font-weight: bold;
            }
            .flex_16 {
              overflow-x: auto;
              overflow-y: auto;
              overflow: auto;
              flex-wrap: nowrap;
              flex-direction: column;
              flex: 1;
              display: flex;
              gap: 15px;
              box-sizing: border-box;
              justify-content: flex-start;
              .normal_9 {
                border-left: 4px solid #4ea8ff;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 6px;
                background: rgba(58, 129, 199, 0.2);
                .text_22 {
                  font-size: 20px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
                .text_23 {
                  margin: 10px 0px 0px 0px;
                  color: #daebff;
                  display: flex;
                  font-size: 16px;
                  box-sizing: border-box;
                  margin-top: 10px;
                }
              }
              .normal_10 {
                border-left: 4px solid #4ea8ff;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 6px;
                background: rgba(58, 129, 199, 0.2);
                .text_24 {
                  font-size: 20px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
                .text_25 {
                  margin: 10px 0px 0px 0px;
                  color: #daebff;
                  display: flex;
                  font-size: 16px;
                  box-sizing: border-box;
                  margin-top: 10px;
                }
                .text_26 {
                  margin: 5px 0px 0px 0px;
                  color: #daebff;
                  display: flex;
                  font-size: 16px;
                  box-sizing: border-box;
                  margin-top: 5px;
                }
                .text_27 {
                  margin: 5px 0px 0px 0px;
                  color: #daebff;
                  display: flex;
                  font-size: 16px;
                  box-sizing: border-box;
                  margin-top: 5px;
                }
              }
              .normal_11 {
                border-left: 4px solid #4ea8ff;
                padding: 15px;
                box-sizing: border-box;
                border-radius: 6px;
                background: rgba(58, 129, 199, 0.2);
                .text_28 {
                  font-size: 20px;
                  box-sizing: border-box;
                  color: #fff;
                  font-weight: bold;
                  display: flex;
                }
                .flex_17 {
                  margin: 10px 0px 0px 0px;
                  align-items: center;
                  flex-wrap: nowrap;
                  display: flex;
                  box-sizing: border-box;
                  justify-content: flex-start;
                  margin-top: 10px;
                  .tag_1 {
                    margin-right: 10px;
                    margin: 0px 10px 0px 0px;
                    box-sizing: border-box;
                    display: inline-flex;
                  }
                  .text_29 {
                    font-size: 16px;
                    box-sizing: border-box;
                    color: #68eaff;
                    display: flex;
                  }
                }
              }
            }
          }
        }
        .normal_12 {
          width: 415px;
          box-sizing: border-box;
          height: 100%;
          .normal_13 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_30 {
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
            .flex_18 {
              padding: 10px 10px 0 10px;
              flex-wrap: nowrap;
              flex-direction: column;
              display: flex;
              gap: 10px;
              width: 100%;
              box-sizing: border-box;
              justify-content: flex-start;
              height: calc(100% - 51px);
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
                  .text_31 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_32 {
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
                  .text_33 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_34 {
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
                  .text_35 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_36 {
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
                  .text_37 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_38 {
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
              .flex_25 {
                flex-wrap: nowrap;
                flex: 1;
                display: flex;
                gap: 15px;
                width: 100%;
                box-sizing: border-box;
                justify-content: flex-start;
                .flex_26 {
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
                  .text_39 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_40 {
                    margin: 2px 0px 0px 0px;
                    color: #68eaff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin-top: 2px;
                  }
                }
                .flex_27 {
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
                  .text_41 {
                    margin: 4px 0px 0px 0px;
                    color: #fff;
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin-top: 4px;
                  }
                  .text_42 {
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
          .normal_14 {
            width: 100%;
            margin: 15px 0;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_43 {
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
          .normal_15 {
            width: 100%;
            box-sizing: border-box;
            height: calc(33.3333% - 10px);
            .text_44 {
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
      .normal_16 {
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
