import { Scatter } from '@antv/g2plot';

fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
  .then((res) => res.json())
  .then((data) => {
    const scatterPlot = new Scatter('container', {
      appendPadding: 10,
      data,
      xField: 'Revenue (Millions)',
      yField: 'Rating',
      shape: 'circle',
      yAxis: {
        grid: {},
      },
      xAxis: {
        min: -100,
        nice: true,
        grid: {
          line: {
            style: {
              stroke: '#eee',
            },
          },
        },
      },
      pointStyle: {
        stroke: '#fff',
      },
    });
    scatterPlot.render();
  });
