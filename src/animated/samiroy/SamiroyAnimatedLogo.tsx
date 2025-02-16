import * as React from 'react';
import SamiroyLogo from '../../vector/samiroy/SamiroyLogo';
import MatrixAnimation from './MatrixAnimation';

const SamiroyAnimatedLogo = () => (
  <div style={styles.container}>
    <div style={styles.animation}>
      <MatrixAnimation />
    </div>
    <div style={styles.logo}>
      <SamiroyLogo style={styles.sprite} />
    </div>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'inline-block',
    margin: 'auto',
    position: 'relative',
  },
  animation: {
    top: 18,
    left: 36,
    position: 'absolute',
    zIndex: 1,
  },
  logo: {
    display: 'inline-block',
    position: 'relative',
  },
  sprite: {
    height: 192,
    width: 174,
  },
};

export default React.memo(SamiroyAnimatedLogo);
