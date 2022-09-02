import React from 'react';

import { Space, Button, Icon } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Space',
  component: Space,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    align: {
      name: 'align',
      control: 'select',
      options: ['start', 'end', 'center', 'baseline'],
      description: '',
      table: {
        type: { summary: 'start | end | center | baseline' },
      },
    },
    direction: {
      name: 'direction',
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: '',
      table: {
        defaultValue: { sumamry: 'middle' },
        type: { summary: 'vertical | horizontal' },
      },
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: '',
      table: {
        defaultValue: { sumamry: 'middle' },
        type: { summary: 'large | middle | small' },
      },
    },

    wrap: {
      name: 'wrap',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    itemCount: {
      name: 'itemCount',
      control: 'number',
      defaultValue: 5,
      description: '',
      table: {
        category: 'User Input',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ itemCount, ...args }) => (
  <Space {...args}>
    <span>test</span>
    {Array(itemCount)
      .fill(null)
      .map((_, idx) => (
        <Button key={idx} type="primary">
          Button_{idx}
        </Button>
      ))}
    <span style={{ fontSize: 40 }}>TEXT</span>
  </Space>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
