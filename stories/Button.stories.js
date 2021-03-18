import React from 'react';

import { Button } from '../shared-components/atoms/Buttons';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Submit Report',
  size: 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'medium'
};

export const TextLinkk = Template.bind({});
TextLinkk.args = {
  variant: 'secondary2',
  label: 'Button3',
  size: 'medium'
};
