/* eslint-disable @next/next/no-img-element */
import React from 'react';

import {
  Layout,
  Menu,
  PageHeader,
  Icon,
  Table,
  Button,
  Row,
  Col,
  Space,
  Typography,
} from '@zipida/grida';
import { dummyDataSource, defaultColumns } from './constant';
import logo from '../public/assets/logo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Page/Page',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

const { Header, Content, Sider } = Layout;

const menuItems = [
  Icon.UserOutlined,
  Icon.LaptopOutlined,
  Icon.NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => (
  <Layout {...args}>
    <Header className="header">
      <Space>
        <img src={logo} alt="logo" height="36px" />
        <span className="main-title">사이버수사시스템</span>
      </Space>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems}
        />
      </Sider>

      <Layout>
        <PageHeader
          ghost={false}
          className="site-page-header"
          title="사건 탐지"
          breadcrumb={{
            routes: [
              {
                path: 'index',
                breadcrumbName: '홈',
              },
              {
                path: 'first',
                breadcrumbName: '탐지 결과',
              },
              {
                path: 'second',
                breadcrumbName: '사건 탐지',
              },
            ],
          }}
        />
        <Content
          style={{
            padding: 24,
            margin: 24,
            minHeight: 280,
            backgroundColor: '#fff',
          }}
        >
          <Table
            title={() => (
              <Row justify="space-between" align="middle">
                <Col>
                  <Typography.Title level={5}>
                    {`총 ${dummyDataSource.length}개 데이터`}
                  </Typography.Title>
                </Col>
                <Col>
                  <Space>
                    <Button shape="round" icon={<Icon.SearchOutlined />}>
                      검색
                    </Button>
                    <Button shape="round" icon={<Icon.DownloadOutlined />}>
                      엑셀 다운로드
                    </Button>
                    <Button shape="round" icon={<Icon.DeleteOutlined />}>
                      탐지결과 삭제
                    </Button>
                    <Button
                      shape="round"
                      type="primary"
                      icon={<Icon.PlusOutlined />}
                    >
                      사건 등록
                    </Button>
                  </Space>
                </Col>
              </Row>
            )}
            columns={defaultColumns}
            dataSource={dummyDataSource}
          />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
