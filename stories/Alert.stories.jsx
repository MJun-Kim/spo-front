import React from 'react';

import { Alert } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    banner: {
      name: 'banner',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showIcon: {
      name: 'showIcon',
      control: 'boolean',
      description: '',
      table: {
        type: { summary: 'boolean' },
      },
    },
    closable: {
      name: 'closable',
      control: 'boolean',
      description: '',
      table: {
        type: { summary: 'boolean' },
      },
    },
    closeText: {
      name: 'closeText',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    description: {
      name: 'description',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    message: {
      name: 'message',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    type: {
      name: 'type',
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: '',
      table: {
        defaultValue: { sumamry: 'info, in banner mode default is warning' },
        type: { summary: 'string' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
