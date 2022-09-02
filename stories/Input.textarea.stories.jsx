import React from 'react';

import { Input } from '@zipida/grida';
const { TextArea } = Input;
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Input/Input.TextArea',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    allowClear: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    autoSize: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean | object' },
      },
    },
    bordered: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    defaultValue: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    maxLength: {
      control: 'number',
      description: '',
      table: {
        type: { summary: 'number' },
      },
    },
    showCount: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: {
          summary:
            'boolean | { formatter: ({ count: number, maxLength?: number }) => string }',
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input.TextArea {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const AutosizingTheHeightToFitTheContentTemplate = (args) => (
  <>
    <TextArea placeholder="Autosize height based on content lines" autoSize />
    <div style={{ margin: '24px 0' }} />
    <TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
    <div style={{ margin: '24px 0' }} />
    <TextArea
      placeholder="Controlled autosize"
      autoSize={{ minRows: 3, maxRows: 5 }}
    />
  </>
);

export const AutosizingTheHeightToFitTheContent =
  AutosizingTheHeightToFitTheContentTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
