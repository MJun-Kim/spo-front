import React from 'react';

import { Layout } from '@zipida/grida';
const { Header, Footer, Sider, Content } = Layout;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Layout/Layout.Sider',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    layoutType: {
      name: 'layout type',
      control: 'select',
      defaultValue: 'Default',
      options: [
        'Default',
        'Left Sider In Contents',
        'Right Sider In Contents',
        'Left Sider',
        'Right Sider',
      ],
      description: '',
      table: {
        category: 'User Input',
      },
    },
    breakpoint: {
      name: 'breakpoint',
      control: 'select',
      options: ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
      description: '',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | xxl' },
      },
    },
    collapsed: {
      name: 'collapsed',
      control: 'boolean',
      description: '',
      table: {
        type: { summary: 'boolean' },
      },
    },
    collapsedWidth: {
      name: 'collapsedWidth',
      control: 'number',
      description: '',
      defaultValue: 80,
      table: {
        defaultValue: { summary: 80 },
        type: {
          summary: 'Number',
        },
      },
    },

    collapsible: {
      name: 'collapsible',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },

    style: {
      name: 'style',
      control: 'object',
      description: '',
      defaultValue: {},
      table: { type: { summary: 'CSSProperies' } },
    },
    theme: {
      name: 'theme',
      control: 'select',
      options: ['light', 'dark'],
      description: '',
      table: {
        defaultValue: { summary: 'dark' },
        type: { summary: 'light | dark' },
      },
    },

    width: {
      name: 'width',
      control: 'number',
      description: '',
      table: {
        defaultValue: { summary: '200' },
        type: { summary: 'number | string' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ ...args }) => (
  <Layout>
    <Header>
      <h3 style={{ color: 'white' }}>Header</h3>
    </Header>
    <Layout>
      <Sider {...args}>Sider</Sider>
      <Content style={{ height: 900 }}>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
