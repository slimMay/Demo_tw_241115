window.onload = function () {
            var dom = document.getElementById('chart-TotList');
            var myChartTotList = echarts.init(dom, null, {
                useCoarsePointer: true,
                pointerSize: 100,
                renderer: 'canvas',
                useDirtyRect: false
            });

            var option = {
                title: {
                    text: '基金會服務數據',
                    left: 'center',
                    top: 0,
                    textStyle: { color: '#464a4c' }
                },
                tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                grid: { top: '17%', left: '10%', right: '10%', bottom: '15%' },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    top: 30,
                    data: ['愛心卡儲值金', '急難救助金額', '愛心卡數', '急難救助案量'],
                    textStyle: {
                        color: "#464a4c",
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 14
                    }
                },
                xAxis: [{ type: 'category', data: ['103年', '104年', '105年', '106年', '107年', '108年', '109年', '110年', '111年', '112年'] }],
                yAxis: [
                    { type: 'value', name: '金額', min: 1000000, max: 60000000 },
                    { type: 'value', name: '數量', min: 0, max: 10000, position: 'right' }
                ],
                    dataZoom: [

                    {   "show": true,
                        "height": 16,
                        type: 'slider',
                        xAxisIndex: 0,
                        filterMode: 'empty',
                        start: 0,
                        end: 100
                    }, 
                    {
                        type: 'slider',
                        "width": 16,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        start: 0,
                        end: 100
                    }, 
                    {
                        "height": 16,
                        type: 'inside',
                        xAxisIndex: 0,
                        filterMode: 'empty',
                        start: 0,
                        end: 100
                    }, 
                    {
                        type: 'inside',
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        start: 0,
                        end: 100
                     }],
                series: [
                    { name: '愛心卡儲值金', type: 'bar', itemStyle: { color: '#FA7CBB' }, data: [1093000, 6350000, 14013000, 16442000, 18941000, 17388000, 21785000, 22852000, 28059000, 27761000] },
                    { name: '急難救助金額', type: 'bar', itemStyle: { color: '#99cccc' }, data: [11052991, 40200400, 41014552, 38231020, 43717500, 37234200, 40728650, 48078200, 53194500, 45101000] },
                    { name: '愛心卡數', type: 'line', yAxisIndex: 1, itemStyle: { color: '#ff3860' }, data: [390, 1283, 2697, 2858, 3135, 3258, 3747, 4410, 4894, 4941],
                    markPoint: {
                    data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                            ]
                    } },
                    { name: '急難救助案量', type: 'line', yAxisIndex: 1, itemStyle: { color: '#3f729b' }, data: [798,2930,4323,4862,5377,5191,5640,5598,5701,5942],
                    markPoint: {
                    data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                            ]
                    } 
                    }
                ]
            };

            myChartTotList.setOption(option);

            window.addEventListener('resize', myChartTotList.resize);
        };