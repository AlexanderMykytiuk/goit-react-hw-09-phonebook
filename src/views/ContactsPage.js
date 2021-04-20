import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperation from '../redux/Contacts/contacts-operation';
import { getIsLoading } from '../redux/Contacts/contacts-selectors';
import Spinner from '../Components/Spinner';
import styles from './common.module.scss';

function ContactsPage() {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactContainer}>
      <ContactForm />
      <Filter />
      {isLoading && <Spinner />}
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default ContactsPage;
