import React from 'react';

import { notification, Button } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Notification',
  component: notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bottom: {
      name: 'bottom',
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '24' },
        type: { summary: 'number' },
      },
    },
    description: {
      name: 'description',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    duration: {
      name: 'duration',
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '4.5' },
        type: { summary: 'number' },
      },
    },
    message: {
      name: 'message',
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    placement: {
      name: 'placement',
      control: 'select',
      options: [
        'top',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
      ],
      description: '',
      table: {
        defaultValue: { sumamry: 'topRight' },
        type: {
          summary:
            'top | bottom | topLeft | topRight | bottomLeft | bottomRight',
        },
      },
    },
    top: {
      name: 'top',
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '24' },
        type: { summary: 'number' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ type, ...args }) => {
  const handleClick = () => {
    if (type) {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        ...args,
      });
    } else {
      notification.open(args);
    }
  };
  return (
    <Button type="primary" {...args} onClick={handleClick}>
      Notification
    </Button>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Success = Template.bind({});
Success.args = {
  type: 'success',
};
export const Info = Template.bind({});
Info.args = {
  type: 'info',
};
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};
export const Error = Template.bind({});
Error.args = {
  type: 'error',
};
