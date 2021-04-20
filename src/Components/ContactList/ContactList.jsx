import React from 'react';
import styles from './ContactList.module.scss';
import ListItem from '../ListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <ListItem contacts={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};

export default ContactList;
