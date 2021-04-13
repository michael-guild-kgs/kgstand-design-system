import React from 'react';
import { TextLink } from '../shared-components/atoms/Link';

export default {
  title: 'Inputs/Link',
  component: TextLink,
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <TextLink {...args} />;

export const textLink = Template.bind({});
textLink.args = {
  label: 'Text Link'
};


