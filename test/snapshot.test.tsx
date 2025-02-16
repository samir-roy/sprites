import React from 'react';
import { render } from '@testing-library/react';
import {
  AppStoreButton,
  PoonjiLogo,
  PoonjiTitle,
  SamiroyLogo,
  SamiroyTitle,
  SamiroyAnimatedLogo,
  EndlessTrafficTitle,
  EndlessTrafficAnimatedLogo,
} from '../dist-pkg';

describe('snapshot tests', () => {
  it('should render app store button', () => {
    const { container } = render(<AppStoreButton />);
    expect(container).toMatchSnapshot();
  });
  it('should render poonji logo', () => {
    const { container } = render(<PoonjiLogo />);
    expect(container).toMatchSnapshot();
  });
  it('should render poonji title', () => {
    const { container } = render(<PoonjiTitle />);
    expect(container).toMatchSnapshot();
  });
  it('should render samiroy logo', () => {
    const { container } = render(<SamiroyLogo />);
    expect(container).toMatchSnapshot();
  });
  it('should render samiroy title', () => {
    const { container } = render(<SamiroyTitle />);
    expect(container).toMatchSnapshot();
  });
  it('should render samiroy animation', () => {
    const { container } = render(<SamiroyAnimatedLogo />);
    expect(container).toMatchSnapshot();
  });
  it('should render endless traffic title', () => {
    const { container } = render(<EndlessTrafficTitle />);
    expect(container).toMatchSnapshot();
  });
  it('should render endless traffic animation', () => {
    const { container } = render(<EndlessTrafficAnimatedLogo />);
    expect(container).toMatchSnapshot();
  });
});
