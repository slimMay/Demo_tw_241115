var chartDom = document.getElementById("map2024List");
  var myChart2024L = echarts.init(chartDom);
  var option;


  fetch("./json/twCounty2010.json")
    .then((response) => response.json())
    .then((geojson) => {
      echarts.registerMap('TW', geojson);

      option = {
        backgroundColor:'#fff',
        //title: {
        //  text: '2024 全聯急難救助服務量',
        //  left: 'center',
       //   fontSize: 30,
        //  fontWeight:560
        // },
        tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                    if (params.seriesType === 'custom') {
                        const data = params.value;
                    return `${params.name}<br/>
                      開案數: ${data[2]}<br/>
                      不開案數: ${data[3]}<br/>
                      總服務數: ${data[4]}`;
                        }
                    return params.name;
                    }
                 },
       // toolbox: {
       //             show: true,
       //             left: 'right',
       //             top: 2,
       //             feature: {
       //             dataView: { readOnly: false },
       //             restore: {},
      //              saveAsImage: {}
      //              }
      //            },

        legend: {
          orient: 'vertical',
          right: 10,
            top: 'center',
          //left: 'center',
          data: ['開案數', '不開案數', '總服務數'],
          textStyle: {
            color: '#333',
            fontSize:16,
             }
          },

        geo: {
          map: 'TW',
          layoutCenter: ['45%', '38%'],
          layoutSize: '100%',
          aspectScale: 1,
          zoom: 1.1,
          label : {
                normal : {
                    textStyle : {
                        color : '#fff'
                    },
                    show : false
                },
                emphasis : {
                    textStyle : {
                        color : '#C6A300'
                    },
                    show : false
                }
            },
             roam: true,

            itemStyle : {
                normal : {
                    areaColor : "rgba(0,0,0,0)",
                    borderColor : "rgba(18,108,196,0.5)",
                    borderWidth : 1.3
                },
                emphasis : {
                    areaColor : "rgba(190,245,250,0.3)"
                }
            }
        },
        series: [
          {
            name: '柱狀圖',
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem: function (params, api) {
              const coords = api.coord([api.value(0), api.value(1)]);
              const barHeight1 = api.value(2) / 20; // 屬性1高度
              const barHeight2 = api.value(3) / 20; // 屬性2高度
              const barHeight3 = api.value(4) / 20; // 屬性3高度;

              return {
                type: 'group',
                children: [
                  {
                    type: 'rect',
                    shape: {
                      x: coords[0] - 10,
                      y: coords[1] - barHeight1,
                      width: 8,
                      height: barHeight1
                    },
                    style: { fill: '#ff0000' } // 屬性1顏色
                  },
                  {
                    type: 'rect',
                    shape: {
                      x: coords[0],
                      y: coords[1] - barHeight2,
                      width: 8,
                      height: barHeight2
                    },
                    style: { fill: '#00ff00' } // 屬性2顏色
                  },
                  {
                    type: 'rect',
                    shape: {
                      x: coords[0] + 10,
                      y: coords[1] - barHeight3,
                      width: 8,
                      height: barHeight3
                    },
                    style: { fill: '#0000ff' } // 屬性3顏色
                  }
                ]
              };
            },
            data: [
              { name: '高雄市', value: [120.633972, 22.965108, 733, 652, 1385] },
              { name: '台中市', value: [120.823711, 24.207529, 643, 598, 1241] },
              { name: '新北市', value: [121.526622, 24.873479, 587, 477, 1064] },
              { name: '屏東縣', value: [120.644845, 22.542893, 601, 437, 1037] },
              { name: '台南市', value: [120.326211, 23.167583, 592, 397, 989] },
              { name: '桃園市', value: [121.229425, 24.908913, 358, 321, 679] },
              { name: '花蓮縣', value: [121.427729, 23.783188, 308, 255, 563] },
              { name: '台北市', value: [121.536444, 25.080149, 313, 233, 546] },
              { name: '台東縣', value: [121.054566, 22.872413, 328, 191, 519] },
              { name: '彰化縣', value: [120.472066, 23.990594, 189, 158, 347] },
              { name: '雲林縣', value: [120.371406, 23.722020, 225, 106, 331] },
              { name: '南投縣', value: [120.982222, 23.862057, 160, 137, 297] },
              { name: '基隆市', value: [121.715217, 25.117497, 134, 118, 252] },
              { name: '新竹縣', value: [121.158459, 24.676877, 139, 81, 220] },
              { name: '苗栗縣', value: [120.921116, 24.493472, 142, 73, 215] },
              { name: '嘉義縣', value: [120.638468, 23.492045, 148, 66, 214] },        
              { name: '宜蘭縣', value: [121.682747, 24.553903, 110, 97, 207] },              
              { name: '嘉義市', value: [120.443802, 23.491232, 110, 52, 162] },   
              { name: '新竹市', value: [120.930721, 24.764270, 92, 44, 136] },
              { name: '澎湖縣', value: [119.616760, 23.580294, 22, 6, 28] },
              { name: '金門縣', value: [118.389159, 24.450510, 8, 4, 12] }
            ],
            zlevel: 1
          }
        ]
      };

      myChart2024L.setOption(option);
    })
    .catch(error => {
      console.error("Error loading the map data: ", error);
    });