import { Scatter } from '../../../../src';
import { data } from '../../../data/gender';
import { createDiv } from '../../../utils/dom';

describe('scatter', () => {
  it('default config', () => {
    const scatter = new Scatter(createDiv(), {
      width: 400,
      height: 300,
      data,
      xField: 'weight',
      yField: 'height',
      size: 10,
      xAxis: {
        nice: true,
      },
    });

    scatter.render();
    console.log(scatter);
    const { options } = scatter;
    // @ts-ignore
    expect(options.tooltip.offset).toBe(20);
    // @ts-ignore
    expect(options.label.visible).toBe(false);
  });
});
