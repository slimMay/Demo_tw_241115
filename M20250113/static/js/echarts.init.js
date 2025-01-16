function getChartColorsArray(e) {
    e = $(e).attr("data-colors");
    return (e = JSON.parse(e)).map(function(e) {
        e = e.replace(" ", "");
        if ( - 1 == e.indexOf("--")) return e;
        e = getComputedStyle(document.documentElement).getPropertyValue(e);
        return e || void 0
    })
}
var lineColors = getChartColorsArray("#line-chart"),
dom = document.getElementById("line-chart"),
myChart = echarts.init(dom),
app = {};
var xData = ["2017-11", "2023-11", "2023-12", "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11"];
var yData1 = [1, 1, 262, 589, 381, 549, 1150, 687, 488, 578, 637, 572, 549, 312];
var yData2 = [0, 0, 59, 124, 92, 93, 107, 117, 96, 130, 127, 107, 125, 56];
var yData3 = [0, 0, 93, 167, 116, 138, 152, 173, 118, 157, 144, 156, 116, 77];
option = {
    title: {
        top: '0',
        left: 'center',
        text: '身分別分析',
        textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        }

    },
    backgroundColor: '#043491',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        x: 'center',
        y: '40px',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 13,
        },
        icon: 'circle',
        data: ['一般', '中低', '低收']
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            height: 20,
            left: '10%',
            right: '10%',
            bottom: '2%',
            start: 50,
            end: 100,
            textStyle: {
                color: '#d4ffff',
                fontSize: 11,
            },
        }, {
            type: 'inside'
        }

    ],
    grid: {
        right: '5%',
        bottom: '10%',
        left: '2%',
        top: '80px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        name: '月份',
        nameTextStyle: {
            color: '#d4ffff'
        },
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFF",
                fontSize: 12,
            },
            //interval:0,
            //rotate:30
        },
    }],
    yAxis: [{
        type: 'value',
        name: '人數',
        nameTextStyle: {
            color: '#d4ffff'
        },
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#0B4CA9",
            }

        },
        axisLabel: {
            color: '#d4ffff',
            fontSize: 12,
        }
    }, ],
    series: [{
            name: '一般',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#FC30EE',
                }
            },
            data: yData1
        },
        {
            name: '中低',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#ea4800',
                }
            },
            data: yData2
        },
        {
            name: '低收',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#0EF100',
                }
            },
            data: yData3
        }

    ]
},



option && "object" == typeof option && myChart.setOption(option, !0);
var mixlinebarColors = getChartColorsArray("#mix-line-bar"),
dom = document.getElementById("mix-line-bar"),
myChart = echarts.init(dom);

var xData = function() {
    var data = [];
    for (var i =1; i < 15; i++) {
        data.push(i + "");
    }
    return data;
}();
var xData = ["2017-11", "2023-11", "2023-12", "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11"];
option = {
    backgroundColor: "#043491",
    "title": {
        top: '0',
        left: 'center',
        text: '性別分析',
        textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        }
    //    subtextStyle: {
    //        color: '#90979c',
    //        fontSize: '16',

    //    },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 55,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#fff',
        },
        "data": ['女', '男', '總數']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 15,
        "xAxisIndex": [
            0
        ],
        bottom: 10,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "女",
            "type": "bar",
            "stack": "人數",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#f45b8a",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1,
                1,
                202,
                457,
                290,
                400,
                771,
                475,
                332,
                417,
                414,
                396,
                392,
                222
            ],
        },

        {
            "name": "男",
            "type": "bar",
            "stack": "人數",
            "itemStyle": {
                "normal": {
                    "color": "#0091ea",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                0,
                0,
                246,
                512,
                350,
                453,
                696,
                552,
                404,
                480,
                521,
                474,
                433,
                247
            ]
        }, {
            "name": "總數",
            "type": "line",
            "stack": "總數",
            symbolSize:12,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                1,1,448,969,640,853,1467,1027,736,897,935,870,825,469
            ]
        },
    ]
},

option && "object" == typeof option && myChart.setOption(option, !0);
var doughnutColors = getChartColorsArray("#Pie01-chart"),
dom = document.getElementById("Pie01-chart"),
myChart = echarts.init(dom),
app = {};
option = null,
option = {
    //backgroundColor: 'black',
    legend:{
         orient: 'vertical', // 'vertical'
        x: 'left', // 'center' | 'left' | {number},
        y: '80', // 'center' | 'bottom' | {number}
        padding: 10,    // [5, 10, 15, 20]
        itemGap: 10,
        textStyle: {color: '#000'},
    },
   // title: {
   //     text: '隐患详情',
   //     left: 'center',
    //    top: 20,
   //     textStyle: {
   //         color: '#d9efff'
   //     }
   // },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '急難救助 - 婚姻狀況',
        type: 'pie',
        radius: '80%',
            selectedMode: 'single',
            selectedOffset: 10,
        clockwise: true,
        center: ['50%', '50%'],
        color: ['#43cadd','#3893e5','#FCC708','#03B48E','#FBFE27','rgb(11,228,96)','#FE5050'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 2367,
                name: '未婚',
            },
            {
                value: 2775,
                name: '已婚'
            },
            {
                value: 2818,
                name: '離婚'
            },
            {
                value: 840,
                name: '喪偶',
            },
            {
                value: 182,
                name: '分居'
            },
            {
                value: 312,
                name: '同居'
            },
            {
                value: 642,
                name: '再婚'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                // formatter: ['{c|{b}{d}%}', '{b|{b}}'].join('\n'),
               // formatter: ['{b|{b}{d}%}', '{c|{c}万元}'].join('\n'),
                rich: {
                    b: {
                        color: '#d9efff',
                        fontSize: 15,
                        height: 40
                    },
                    c: {
                        color: '#000',
                        fontSize: 14,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                },
            }
        },
        itemStyle:{
          borderWidth:'20',
          color:'pink',
          borderColor:'#FFF',
          normal:{
          //borderWidth:'10',
          //borderColor:'rgba(0,0,0,2)',
          },
        },
        labelLine: {
            normal: {
                backgroundColor:'yellow',
                borderColor:'skyblue',
                borderWidth:10,
                lineStyle: {
                borderColor:'skyblue',
                borderWidth:10,
                backgroundColor:'yellow',
            }
        },


        
        }
    }]
},



option && "object" == typeof option && myChart.setOption(option, !0);
var doughnutColors = getChartColorsArray("#doughnut-chart"),
dom = document.getElementById("doughnut-chart"),
myChart = echarts.init(dom),
app = {};
option = null,
option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["意外受傷", "疾病", "入獄服刑", "癌症", "家人死亡", "其他", "非自願性失業", "天然災害", "失蹤", "無急難事由", "家人死亡"],
        textStyle: {
            color: "#858d98"
        }
    },
    color: doughnutColors,
    series: [{
        name: "急難事由",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: !1,
        label: {
            normal: {
                show: !1,
                position: "center"
            },
            emphasis: {
                show: !0,
                textStyle: {
                    fontSize: "30",
                    fontWeight: "bold"
                }
            }
        },
        labelLine: {
            normal: {
                show: !1
            }
        },
        data: [{
            value: 1496,
            name: "意外受傷"
        },
        {
            value: 2628,
            name: "疾病"
        },
        {
            value: 88,
            name: "入獄服刑"
        },
        {
            value: 1442,
            name: "癌症"
        },
        {
            value: 684,
            name: "家人死亡"
        },
        {
            value: 125,
            name: "其他"
        },
        {
            value: 106,
            name: "非自願性失業"
        },
        {
            value: 736,
            name: "天然災害"
        },
        {
            value: 6,
            name: "失蹤"
        },
        {
            value: 2634,
            name: "無急難事由"
        }]
    }]
},
option && "object" == typeof option && myChart.setOption(option, !0);
var pieColors = getChartColorsArray("#pie-chart"),
dom = document.getElementById("pie-chart"),
myChart = echarts.init(dom),
app = {};
option = null,
option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["自宅(無貸款)", "租屋", "借住", "自宅(有貸款)", "養護機構", "無固定居所"],
        textStyle: {
            color: "#858d98"
        }
    },
    color: pieColors,
    series: [{
        name: "居住狀況",
        type: "pie",
        radius: "75%",
        center: ["50%", "60%"],
        data: [{
            value: 2996,
            name: "自宅(無貸款)"
        },
        {
            value: 4387,
            name: "租屋"
        },
        {
            value: 999,
            name: "借住"
        },
        {
            value: 501,
            name: "自宅(有貸款)"
        },
        {
            value: 209,
            name: "養護機構"
        },
        {
            value: 71,
            name: "無固定居所"
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
            }
        }
    }]
},



setInterval(function() {
    option.series[0].data[0].value = +(100 * Math.random()).toFixed(2),
    myChart.setOption(option, !0)
},
2e3),
option && "object" == typeof option && myChart.setOption(option, !0);