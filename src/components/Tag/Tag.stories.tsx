import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'neutral'],
    },
  },
  args: {
    label: 'Example Tag',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        component: 'A tag (or badge/pill) used to highlight status or metadata.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    color: 'error',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Neutral',
    color: 'neutral',
  },
};
