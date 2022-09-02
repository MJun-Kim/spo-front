import React from 'react';
import { Table, Button, Space } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    columnsArr: { control: 'array', defaultValue: [] },
    rowCount: { control: 'number', defaultValue: 10 },
    bordered: {
      name: 'bordered',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    footer: {
      name: 'footer',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'function(currentPageData)' },
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
    pagination: {
      name: 'pagination',
      control: 'boolean',
      description:
        'Config of pagination. You can ref table pagination config or full pagination document, hide it by setting it to false',
      table: {
        type: { summary: 'object' },
      },
    },
    rowKey: {
      name: 'rowKey',
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'key' },
        type: { summary: 'string | function(record): string' },
      },
    },
    rowSelection: {
      name: 'rowSelection',
      control: 'boolean',
      description: '',
      table: {
        type: { summary: 'object' },
      },
    },
    showHeader: {
      name: 'showHeader',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['default', 'middle', 'small'],
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
        type: { summary: 'default | middle | small' },
      },
    },
    sticky: {
      name: 'sticky',
      control: 'boolean',
      description: '',
      table: {
        type: {
          summary:
            'boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}',
        },
      },
    },
    title: {
      name: 'title',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'function(currentPageData)' },
      },
    },
  },
};

const makeColumnsAndDataSource = (data = [], rowCount = 0) => {
  const columns = data.map((item, idx) => ({
    title: item,
    dataIndex: `${item}${idx}`,
  }));
  const dataSource = Array(rowCount)
    .fill()
    .map((_, idx) =>
      columns.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.dataIndex]: `${cur.dataIndex}${idx + 1}`,
        }),
        {}
      )
    );
  return { columns, dataSource };
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({
  footer,
  columnsArr,
  rowCount,
  title,

  ...args
}) => {
  const { columns, dataSource } = makeColumnsAndDataSource(
    columnsArr,
    rowCount
  );
  return (
    <Table
      title={() => title}
      columns={columns}
      dataSource={dataSource}
      footer={footer ? () => footer : null}
      {...args}
    />
  );
};

export const Default = Template.bind({});

const NoDataTemplate = (args) => {
  return (
    <Table
      columns={[
        { title: 'Test1', dataIndex: 'test1' },
        { title: 'Test2', dataIndex: 'test2' },
        { title: 'Test3', dataIndex: 'test3' },
        { title: 'Test4', dataIndex: 'test4' },
        { title: 'Test5', dataIndex: 'test5' },
        { title: 'Test6', dataIndex: 'test6' },
        { title: 'Test7', dataIndex: 'test7' },
      ]}
      dataSource={[]}
      {...args}
    />
  );
};

export const NoData = NoDataTemplate.bind({});
