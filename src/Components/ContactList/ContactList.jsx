import React from 'react';
import styles from './ContactList.module.scss';
import ListItem from '../ListItem';

import { useDispatch, useSelector } from 'react-redux';
import { contactsOperation } from '../../redux/Contacts';

import { getVisibleContacts } from '../../redux/Contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperation.deleteContact(id));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <ListItem contacts={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};

export default ContactList;