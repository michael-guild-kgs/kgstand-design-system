import React from 'react';
import { Button } from '../shared-components/atoms/Button';

export default {
  title: 'Inputs/Buttons',
  component: Button,
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary'
};

