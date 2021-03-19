import React from 'react';
import { SecondaryButton } from '../shared-components/atoms/Buttons/secondaryButton';

export default {
  title: 'Example/Button',
  component: SecondaryButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});
Secondary.args = {
   label: 'Secondary Button'
};
