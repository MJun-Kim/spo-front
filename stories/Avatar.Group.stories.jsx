import React from 'react';

import { Avatar } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Avatar/Avatar.Group',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    maxCount: {
      name: 'maxCount',
      control: 'number',
      defaultValue: 4,
      description: '',
      table: {
        type: { summary: 'Number' },
      },
    },
    maxPopoverPlacement: {
      name: 'maxPopoverPlacement',
      control: 'select',
      description: '',
      defaultValue: 'top',
      options: ['top', 'bottom'],
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'top' },
      },
    },
    maxPopoverTrigger: {
      name: 'maxPopoverTrigger',
      control: 'select',
      options: ['hover', 'focus', 'click'],
      description: '',
      defaultValue: 'hover',
      table: {
        type: { summary: 'hover | focus | click' },
        defaultValue: { summary: 'hover' },
      },
    },
    maxStyle: {
      name: 'maxStyle',
      control: 'object',
      description: '',
      defaultValue: {},
      table: {
        type: { summary: 'CSSProperties' },
      },
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['large', 'small', 'default'],
      description: '',
      defaultValue: 'default',
      table: {
        type: {
          summary:
            'number | large | small | default | { xs: number, sm: number, ...}',
        },
        defaultValue: { summary: 'default' },
      },
    },
  },
};

const Template = ({ ...args }) => (
  <Avatar.Group {...args}>
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    <Avatar style={{ backgroundColor: '#f56a00' }}>Kim</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }}>Park</Avatar>
    <Avatar style={{ backgroundColor: '#1890ff' }}>Cho</Avatar>
    <Avatar src="https://joeschmoe.io/api/v1/random">Lee</Avatar>
    <Avatar>Hwang</Avatar>
    <Avatar style={{ backgroundColor: '#62d323' }}>Jeong</Avatar>
    <Avatar style={{ backgroundColor: '#124268' }}>Kang</Avatar>
  </Avatar.Group>
);

export const Group = Template.bind({});

Group.args = {
  // label: 'Avatar',
};
