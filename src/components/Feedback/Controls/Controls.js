import React from 'react';

import styles from './Controls.module.scss';

export const Controls = ({ incrementFeedback }) => {
  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        type="button"
        onClick={incrementFeedback('good')}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={incrementFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={incrementFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
