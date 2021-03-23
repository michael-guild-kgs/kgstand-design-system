import React from 'react';
import {  Checkboxx } from '../shared-components/atoms/checkbox';

export default {
  title: 'Inputs/Checkbox',
  component: Checkboxx,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <Checkboxx {...args} />;

export const check = Template.bind({});
check.args = {
   label: 'Label'
};
