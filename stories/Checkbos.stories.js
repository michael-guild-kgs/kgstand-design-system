import React from 'react';
import { Checkbox } from '../shared-components/atoms/checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const check = Template.bind({});
check.args = {
   label: 'Label'
};
