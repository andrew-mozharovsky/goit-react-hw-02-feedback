import React from 'react';

import styles from './Controls.module.scss';

const Controls = ({ goodIncrement, neutralIncrement, badIncrement }) => {
  return (
    <div className={styles.controls}>
      <button className={styles.button} type="button" onClick={goodIncrement}>
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={neutralIncrement}
      >
        Neutral
      </button>
      <button className={styles.button} type="button" onClick={badIncrement}>
        Bad
      </button>
    </div>
  );
};

export default Controls;
