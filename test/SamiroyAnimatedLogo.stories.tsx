import type { Meta } from '@storybook/react';
import SamiroyAnimatedLogo from '../src/animated/samiroy/SamiroyAnimatedLogo';

const meta = {
  title: 'SamiroyAnimatedLogo ',
  component: SamiroyAnimatedLogo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SamiroyAnimatedLogo>;

export default meta;

export const Primary = {};
