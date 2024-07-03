import * as React from 'react';
import SamiroyLogo from '../../vector/samiroy/SamiroyLogo';
import PongAnimation from './PongAnimation';

const SamiroyAnimatedLogo = () => (
  <div style={styles.wrapper}>
    <div style={styles.container}>
      <div style={styles.animation}>
        <PongAnimation />
      </div>
      <div style={styles.logo}>
        <SamiroyLogo style={styles.sprite} />
      </div>
    </div>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    overflow: 'clip',
    height: 150,
  },
  container: {
    display: 'inline-block',
    margin: 'auto',
    width: 'calc(100%)',
    height: 150,
    maxWidth: 360,
  },
  animation: {
    position: 'absolute',
    width: 'calc(100%)',
    display: 'contents',
  },
  logo: {
    display: 'inline-block',
    top: -138,
    position: 'relative',
  },
  sprite: {
    height: 128,
    width: 116,
  },
};

export default React.memo(SamiroyAnimatedLogo);
