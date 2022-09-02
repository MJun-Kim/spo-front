import React from 'react';
import { Row, Col, Card } from '@zipida/grida';
import { orderBy, pull } from 'lodash';
// import { Row, Col } from '@zipida/grida';
// import { Button } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Grid',
  component: Row,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // User Input
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    columnHeight: {
      name: 'columnHeight',
      control: 'select',
      options: ['static', 'random'],
      description: '',
      table: {
        category: 'User Input',
      },
    },
    columnCount: {
      name: 'columnCount',
      control: 'number',
      defaultValue: 10,
      description: '',
      table: {
        category: 'User Input',
      },
    },
    // Row
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    align: {
      name: 'align',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      description: '',
      table: {
        category: 'Row',
        defaultValue: 'top',
        type: { summary: 'top | middle | bottom' },
      },
    },
    gutter: {
      name: 'gutter',
      control: 'object',
      defaultValue: [],
      description: '',
      table: {
        category: 'Row',
        defaultValue: '0',
        type: { summary: 'number | object | array' },
      },
    },
    justify: {
      name: 'justify',
      control: 'select',
      options: [
        'start',
        'end',
        'center',
        'space-around',
        'space-between',
        'space-evenly',
      ],
      table: {
        category: 'Row',
        defaultValue: 'start',
        type: {
          summary:
            'start | end | center | space-around | space-between | space-evenly',
        },
      },
    },
    wrap: {
      name: 'wrap',
      control: 'boolean',
      description: '',
      table: {
        category: 'Row',
        defaultValue: true,
        type: { summary: 'boolean' },
      },
    },
    // Col
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    flex: {
      name: 'flex',
      control: 'text',
      description: '',
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'string | number' },
      },
    },
    offset: {
      name: 'offset',
      control: 'number',
      description: '',
      table: {
        category: 'Col',
        defaultValue: '0',
        type: { summary: 'number' },
      },
    },
    pull: {
      name: 'pull',
      control: 'number',
      description: '',
      table: {
        category: 'Col',
        defaultValue: '0',
        type: { summary: 'number' },
      },
    },
    push: {
      name: 'push',
      control: 'number',
      description: '',
      table: {
        category: 'Col',
        defaultValue: '0',
        type: { summary: 'number' },
      },
    },
    span: {
      name: 'span',
      control: 'number',
      description: '',
      defaultValue: 4,
      table: {
        category: 'Col',
        defaultValue: 'none',
        type: { summary: 'number' },
      },
    },
    xs: {
      name: 'xs',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
    xm: {
      name: 'xm',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
    md: {
      name: 'md',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
    lg: {
      name: 'lg',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
    xl: {
      name: 'xl',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
    xxl: {
      name: 'xxl',
      control: 'object',
      description: '',
      defaultValue: { span: 4, offset: 0 },
      table: {
        category: 'Col',
        defaultValue: '',
        type: { summary: 'number | object' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({
  align,
  gutter,
  justify,
  wrap,
  columnHeight,
  flex,
  offset,
  pull,
  push,
  span,
  xs,
  xm,
  md,
  lg,
  xl,
  xxl,
  columnCount,
}) => {
  const generateColumnHeight = () =>
    columnHeight === 'random'
      ? Math.floor(Math.random() * (170 - 35)) + 35
      : 100;
  return (
    <>
      <Row align={align} gutter={gutter} justify={justify} wrap={wrap}>
        {Array(columnCount)
          .fill()
          .map((_, idx) => (
            <Col
              key={idx}
              flex={flex}
              offset={offset}
              pull={pull}
              push={push}
              span={span}
              xs={xs}
              xm={xm}
              md={md}
              lg={lg}
              xl={xl}
              xxl={xxl}
            >
              <h2 style={{ height: generateColumnHeight() }} className="title">
                col-{idx + 1}
              </h2>
            </Col>
          ))}
      </Row>
      <style jsx>{`
        .title {
          background: #0092ff;
          margin: 0;
        }
      `}</style>
    </>
    // </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {};

const GridSortTemplate = ({}) => {
  return (
    <Row>
      <Col span={18} push={6} style={{ height: 60, background: '#0092ff' }}>
        col-18 col-push-6
      </Col>
      <Col
        span={6}
        pull={18}
        style={{ height: 60, background: 'rgba(0,146,255,.75)' }}
      >
        col-6 col-pull-18
      </Col>
    </Row>
  );
};

export const GridSort = GridSortTemplate.bind({});

const OrderTemplate = ({}) => {
  return (
    <>
      Normal
      <Row>
        <Col span={6} order={4} style={{ background: '#0092ff' }}>
          1 col-order-4
        </Col>
        <Col span={6} order={3} style={{ background: 'rgba(0,146,255,.75)' }}>
          2 col-order-3
        </Col>
        <Col span={6} order={2} style={{ background: '#0092ff' }}>
          3 col-order-2
        </Col>
        <Col span={6} order={1} style={{ background: 'rgba(0,146,255,.75)' }}>
          4 col-order-1
        </Col>
      </Row>
      Responsive
      <Row>
        <Col
          span={6}
          xs={{
            order: 1,
          }}
          sm={{
            order: 2,
          }}
          md={{
            order: 3,
          }}
          lg={{
            order: 4,
          }}
          style={{ background: '#0092ff' }}
        >
          1 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 2,
          }}
          sm={{
            order: 1,
          }}
          md={{
            order: 4,
          }}
          lg={{
            order: 3,
          }}
          style={{ background: 'rgba(0,146,255,.75)' }}
        >
          2 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 3,
          }}
          sm={{
            order: 4,
          }}
          md={{
            order: 2,
          }}
          lg={{
            order: 1,
          }}
          style={{ background: 'rgba(0,146,255,.75)' }}
        >
          3 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{
            order: 4,
          }}
          sm={{
            order: 3,
          }}
          md={{
            order: 1,
          }}
          lg={{
            order: 2,
          }}
          style={{ background: '#0092ff' }}
        >
          4 col-order-responsive
        </Col>
      </Row>
    </>
  );
};

export const Order = OrderTemplate.bind({});

const FlexStretchTemplate = ({}) => {
  return (
    <>
      <h2>Percentage columns</h2>
      <Row>
        <Col flex={2} style={{ background: '#0092ff' }}>
          2 / 5
        </Col>
        <Col flex={3} style={{ background: 'rgba(0,146,255,.75)' }}>
          3 / 5
        </Col>
      </Row>
      <h2>Fill rest</h2>
      <Row>
        <Col flex="100px" style={{ background: '#0092ff' }}>
          100px
        </Col>
        <Col flex="auto" style={{ background: 'rgba(0,146,255,.75)' }}>
          Fill Rest
        </Col>
      </Row>
      <h2>Raw flex style</h2>
      <Row>
        <Col flex="1 1 200px" style={{ background: '#0092ff' }}>
          1 1 200px
        </Col>
        <Col flex="0 1 300px" style={{ background: 'rgba(0,146,255,.75)' }}>
          0 1 300px
        </Col>
      </Row>
      <Row wrap={false}>
        <Col flex="none" style={{ background: '#0092ff' }}>
          <div style={{ padding: '0 16px' }}>none</div>
        </Col>
        <Col flex="auto" style={{ background: 'rgba(0,146,255,.75)' }}>
          auto with no-wrap
        </Col>
      </Row>
    </>
  );
};

export const FlexStretch = FlexStretchTemplate.bind({});
