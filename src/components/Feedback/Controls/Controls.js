import React from 'react';

import styles from './Controls.module.scss';

const Controls = ({ incrementFeedback, options }) => {
  return (
    <div className={styles.controls}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={styles.button}
            type="button"
            onClick={incrementFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default Controls;
