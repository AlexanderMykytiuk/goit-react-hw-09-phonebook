import React, { useState, useCallback } from 'react';
import styles from './ContactForm.module.scss';
import Button from '../Button';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperation } from '../../redux/Contacts';
import { getContacts } from '../../redux/Contacts/contacts-selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = useCallback(
    (name, number) => dispatch(contactsOperation.addContact(name, number)),
    [dispatch],
  );

  const handleInputChange = event => {
    const valueInput = event.currentTarget.name;

    switch (valueInput) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let expression = /^\d+/;
    if (!name || !number || expression.test(number) === false) {
      return toast('Please fill all fields in the correct format');
    }

    const findName = contacts.find(findContact => {
      return findContact.name === name;
    });

    if (findName) {
      toast(`${name} is already in the contacts`);
      reset();
    } else {
      addContact(name, number);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <h2>Add new contacts</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            name="number"
            type="tel"
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <Button text="Add contact" type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;