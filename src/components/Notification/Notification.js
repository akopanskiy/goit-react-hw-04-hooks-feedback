import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Statistic/Statistic.module.css';

const NotificationMessage = ({ text }) => {
  return <p className={styles.notify}>{text}</p>;
};

NotificationMessage.defaultTypes = {
  text: '',
};
NotificationMessage.propTypes = {
  text: PropTypes.string,
};
export default NotificationMessage;
