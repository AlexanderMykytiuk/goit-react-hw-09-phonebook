import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onClick, text, type = 'button' }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
