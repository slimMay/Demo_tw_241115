
var chartDom = document.getElementById("map4C");
var myChart2 = echarts.init(chartDom);
var option;
var uploadedDataURL = "https://slimMay.github.io/storeTW/twCounty2010.json";


// Data points by part
const dataByPart2 = {
    '人口數': [
        {name:'高雄市', value: [120.633972, 22.965108, 1385, 1,'高雄市']},       
        {name:'澎湖縣', value: [119.616760, 23.580294, 28, 20,'澎湖縣']},
        {name:'嘉義市', value: [120.443802, 23.491232, 162, 18,'嘉義市']},    
        {name:'嘉義縣', value: [120.638468, 23.492045, 214, 16,'嘉義縣']},   
        {name:'台南市', value: [120.326211, 23.167583, 989, 5,'台南市']},      
        {name:'雲林縣', value: [120.371406, 23.722020, 331, 11, '雲林縣']},
        {name:'屏東縣', value: [120.644845, 22.542893, 1038, 4,'屏東縣']},
        {name:'新北市', value: [121.526622, 24.873479, 1064, 3,'新北市']},
        {name:'台北市', value: [121.536444, 25.080149, 546, 8,'台北市']},
        {name:'基隆市', value: [121.709037, 25.115942, 252, 13,'基隆市']},
        {name:'桃園市', value: [121.229425, 24.908913, 679, 6,'桃園市']},
        {name:'宜蘭縣', value: [121.682747, 24.553903, 207, 17, '宜蘭縣']},
        {name:'台東縣', value: [121.054566, 22.872413, 519, 9,'台東縣']},  
        {name:'花蓮縣', value: [121.427729, 23.783188, 563, 7, '花蓮縣']},
        {name:'新竹市', value: [120.930721, 24.764270, 136, 19,'新竹市']}, 
        {name:'新竹縣', value: [121.158459, 24.676877, 220, 14,'新竹縣']},  
        {name:'金門縣', value: [118.389159, 24.450510, 12, 21,'金門縣']}, 
        {name:'台中市', value: [120.823711, 24.207529, 1241, 2,'台中市']},
        {name:'苗栗縣', value: [120.921116, 24.493472, 215, 15,'苗栗縣']},
        {name:'彰化縣', value: [120.472066, 23.990594, 347, 10,'彰化縣']},
        {name:'南投縣', value: [120.982222, 23.862057, 297, 12,'南投縣']}
     ]
 };



// Count totals for each part and build the legend with counts
const legendData2 = Object.keys(dataByPart2).map(part => `${part} (${dataByPart2[part].length})`);

fetch("https://slimMay.github.io/storeTW/twCounty2010.json")
  .then((response) => response.json())
  .then((geojson) => {
    echarts.registerMap('TW', geojson);
    option = {
      title: {
        text: '縣市人口數排行榜',
        left: 'center',
        textStyle: {
            align: 'center',
            color: '#0446cb',
            fontSize: 20,
            fontWeight:560
        }        
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          // Customize tooltip for the map series
          if (params.seriesType === 'map') {
            return `${params.name}<br/>門市數: ${params.value || '無數據'}`;
          }
        }
      },
      toolbox: {
        show: true,
        left: 'right',
        top: 2,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      geo: {
        map: 'TW',
        layoutCenter: ['45%', '38%'],
        layoutSize: '100%',
        aspectScale: 1,
        zoom: 1.1,
        label: {
          emphasis: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 11
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#e5e5e5',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: 'rgba(42, 50, 60, 0.75)'
          }
        }
      },
      legend: {
        orient: 'vertical',
        top: 20,
        left: 'left',
        data:['人口數合計'],
        //data:['服務量','開案數','人口數', '門市數'],
        textStyle: {
          fontSize: 15,
          color: '#000'
        }
      },
      visualMap: {
        min: 0,
        max: 200,
        left: 'left',
        bottom: 100,
        text: ['高', '低'],
        calculable: true,
        inRange: {
          color: ["#ffffff", "#b9e8fa"]
        },
        seriesIndex: [1] // Keep visualMap affecting only the map data
      },
      series: [
        {
          name: 'Top 5',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: [50, 50],
          label: {
           normal: {
              show: true,
              textStyle: {
               color: '#fff',
                fontSize: 20
              },
              formatter (value) {
                return value.data.value[3];
              }
            }
         },
         itemStyle: {
            color: '#1010e0', // Blue color for Top 5
            borderColor: '#fff'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if (params.seriesType === 'scatter') {
                return `${params.value[4]}／${params.value[5]}<br/>收案量: ${params.value[2]}`;
             }
            }
          },
          data: [
          ],
          zlevel: 3 // Ensure this layer is on top  排行123
        },
        {
          type: 'map',
          map: 'TW',
          geoIndex: 0,
          data: [
            {name: '台北市', value: 177},
            {name: '台中市', value: 164},
            {name: '台南市', value: 108},                    
            {name: '金門縣', value: 3},
            {name: '宜蘭縣', value: 26},
            {name: '新竹縣', value: 26},
            {name: '苗栗縣', value: 21},                
            {name: '彰化縣', value: 55},
            {name: '南投縣', value: 25},
            {name: '雲林縣', value: 36},
            {name: '嘉義縣', value: 17},
            {name: '屏東縣', value: 38},
            {name: '台東縣', value: 10},
            {name: '花蓮縣', value: 16},
            {name: '澎湖縣', value: 7},                
            {name: '基隆市', value: 21},
            {name: '新竹市', value: 22},
            {name: '嘉義市', value: 18},
            {name: '高雄市', value: 145},
            {name: '桃園縣', value: 100},
            {name: '新北市', value: 177}
          ],  //縣市總店數
          tooltip: {
            formatter: function (params) {
              return `${params.name}<br/>門市數 : ${params.value || '無數據'}`;
            }
          }
        },
        // Add scatter series for each part
        ...Object.keys(dataByPart2).map((part, index) => ({
          name: part,
          type: 'scatter',
          coordinateSystem: 'geo',
           symbol: 'pin',
          symbolSize: [50, 50],
           label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 18,
                fontWeight:600
              },
              formatter (value) {
                return value.data.value[3];
              }
            }
          },
          itemStyle: {
            color: ['#0446cb'][index],
            //color: ['#F46E36', '#33cc33', '#e40595', '#04B9FF'][index], // Unique color for each part
            //color: ['#ff3333', '#33cc33', '#e40595', '#ff9933', '#9631d4','#905cec', '#610741', '#f1f41f', '#15843c'][index], // Unique color for each part
            borderColor: '#fff'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if (params.seriesType === 'scatter') {
                return `${params.value[4]}<br/>人口數: ${params.value[2]}`;
              }
            }
          },
          data: dataByPart2[part],
          zlevel: 2 // Ensure these are on a separate layer below the top 5
        }))
      ]
    };

    myChart2.setOption(option);
  });
