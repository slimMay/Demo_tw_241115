var dom = document.getElementById('P03-chart');
var myChart = echarts.init(dom, null, {
  useCoarsePointer :true,
  pointerSize: 100,  
  renderer: 'canvas',
  useDirtyRect: false
});

option = {
     title: {
        top: '10',
        left: 'center',
        text: '居住狀況分析',
        textStyle: {
            align: 'center',
            color: '#000',
            fontSize: 20,
        }

    },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        grid: {
            left: 0
        },
        legend: {
          bottom:0,
          data:['自宅','租屋','借住','養護機構','無固定居所'],
          textStyle: {
            fontSize: 16 }
        },
        series: [
            {
                name:'居住狀況',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '45%'],
                label: {
                    normal: {
                        position: 'inner',
                        fontSize: 14
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:501, name:'自宅 (有貸款)', selected:true},
                    {value:2996, name:'自宅 (無貸款)'}
                ]
            },
            {
                name:'居住狀況',
                type:'pie',
                radius: ['50%', '60%'],
                label: {
                    normal: {
                            fontSize:18
                             }
                    },
                data:[
                    {value:3497, name:'自宅'},
                    {value:4387, name:'租屋'},
                    {value:999, name:'借住'},
                    {value:209, name:'養護機構'},
                    {value:71, name:'無固定居所'}
                ]                
            }
        ]
    };
        myChart.setOption(option);
        function randomData() {
            return Math.round(Math.random()*1000);
        }

window.addEventListener('resize', myChart.resize);