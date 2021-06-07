import React from 'react';
import styles from './Feedback.module.scss';

import Controls from './Controls';
import Statistics from './Statistics';
import Notification from './Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(({ good }) => {
      return {
        good: good + 1,
      };
    });
  };
  neutralIncrement = () => {
    this.setState(({ neutral }) => {
      return {
        neutral: neutral + 1,
      };
    });
  };
  badIncrement = () => {
    this.setState(({ bad }) => {
      return {
        bad: bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good * 100) / totalFeedback) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <Controls
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement}
          badIncrement={this.badIncrement}
        />
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}
export default Feedback;
