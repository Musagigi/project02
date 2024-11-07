import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'Shared/ui/inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    label: 'test',
    // variant: 'contained',
    // size: 'medium',
  },
};
