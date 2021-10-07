import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          type="button"
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
