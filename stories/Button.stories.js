import { red } from '@material-ui/core/colors';
import React from 'react';
import { Button } from '../shared-components/atoms/Buttons/';
import { BrandPrimary } from '../shared-components/foundation/colors';

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

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'secondry Button'
};

