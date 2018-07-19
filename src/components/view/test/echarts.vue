<template>
  <div class="echarts-container">
    <div class="chart-item">
      <div class="chart-title"></div>
      <div style="width: 100%; height: 100%; margin-bottom: 20px;" ref="echartContainer"></div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  const echarts = require('echarts');
  export default {
    name: 'echarts',
    data () {
      return {};
    },
    created () {
      this.setHeader();
      this.$nextTick(() => {
        this.initEcharts();
      });
    },
    methods: {
      ...mapMutations(['SET_HEADER']),
      setHeader () {
        this.SET_HEADER('ECHARTS');
      },
      initEcharts () {
        let myChart = echarts.init(this.$refs.echartContainer);
        let lineColor = ['#ff0000', '#00ff00', '#ffd700', '#000000'];
        let option = {
          title: {
            text: '体检图像'
          },
          grid: { // 坐标系设置
            top: '20%',
            left: '10%',
            right: '15%'
          },
          dataZoom: [
            {
              show: true,
              start: 30,
              end: 70,
              fillerColor: 'rgba(32, 160, 255, 0.25)',
              handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z'
            },
            {
              type: 'inside',
              start: 30,
              end: 70
            }
          ],
          tooltip: {
            trigger: 'axis',
            formatter: function (res) {
              return `<div class='tooltip-bar'><div class='tip-time'>时间： ${res[0].name}</div><div class="tips-val">数据： ${res[0].value}</div></div>`;
            }
          },
          xAxis: {
            type: 'category',
            name: '时间',
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisLabel: {
              color: '#333'
            },
            data: ['2018-05-22 08:00:00', '2018-05-22 08:01:15', '2018-05-22 08:02:30', '2018-05-22 08:03:45', '2018-05-22 08:05:00', '2018-05-22 08:06:15', '2018-05-22 08:07:30', '2018-05-22 08:08:45', '2018-05-22 08:10:00', '2018-05-22 08:11:15', '2018-05-22 08:12:30', '2018-05-22 08:13:45']
          },
          yAxis: {
            type: 'value',
            name: 'Air_pSensPIntkVUs',
            nameTextStyle: {
              padding: [0, 0, 0, 70]
            },
            axisLabel: {
              formatter: '{value}',
              color: '#333'
            },
            axisPointer: {
              snap: true
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisTick: {
              show: false,
              alignWithLabel: true
            },
            splitLine: {
              show: false
            }
          },
          visualMap: {
            show: false,
            pieces: [
              {
                max: 3,
                color: lineColor[0]
              },
              {
                min: 3,
                max: 6,
                color: lineColor[2]
              },
              {
                min: 6,
                max: 10,
                color: lineColor[1]
              },
              {
                min: 10,
                max: 14,
                color: lineColor[2]
              },
              {
                min: 14,
                color: lineColor[0]
              }]
          },
          series: [
            {
              name: '异常次数',
              type: 'line',
              smooth: true,
              lineStyle: {
                width: 2
              },
              data: [0, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 18]
            },
            {
              name: '限值1',
              type: 'line',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                width: 0,
                color: lineColor[0]
              },
              markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                  color: lineColor[0],
                  type: 'solid'
                },
                label: {
                  position: 'end',
                  formatter: function (params) {
                    return params.data.name;
                  }
                },
                data: [
                  {
                    name: '限值1',
                    yAxis: 3
                  }
                ]
              }
            },
            {
              name: '限值2',
              type: 'line',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                width: 0,
                color: lineColor[2]
              },
              markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                  color: lineColor[2],
                  type: 'solid'
                },
                label: {
                  position: 'end',
                  formatter: function (params) {
                    return params.data.name;
                  }
                },
                data: [
                  { name: '限值2', yAxis: 6 }
                ]
              }
            },
            {
              name: '限值3',
              type: 'line',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                width: 0,
                color: lineColor[2]
              },
              markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                  color: lineColor[2],
                  type: 'solid'
                },
                label: {
                  position: 'end',
                  formatter: function (params) {
                    return params.data.name;
                  }
                },
                data: [
                  { name: '限值3', yAxis: 10 }
                ]
              }
            },
            {
              name: '限值4',
              type: 'line',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                width: 0,
                color: lineColor[0]
              },
              markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                  color: lineColor[0],
                  type: 'solid'
                },
                label: {
                  position: 'end',
                  formatter: function (params) {
                    return params.data.name;
                  }
                },
                data: [
                  { name: '限值4', yAxis: 14 }
                ]
              }
            },
            {
              name: '平均值',
              type: 'line',
              smooth: true,
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                width: 0,
                color: lineColor[3]
              },
              markLine: {
                silent: true,
                symbolSize: 0,
                lineStyle: {
                  color: lineColor[3],
                  type: 'solid'
                },
                label: {
                  position: 'end',
                  formatter: function (params) {
                    return params.data.name;
                  }
                },
                data: [
                  { type: 'average', name: '平均值', yAxis: 13.6 }

                ]
              }
            }
          ]
        };
        myChart.setOption(option);
      }
    }
  };
</script>

<style lang="less">
  .tooltip-bar {
    padding: 10px;
  }
  .echarts-container {
    height: 100%;
    .chart-item {
      height: 90%;
    }
  }
</style>
