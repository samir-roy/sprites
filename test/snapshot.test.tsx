import React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(<AppStoreButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render poonji logo', () => {
    const tree = renderer.create(<PoonjiLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render poonji title', () => {
    const tree = renderer.create(<PoonjiTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render samiroy logo', () => {
    const tree = renderer.create(<SamiroyLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render samiroy title', () => {
    const tree = renderer.create(<SamiroyTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render samiroy animation', () => {
    const tree = renderer.create(<SamiroyAnimatedLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render endless traffic title', () => {
    const tree = renderer.create(<EndlessTrafficTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render endless traffic animation', () => {
    const tree = renderer.create(<EndlessTrafficAnimatedLogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
