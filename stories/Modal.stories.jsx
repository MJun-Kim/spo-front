import { useState } from 'react';
import { Button, Modal } from '@zipida/grida';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grida/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cancelText: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'Cancel' },
        type: { summary: 'ReactNode' },
      },
    },
    centered: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'false' },
        type: { summary: 'boolean' },
      },
    },
    closable: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    closeIcon: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    footer: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: '(OK and Cancel buttons)' },
        type: { summary: 'ReactNode' },
      },
    },
    keyboard: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    mask: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    maskClosable: {
      control: 'boolean',
      description: '',
      table: {
        defaultValue: { sumamry: 'true' },
        type: { summary: 'boolean' },
      },
    },
    okText: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'OK' },
        type: { summary: 'ReactNode' },
      },
    },
    okType: {
      control: 'text',
      description: '',
      table: {
        defaultValue: { sumamry: 'primary' },
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: '',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    width: {
      control: 'number',
      description: '',
      table: {
        defaultValue: { sumamry: '520' },
        type: { summary: 'string | number	' },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [visible, setVisible] = useState(args.visible);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Modal</Button>
      <Modal
        title="Basic Modal"
        {...args}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
