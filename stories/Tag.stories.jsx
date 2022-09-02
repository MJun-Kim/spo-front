import React from 'react';

import { Tag } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    closable: {
      name: 'closable',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    color: {
      name: 'color',
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tag {...args}>Text</Tag>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
