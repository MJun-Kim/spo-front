import React from 'react';

import { Modal, Button } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Modal/Modal.method',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning', 'confirm'],
      defaultValue: 'info',
      description: '',
      table: {
        type: { summary: 'info | success | error | warning | confirm' },
      },
    },
    cancelText: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'Cancel' },
        type: { summary: 'string' },
      },
    },
    centered: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    closable: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    content: {
      control: 'text',
      description: '',
      defaultValue: 'content',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    mask: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    okText: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'OK' },
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: '',
      defaultValue: 'Title',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    width: {
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '416' },
        type: { summary: 'string | number' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const handleClick = () =>
    Modal[args.type]({
      ...args,
    });
  return <Button onClick={handleClick}>Modal</Button>;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
