import * as React from 'react';
import SamiroyAnimatedLogo from '../src/animated/samiroy/SamiroyAnimatedLogo';
import SamiroyLogo from '../src/vector/samiroy/SamiroyLogo';

const Logo = ({ animated }: { animated: boolean }) => (animated ? <SamiroyAnimatedLogo /> : <SamiroyLogo />);

const meta = {
  title: 'Samiroy Logo ',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  args: {
    animated: true,
  },
};

export default meta;

export const Animated = {
  args: {
    animated: true,
  },
};

export const Static = {
  args: {
    animated: false,
  },
};
