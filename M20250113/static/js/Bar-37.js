
dom = document.getElementById('Bar-37'),
myChart = echarts.init(dom),

//var dom = document.getElementById('Bar-37');
//var myChart = echarts.init(chartDom);

option = {  
    backgroundColor:"#0d1d67",
    timeline: {       
        axisType: 'category',      
        autoPlay: true,      
        playInterval: 1200,       
        x:0,  
        left:'10%',   
        width:'80%',
        lineStyle:{color: '#00ffff', width: 1, type: 'solid'},//轴线的颜色
        controlStyle: {
                showNextBtn: true,
                showPrevBtn:true,
                normal: {
                    color: '#00ffff',
                    borderColor: '#00ffff'
                },
                emphasis: {
                    color: '#00ffff',
                    borderColor: '#00ffff'
                }
        },
        checkpointStyle:{
                //symbol : 'auto',
                symbolSize : '16',
                color : '#f45b8a',
                borderColor : '#7d7b52',
                borderWidth : '4',
               // borderWidth : 'auto',
               
        },
        symbol:"circle",       //'image://./images/rk/point.png',
        data:['2013','2014','2015',{value:'2016',symbol: 'image://./images/rk/rect.png',  symbolSize : '15', },'2017',{value:'2018',symbol: 'image://./images/rk/rect.png',  symbolSize : '15', }],
        label:{
             show: true,
                interval: 'auto',
                rotate: 0,
                formatter: null,
                textStyle: {
                    color: '#00ffff'
                },
                emphasis:{
                    color:'#00ffff',
                }
        },
        itemStyle:{
            emphasis:{
                    color:'#00ffff',
                }
        }

    
    },
    options:[{ 
        title:{
            text:'單位：年齡',
            textStyle:{
                fontSize:20,
                color:"#00ffff",
                fontWeight:'normal'
            },
            left:2,
            top:8,
        },
        grid: {
            left:'0%',
            top:'8%',
            right: '2.5%',
            left:'2%',
            bottom: '16%',
            containLabel: true,
        },
        color: ["#0084ff", "#f45b8a"],
        legend: {
            orient: 'horizontal',
            x: 'right', 
            textStyle:{
                color:'#00ffff',
                fontSize:20
            },
            data: ['男', '女'],
            
    
        },
        tooltip : {
            trigger: 'axis',
            textStyle:{
                color:'#000',
                fontSize:16
            },
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: false // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: 
            function (params) {
            
               var name = '';
               var val = '';    
                for(var i of params){
                    name = i.name;                  
                    val += i.seriesName+"："+ Math.abs(i.value)+'%<br/>' 
                }
                return  name+'<br/>' + val
            }
        },
        
        xAxis: [{
            type: 'value',
            nameLocation:'center',
            axisLabel: {
              show: true,
              interval: '2',
                     textStyle:{
                        fontSize:18
                    },
              formatter: function (val) {
                    return Math.abs(val) + '%';
                }
            },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#068ab4'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#48d1fe'
                    }
                },
        }],
        yAxis: [{
            type: 'category',
            name:'',
            left:'center',
            axisLabel: {
                textStyle:{
                        fontSize:16
                    }
            },
            axisLine:{
                lineStyle:{
                    color:'#48d1fe'
                }
            },
            data: ['0-4', '5-9', '10-14', '15-19',
                    '20-24', '25-29', ],

            axisTick: {
                alignWithLabel: true,
            }
           
        }],
        series: [{
            name: '男',        
            type: 'bar',
            stack: '總人數',
            barWidth: '13',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            data: [ -3.2, -4.0, -5.0, -5.4,
                    -6.2, -5.8,
            ]
        }, {
            name: '女',
            type: 'bar',        
            stack: '總人數',
            barWidth: '13',
            label: {
                normal: {
                    show: false,
                    position: 'bottom'
                }
            },
            data: [ 3.2, 4.0, 5.0, 5.4,
                    6.2, 5.8, 
            ]   
            
        }]      
    },{
         series: [{        
            data: [ -3.0, -4.2, -5.2, -5.8,
                    -6.2, -5.8,
            ]
        }, {          
            data: [ 3.0, 4.2, 5.3, 5.8,
                    6.1, 5.9, 
            ]   
            
        }]
    },{
        series: [{
            data: [ -3.2, -4.0, -5.0, -5.4,
                    -6.2, -5.8,
            ]
       }, {        
            data: [ 3.2, 4.0, 5.0, 5.4,
                    6.2, 5.8, 
            ]   
            
        }]
    },{
         series: [{        
            data: [ -3.0, -4.2, -5.2, -5.8,
                    -6.2, -5.8,
            ]
        }, {          
            data: [ 3.0, 4.2, 5.3, 5.8,
                    6.1, 5.9, 
            ]   
            
        }]
    },{
        series: [{
            data: [ -3.2, -4.0, -5.0, -5.4,
                    -6.2, -5.8,
            ]
       }, {        
            data: [ 3.2, 4.0, 5.0, 5.4,
                    6.2, 5.8, 
            ]   
            
        }]
    },{
         series: [{        
            data: [ -3.0, -4.2, -5.2, -5.8,
                    -6.2, -5.8,
            ]
        }, {          
            data: [ 3.0, 4.2, 5.3, 5.8,
                    6.1, 5.9, 
            ]   
            
        }]
    },]
   
   
  
};
   


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);