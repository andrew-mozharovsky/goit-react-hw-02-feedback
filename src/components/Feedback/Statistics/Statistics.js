import React from 'react';

import styles from './Statistics.module.scss';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>Statistics</h2>
      <div className={styles.contant_container}>
        <p className={styles.content}>
          Good:<span className={styles.value}> {good}</span>
        </p>
        <p className={styles.content}>
          Neutral:<span className={styles.value}> {neutral}</span>
        </p>
        <p className={styles.content}>
          Bad:<span className={styles.value}> {bad}</span>
        </p>
      </div>
      <div className={styles.total}>
        <p className={styles.total_content}>
          Total: <span className={styles.value}> {countTotalFeedback()}</span>
        </p>
        <p className={styles.total_content}>
          Positive feedback:
          <span className={styles.value}>
            {' '}
            {countPositiveFeedbackPercentage()}%
          </span>
        </p>
      </div>
    </div>
  );
};
export default Statistics;
