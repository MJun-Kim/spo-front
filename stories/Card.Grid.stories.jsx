import React from 'react';

import { Card } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Card/Card.Grid',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: {
      name: 'className',
      control: 'text',
      description: '',
      table: { type: { summary: 'String' } },
    },
    hoverable: {
      name: 'hoverable',
      control: 'boolean',
      description: '',
      table: { type: { summary: 'Boolean' } },
    },
    style: {
      name: 'style',
      control: 'object',
      description: '',
      table: { type: { summary: 'CSSProperties' } },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ title, ...args }) => (
  <Card title="Card Title">
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
    <Card.Grid {...args}>Content</Card.Grid>
  </Card>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

// export const SimpleCard = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// SimpleCard.args = {
//   title: null,
// };

// const CardInColumnTemplate = (args) => (
//   <Card {...args}>
//     <Card.Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
// );
// export const CardInColumn = CardInColumnTemplate.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// CardInColumn.args = {
//   hoverable: true,
//   style: { width: 240 },
//   cover: (
//     <img
//       alt="example"
//       src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//     />
//   ),
// };
