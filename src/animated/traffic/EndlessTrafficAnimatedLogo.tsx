import * as React from 'react';
import CarChasis from '../../vector/traffic/CarChasis';
import CarShadow from '../../vector/traffic/CarShadow';
import CarTyres from '../../vector/traffic/CarTyres';
import './bounceAnimation.css';

const size = {
  height: 192,
  width: 256,
} as React.CSSProperties;

const EndlessTrafficAnimatedLogo = ({ style = {} }: { style?: React.CSSProperties } = {}) => {
  const layerStyle = (zIndex: number): React.CSSProperties => ({
    ...size,
    zIndex,
    position: 'absolute',
    display: 'content',
  });

  return (
    <div style={{ ...size, ...style }}>
      <div style={layerStyle(1)}>
        <CarShadow />
      </div>
      <div className="bounce" style={{ ...layerStyle(2) }}>
        <CarChasis />
      </div>
      <div style={layerStyle(3)}>
        <CarTyres />
      </div>
    </div>
  );
};

export default React.memo(EndlessTrafficAnimatedLogo);
