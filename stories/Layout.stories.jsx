import React from 'react';

import { Layout } from '@zipida/grida';
const { Header, Footer, Sider, Content } = Layout;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Layout',
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
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ layoutType, ...args }) =>
  layoutType === 'Default' ? (
    <Layout {...args}>
      <Header style={{ background: '#d3d3d3' }}>Header</Header>
      <Content style={{ height: 300 }}>Content</Content>
      <Footer style={{ background: '#d3d3d3' }}>Footer</Footer>
    </Layout>
  ) : (
    <Layout>
      {layoutType === 'Left Sider In Contents' ||
      layoutType === 'Right Sider In Contents' ? (
        <>
          <Header style={{ background: '#d3d3d3' }}>Header</Header>
          <Layout>
            {layoutType === 'Left Sider In Contents' && (
              <Sider style={{ background: '#e4e4e4' }}>Sider</Sider>
            )}
            <Content style={{ height: 300 }}>Content</Content>
            {layoutType === 'Right Sider In Contents' && (
              <Sider style={{ background: '#e4e4e4' }}>Sider</Sider>
            )}
          </Layout>
          <Footer style={{ background: '#d3d3d3' }}>Footer</Footer>
        </>
      ) : (
        <>
          {layoutType === 'Left Sider' && (
            <Sider style={{ background: '#e4e4e4' }}>Sider</Sider>
          )}
          <Layout>
            <Header style={{ background: '#d3d3d3' }}>Header</Header>
            <Content style={{ height: 300 }}>Content</Content>
            <Footer style={{ background: '#d3d3d3' }}>Footer</Footer>
          </Layout>
          {layoutType === 'Right Sider' && (
            <Sider style={{ background: '#e4e4e4' }}>Sider</Sider>
          )}
        </>
      )}
    </Layout>
  );

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
