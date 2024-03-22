import * as React from 'react';
import svgTools from '../../svg/tools.svg';

const defaultStyle = {
  width: 40,
  height: 40,
} as React.CSSProperties;

const ToolsIcon = ({ style = {} }: { style?: React.CSSProperties } = {}) => (
  <img alt="Tools Icon" src={svgTools} style={{ ...defaultStyle, ...style }} />
);

export default React.memo(ToolsIcon);
