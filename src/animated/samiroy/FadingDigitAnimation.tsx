import * as React from 'react';
import DigitOne from '../../vector/poonji/MatrixDigitOne';
import DigitZero from '../../vector/poonji/MatrixDigitZero';
import './matrixAnimation.css';

type Props = {
  /** the digit to render */
  digit?: 0 | 1;
  /** resets the animation when the prop goes from true to false */
  reset?: boolean;
};

const FadingDigitAnimation = ({ digit = 0, reset = false }: Props = {}) => {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      animation: reset ? 'none' : 'matrix-animation-fade-out 0.7s forwards',
      WebkitAnimation: reset ? 'none' : 'matrix-animation-fade-out 0.7s forwards',
      marginBottom: 4,
    },
    one: {
      width: 6,
      height: 11,
      paddingLeft: 5,
      paddingRight: 3,
      paddingTop: 2,
      paddingBottom: 2,
      display: 'flex',
    },
    zero: {
      width: 8,
      height: 11,
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 2,
      paddingBottom: 2,
      display: 'flex',
    },
  };

  return (
    <div style={styles.container}>
      {digit === 1 ? (
        <div style={styles.one}>
          <DigitOne />
        </div>
      ) : (
        <div style={styles.zero}>
          <DigitZero />
        </div>
      )}
    </div>
  );
};

export default React.memo(FadingDigitAnimation);
