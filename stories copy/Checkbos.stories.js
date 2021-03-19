import React from 'react';
import { Checkbox } from '../shared-components/atoms/checkbox';

export default {
  title: 'Example/Button',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template2 = (args) => <Checkbox {...args} />;

export const check = Template2.bind({});
check.args = {
   label: 'Label'
};
