import type { Meta, StoryObj } from '@storybook/react';
import SamiroyTitle from '../src/vector/samiroy/SamiroyTitle';
import AnimateGlitch from '../src/animated/samiroy/AnimateGlitch';

const meta: Meta<typeof SamiroyTitle> = {
  title: 'Samiroy/SamiroyTitle',
  component: SamiroyTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SamiroyTitle>;

export const Basic: Story = {
  args: {
    style: { width: 400, height: 80 },
  },
};

export const Animated: Story = {
  args: {
    style: { width: 400, height: 80 },
  },
  render: (args) => (
    <>
      <AnimateGlitch />
      <SamiroyTitle {...args} />
    </>
  ),
};
