import React from 'react';

import { Input, Select, Icon, Space } from '@zipida/grida';
const { Option } = Select;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Input',
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
    addonBefore: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    addonAfter: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    defaultValue: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },

    prefix: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    suffix: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    status: {
      control: 'select',
      options: ['warning', 'error'],
      description: '',
      table: {
        type: { summary: 'error | warning' },
      },
    },
    allowClear: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean | { clearIcon: ReactNode }' },
      },
    },
    bordered: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
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
            'boolean | { formatter: ({ count: number, maxLength?: number }) => ReactNode }',
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const PrePostTabTemplate = () => {
  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  return (
    <Space direction="vertical">
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Input
        addonBefore={selectBefore}
        addonAfter={selectAfter}
        defaultValue="mysite"
      />
      <Input addonAfter={<Icon.SettingOutlined />} defaultValue="mysite" />
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    </Space>
  );
};

export const PrePostTab = PrePostTabTemplate.bind({});

const ThreeSizesOfInputTemplate = () => (
  <>
    <Input
      size="large"
      placeholder="large size"
      prefix={<Icon.UserOutlined />}
    />
    <br />
    <br />
    <Input placeholder="default size" prefix={<Icon.UserOutlined />} />
    <br />
    <br />
    <Input
      size="small"
      placeholder="small size"
      prefix={<Icon.UserOutlined />}
    />
  </>
);

export const ThreeSizesOfInput = ThreeSizesOfInputTemplate.bind({});
