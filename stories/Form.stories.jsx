import React from 'react';

import { Form, Button, Input } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Form',
  component: Form,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colon: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
        category: 'Form',
      },
    },
    labelAlign: {
      control: 'select',
      options: ['left', 'right'],
      description: '',
      table: {
        defaultValue: { sumamry: 'right' },
        type: { summary: 'left | right' },
        category: 'Form',
      },
    },
    labelWrap: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
        category: 'Form',
      },
    },
    labelCol: {
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        type: { summary: 'object' },
        category: 'Form',
      },
    },
    wrapperCol: {
      control: 'object',
      defaultValue: { span: 20, offset: 0 },
      description: '',
      table: {
        type: { summary: 'boolean' },
        category: 'Form',
      },
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      description: '',
      table: {
        defaultValue: { sumamry: 'horizontal' },
        type: { summary: 'horizontal | vertical | inline' },
        category: 'Form',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'small | middle | large' },
        category: 'Form',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
    {...args}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export const Default = Template.bind({});
