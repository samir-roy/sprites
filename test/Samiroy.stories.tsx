import * as React from 'react';
import AnimateGlitches from '../src/animated/samiroy/AnimateGlitches';
import SamiroyAnimatedLogo from '../src/animated/samiroy/SamiroyAnimatedLogo';
import SamiroyTitle from '../src/vector/samiroy/SamiroyTitle';

const Samiroy = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AnimateGlitches />
      <SamiroyAnimatedLogo />
      <div style={{ height: 64 }} />
      <SamiroyTitle />
    </div>
  );
};

const meta = {
  title: 'Samiroy',
  component: Samiroy,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Animated = {
  render: () => <Samiroy />,
};
