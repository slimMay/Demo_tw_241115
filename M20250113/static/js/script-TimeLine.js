var dom = document.getElementById('main-TimeLine');
var myChart = echarts.init(dom, null, {
  useCoarsePointer :true,
  pointerSize: 100,  
  renderer: 'canvas',
  useDirtyRect: false
});
 // Timeline 分項
        let timelineItems = ['開案數', '不開案數', '總案數', '門市數'];
        let provinces = ['高雄市', '台中市', '新北市', '屏東縣', '台南市', '桃園市', '花蓮縣', '台北市', '台東縣','彰化縣','雲林縣','南投縣','基隆市','新竹縣','苗栗縣','嘉義縣','宜蘭縣','嘉義市','新竹市','澎湖縣','金門縣'];

        // 顏色分組
        let colorMap = {
            '開案數': '#F46E36',    // 橘色
            '不開案數': '#FFC809',  // 綠色
            '總案數': '#5DBD32',    // 黃色
            '門市數': '#04B9FF'     // 藍色
        };

        // 每個 Timeline 項目的數據
        let dataMap = {
            '開案數': [733,643,587,601,592,358,308,313,328,189,225,160,134,139,142,148,110,110,92,22,8],
            '不開案數': [652,598,477,437,397,321,255,233,191,158,106,137,118,81,73,66,97,52,44,6,4],
            '總案數': [1385,1241,1064,1038,989,679,563,546,519,347,331,297,252,220,215,214,207,162,136,28,12],
            '門市數': [145,164,177,38,108,100,16,135,10,55,36,25,21,26,21,17,26,18,22,7,3]
        };

        // 初始化 ECharts
        let chartDom = document.getElementById('main-TimeLine');
        let myChart = echarts.init(chartDom);

        // 動態產生配置選項
        let option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    data: timelineItems,
                    autoPlay: true,
                    playInterval: 2000,     
                    left: '10%',              
                    bottom: '1.0%',    
                    width: '80%',           
                    height: '6%',
                    label: { formatter: '{value}' ,
                        textStyle: {
                            fontWeight:400,
                            fontSize: 18}
                        },
                    symbolSize: 10,
                },
                title: {
                    text: '', // 動態加總
                    left: 'center',
                    textStyle: {
                            color: '#000',
                            fontSize: 26
                        }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow' }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                yAxis: {
                    type: 'category',
                    data: [], // 動態排序
                    axisLabel: { rotate:0,
                            textStyle: {
                            fontSize:15} },                    
                },
                xAxis: {
                    type: 'value',
                    name: '數量',
                    top:'5%',
                    position: 'top',
                    axisLabel: {
                            textStyle: {
                            fontSize:15} },    
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        data: [],
                        itemStyle: { color: '' },
                    }
                ]
            },
            options: timelineItems.map(item => {
                let sortedData = [];
                // 計算排序和加總
                let sum = dataMap[item].reduce((a, b) => a + b, 0);
                provinces.forEach((prov, idx) => {
                    sortedData.push({ name: prov, value: dataMap[item][idx] });
                });
                sortedData.sort((b, a) => b.value - a.value); // 依數量由大到小排序
                
                return {
                    title: { text:"全聯急難救助 - " +  `${item} (${sum})` },
                    yAxis: { data: sortedData.map(d => d.name) },
                    series: [
                        {
                            name: item,
                            type: 'bar',
                            data: sortedData.map(d => d.value),
                            itemStyle: { color: colorMap[item] }
                        }
                    ]
                };
            })
        };

        // 渲染圖表
       myChart.setOption(option);
         // 監聽視窗大小變化，並自動調整圖表
      window.addEventListener('resize', function () {
        myChart.resize();
      });