import React from 'react';

import { Card } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      name: 'title',
      control: 'text',
      defaultValue: 'Card Title',
      description: '',
      table: { type: { summary: 'String | ReactNode' } },
    },
    extra: {
      name: 'extra',
      control: 'text',
      description: '',

      table: { type: { summary: 'String | ReactNode' } },
    },
    style: {
      name: 'style',
      control: 'object',
      description: '',
      table: { type: { summary: 'CSSProperties' } },
    },
    bodyStyle: {
      name: 'bodyStyle',
      control: 'object',
      description: '',
      table: { type: { summary: 'CSSProperties' } },
    },
    headStyle: {
      name: 'headStyle',
      control: 'object',
      description: '',
      table: { type: { summary: 'CSSProperties' } },
    },
    size: {
      name: 'size',
      control: 'select',
      options: ['default', 'small'],
      description: '',
      table: {
        defaultValue: { sumamry: 'default' },
        type: { summary: 'default | small' },
      },
    },
    bordered: {
      name: 'bordered',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    hoverable: {
      name: 'hoverable',
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
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
    type: {
      name: 'type',
      control: 'select',
      options: [null, 'inner'],
      description: '',
      table: { type: { summary: 'string' } },
    },
    actions: {
      name: 'actions',
      control: 'object',
      description: '',
      table: { defaultValue: { sumamry: '' }, type: { summary: '' } },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Card {...args}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  //   label: 'Card',
};
export const SimpleCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleCard.args = {
  title: null,
};

const CardInColumnTemplate = (args) => (
  <Card {...args}>
    <Card.Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export const CardInColumn = CardInColumnTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardInColumn.args = {
  hoverable: true,
  style: { width: 240 },
  cover: (
    <img
      alt="example"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    />
  ),
};
