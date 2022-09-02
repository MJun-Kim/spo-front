import React from 'react';

import { Select } from '@zipida/grida';
const { Option } = Select;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    optionValues: {
      name: 'optionValues',
      control: 'object',
      description: '',
      defaultValue: [
        { label: 'Test A', value: 'Test A' },
        { label: 'Test B', value: 'Test B' },
        { label: 'Test C', value: 'Test C' },
        { label: 'Test D', value: 'Test D' },
        { label: 'Test E', value: 'Test E' },
        { label: 'Test F', value: 'Test F' },
      ],
      table: {
        category: 'User Input',
      },
    },
    allowClear: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    autoClearSearchValue: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    autoFocus: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'selectProps',
      },
    },
    bordered: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    clearIcon: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Select props',
      },
    },
    defaultActiveFirstOption: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    defaultOpen: {
      control: 'boolean',
      description: '',
      table: {
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    defaultValue: {
      control: 'text',
      description: '',
      table: {
        type: {
          summary:
            'string | string[] | number | number[] | LabeledValue | LabeledValue[]',
        },
        category: 'Select props',
      },
    },
    disabled: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    dropdownMatchSelectWidth: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean | number' },
        category: 'Select props',
      },
    },
    labelInValue: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    listHeight: {
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '256' },
        type: { summary: 'number' },
        category: 'Select props',
      },
    },
    loading: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Select props',
      },
    },
    maxTagCount: {
      control: 'number',
      description: '',
      table: {
        type: { summary: 'number | responsive' },
        category: 'Select props',
      },
    },
    maxTagPlaceholder: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode | function(omittedValues)' },
        category: 'Select props',
      },
    },
    maxTagTextLength: {
      control: 'number',
      description: '',
      table: {
        type: { summary: 'number' },
        category: 'Select props',
      },
    },
    menuItemSelectedIcon: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Select props',
      },
    },
    mode: {
      control: 'select',
      options: ['multiple', 'tags'],
      description: '',
      table: {
        type: { summary: 'multiple | tags' },
        category: 'Select props',
      },
    },
    notFoundContent: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'Not Found' },
        type: { summary: 'ReactNode' },
        category: 'Select props',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ optionValues = [], ...args }) => {
  console.log(args);
  return (
    <Select {...args} style={{ width: 300 }}>
      {optionValues.map((item) => (
        <Option value={item.value}>{item.label}</Option>
      ))}
    </Select>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
