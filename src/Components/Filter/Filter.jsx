import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ filter, onHandleInputSearch }) => {
  return (
    <div className={styles.findContact}>
      <h2 className={styles.title}>Find your contacts by name</h2>
      <label className={styles.findContactLabel}>
        <input
          className={styles.findContactInput}
          name="filter"
          type="text"
          value={filter}
          onChange={onHandleInputSearch}
          placeholder="Enter the name"
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  onHandleInputSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
