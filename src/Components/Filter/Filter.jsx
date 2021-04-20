import React, { useCallback } from 'react';
import styles from './Filter.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '../../redux/Contacts';
import { getFilter } from '../../redux/Contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onHandleInputSearch = useCallback(
    e => dispatch(contactsActions.filterContact(e.currentTarget.value)),
    [dispatch],
  );

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

export default Filter;