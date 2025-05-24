import * as React from 'react';
import SamiroyTitle from '../src/vector/samiroy/SamiroyTitle';
import AnimateGlitches from '../src/animated/samiroy/AnimateGlitches';

const meta = {
  title: 'Samiroy Title ',
  component: SamiroyTitle,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export const Animated = {
  args: {
    style: { width: 400, height: 80 },
  },
  render: (args) => (
    <>
      <AnimateGlitches />
      <SamiroyTitle {...args} />
    </>
  ),
};
