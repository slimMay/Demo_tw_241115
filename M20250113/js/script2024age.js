var dom = document.getElementById('chart-container01');
var myChart = echarts.init(dom, null, {
  useCoarsePointer :true,
  pointerSize: 100,  
  renderer: 'canvas',
  useDirtyRect: false
});

//参考自  2024年年齡结構 

var age_gap = ['0-10歲', '11-20歲', '21-30歲', '31-40歲', '41-50歲', '51-60歲', '62-70歲', '71-80歲', '81-90歲', '91-100歲', '合計'];

var data_age = [ {
        "year": "宜蘭縣",
        "age_data": {
            "male": [],
            "female": [1,3,12,23,36,48,28,4,3,1,159]
        }
    }, {
        "year": "花蓮縣",
        "age_data": {
            "male": [],
            "female": [1,10,53,135,275,267,197,63,15,1,1017]
        }
    }, {
        "year": "金門縣",
        "age_data": {
            "male": [],
            "female": [0,0,0,1,1,1,3,0,0,0,6]
        }
    }, {
        "year": "南投縣",
        "age_data": {
            "male": [],
            "female": [0,1,20,47,82,90,52,22,6,0,320]
        }
    }, {
        "year": "屏東縣",
        "age_data": {
            "male": [],
            "female": [0,4,71,145,256,198,168,73,24,4,943]
        }
    }, {
        "year": "苗栗縣",
        "age_data": {
            "male": [],
            "female": [0,1,11,27,39,48,36,23,2,0,187]
        }
    }, {
        "year": "桃園市",
        "age_data": {
            "male": [],
            "female": [0,6,36,81,146,150,133,33,10,0,595]
        }
    }, {
        "year": "高雄市",
        "age_data": {
            "male": [],
            "female": [1,10,64,165,313,307,267,72,15,1,1215]
        }
    }, {
        "year": "基隆市",
        "age_data": {
            "male": [],
            "female": [0,2,19,34,65,79,61,32,3,0,295]
        }
    }, {
        "year": "雲林縣",
        "age_data": {
            "male": [0,5,8,27,83,67,54,24,4,0,272],
            "female": [0,0,3,5,9,7,8,0,1,0,33]
        }
    }, {
        "year": "新北市",
        "age_data": {
            "male": [0,8,70,142,276,263,226,72,11,2,1070],
            "female": []
        }
    }, {
        "year": "新竹市",
        "age_data": {
            "male": [1,3,9,16,29,35,32,9,1,0,135],
            "female": []
        }
    }, {
        "year": "新竹縣",
        "age_data": {
            "male": [2,5,9,29,53,39,32,15,4,0,188],
            "female": []
        }
    }, {
        "year": "嘉義市",
        "age_data": {
            "male": [0,1,5,17,22,25,20,9,3,0,102],
            "female": []
        }
    }, {
        "year": "嘉義縣",
        "age_data": {
            "male": [2,0,11,27,52,48,30,17,1,0,188],
            "female": []
        }
    }, {
        "year": "彰化縣",
        "age_data": {
            "male": [0,7,20,51,86,83,53,31,3,1,335],
            "female": []
        }
    }, {
        "year": "台中市",
        "age_data": {
            "male": [6,20,75,148,331,275,235,80,19,11,1200],
            "female": []
        }
    }, {
        "year": "台北市",
        "age_data": {
            "male": [3,7,39,78,133,147,94,49,10,3,563],
            "female": []
        }
    }, {
        "year": "台南市",
        "age_data": {
            "male": [10,17,45,111,218,193,144,63,19,5,825],
            "female": []
        }
    }, {
        "year": "台東縣",
        "age_data": {
            "male": [1,9,35,71,122,110,72,23,11,1,455],
            "female": []
        }
    }, {
        "year": "澎湖縣",
        "age_data": {
            "male": [0,2,1,3,5,16,5,2,1,1,36],
            "female": []
        }
    }, {
        "year": "全部統計",
        "age_data": {
            "male": [25,84,327,720,1410,1301,997,394,87,24,5369],
            "female": [3,37,289,663,1222,1195,953,322,79,7,4770]
        }
    },

];

option = {
    baseOption: {
        backgroundColor: '#363636',
        timeline: {
            show: true,
            left: '10%',
            right: '10%',
            //bottom: '3%',
            width: '80%',
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            autoPlay: true,
            // currentIndex: 6,
            playInterval: 1200,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                    interval: 'auto',
                    formatter: '{value}',
                },
            },
            symbolSize: 10,
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                borderColor: '#fff',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#fff',
                    borderColor: '#aaa'
                },
                emphasis: {
                    color: '#fff',
                    borderColor: '#aaa'
                }
            },
            data: [],
        },
        title: {
            top: '3%',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 18,                
                fontWeight:560
            },
            subtext: '數據來源，2024年',
            subtextStyle: {
                fontSize: 14
            }

        },
        legend: {
            data: ['男性', '女性'],
            top: 20,
            right: '1%',
            textStyle: {
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold'
            },

        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}',
            axisPointer: {
                type: 'shadow',
            }
        },

        grid: [{
            show: false,
            left: '10%',
            top: '15%',
            bottom: 60,
            containLabel: true,
            width: '40%',
        }, {
            show: false,
            left: '6%',
            top: 120,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            left: '50%',
            top: '15%',
            bottom: 60,
            containLabel: true,
            width: '40%',
        }],

        xAxis: [{
            type: 'value',
            inverse: true,
            //max: 6,
            //min: 0,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 15,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6E7783',
                    // width: 1,
                    type: 'dashed',
                },
            },
        }, {
            gridIndex: 1,
            show: false,

        }, {
            gridIndex: 2,
            // max: 6,
            // min: 0,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 15,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6E7783',
                    // width: 1,
                    type: 'dashed',
                },
            },
        }],
        yAxis: [{
            type: 'category',
            inverse: false,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: age_gap
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 17,
                },

            },
            data: age_gap.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#000',
                    fontSize: 12,
                },

            },
            data: age_gap,
        }],
        series: [],

    },

    options: [],


};

for (var i = 0; i < data_age.length; i++) {
    option.baseOption.timeline.data.push(data_age[i].year);


    option.options.push({
        title: {
            text: '全聯基金會 2024 ' + data_age[i].year + ' 急難救助男女人數、年龄分析',
            textStyle: {

                fontSize: 18,
                fontWeight:500
            }
        },
        series: [{
                name: '男性',
                type: 'bar',
                barGap: 5,
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#a6dcef',
                    },
                    emphasis: {
                        //color: '#08C7AE',
                    },
                },
                data: data_age[i].age_data.male,
            },


            {
                name: '女性',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#ff6363',
                    },
                    emphasis: {
                        // color: '#08C7AE',
                    },
                },
                data: data_age[i].age_data.female,
            }
        ]
    });
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);