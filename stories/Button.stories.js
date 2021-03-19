import React from 'react';
import { Button } from '../shared-components/atoms/Buttons/';

export default {
  title: 'Example/Buttons',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button'
};


