import React from 'react';

import { Chart } from '../shared-components/atoms/Charts';

export default {
  title: 'Example/Chart',
  component: Chart,
};

const data = {
  title: 'This is a Chart',
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Weekly',
      data: [45, 30, 28, -4, 50],
    },
  ],
};

const ChartTemplate = (args) => <Chart {...args} />;

export const Line = ChartTemplate.bind({});
Line.args = {
  type: 'line',
  data,
};

export const Bar = ChartTemplate.bind({});
Bar.args = {
  type: 'bar',
  data,
};
