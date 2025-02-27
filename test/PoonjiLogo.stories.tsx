import * as React from 'react';
import PoonjiAnimatedLogo from '../src/animated/poonji/PoonjiAnimatedLogo';
import PoonjiLogo from '../src/vector/poonji/PoonjiLogo';

const Logo = ({ animated }: { animated: boolean }) => (animated ? <PoonjiAnimatedLogo /> : <PoonjiLogo />);

const meta = {
  title: 'Poonji Logo ',
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
