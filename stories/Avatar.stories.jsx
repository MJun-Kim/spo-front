import React from 'react';

import { Avatar } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GRiDA/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'label',
      control: 'text',
      description: '아바타 안에 있는 텍스트',
      defaultValue: 'Avatar',
      table: {
        type: {
          summary: 'String',
        },
      },
    },
    src: {
      control: 'select',
      description: '이미지 src',
      options: ['https://joeschmoe.io/api/v1/random', null],
      defaultValue: null,
      table: {
        type: {
          summary: 'String | ReactNode',
        },
      },
    },
    gap: {
      control: 'number',
      description: 'Avatar padding',
      table: {
        defaultValue: { summary: 4 },
        type: {
          summary: 'Number',
        },
      },
    },
    shape: {
      description: '아바타 테두리 형태',
      control: 'select',
      table: {
        defaultValue: { summary: 'circle' },
        type: {
          summary: 'circle | square',
        },
      },
      options: ['circle', 'square'],
    },
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: '아바타 사이즈',
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary:
            'number | large | small | default | { xs: number, sm: number, ...}',
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => (
  <Avatar {...args}>{label ?? 'Button'}</Avatar>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Avatar',
};
