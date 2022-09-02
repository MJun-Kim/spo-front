import React from 'react';

import { Button } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'String | React Node' },
      },
    },
    block: {
      name: 'block',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    danger: {
      name: 'danger',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    ghost: {
      name: 'ghost',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    href: {
      name: 'href',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    htmlType: {
      name: 'htmlType',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'button' },
        type: { summary: 'string | button | submit | reset' },
      },
    },
    loading: {
      name: 'loading',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    shape: {
      name: 'shape',
      control: 'select',
      options: ['default', 'circle', 'round'],
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
        type: { summary: 'default | circle | round' },
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
    type: {
      name: 'type',
      control: 'select',
      options: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
        type: { summary: 'primary | ghost | dashed | link | text | default' },
      },
    },
    onClick: { action: 'clicked' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => (
  <Button {...args}>{label ?? 'Button'}</Button>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  type: 'default',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
  type: 'primary',
  danger: true,
};

export const Primary = Template.bind({});
// More on argPrimary: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
};

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {
  type: 'link',
};

export const Dashed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dashed.args = {
  type: 'dashed',
};
