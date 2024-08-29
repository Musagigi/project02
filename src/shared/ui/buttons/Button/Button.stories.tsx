import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Shared/ui/buttons/Button',

  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
    size: 'medium',
  },
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
    children: 'Outlined',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    ...Contained.args,
    children: 'Text',
    variant: 'text',
  },
};

export const Small: Story = {
  args: {
    ...Contained.args,
    children: 'Small',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...Contained.args,
    children: 'Medium',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Contained.args,
    children: 'Large',
    size: 'large',
  },
};
