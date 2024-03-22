import * as React from 'react';
import MatrixAnimation from './MatrixAnimation';
import PoonjiLogo from '../../vector/poonji/PoonjiLogo';

type Props = {
  /** whether the animation is running */
  running?: boolean;
};

const PoonjiAnimatedLogo = ({ running = true }: Props = {}) => {
  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      width: '100%',
    },
    animations: {
      display: 'flex',
      width: '100%',
      maxWidth: 360,
      margin: 'auto',
    },
    matrixLeft: {
      float: 'left',
      marginTop: 6,
    },
    matrixRight: {
      float: 'right',
      marginTop: 6,
      flexGrow: 1,
    },
    logo: {
      margin: 'auto',
      marginTop: 16,
      height: 140,
      width: 140,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.animations}>
        <div style={styles.matrixLeft}>
          <MatrixAnimation running={running} />
        </div>
        <div style={styles.matrixRight}>
          <MatrixAnimation running={running} reverse />
        </div>
      </div>
      <div style={{ marginTop: -160 }}>
        <PoonjiLogo style={styles.logo} />
      </div>
    </div>
  );
};

export default React.memo(PoonjiAnimatedLogo);
