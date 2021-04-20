import React from 'react';

import styles from './ContactForm.module.scss';
import Button from '../Button';
import { toast } from 'react-toastify';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const valueInput = event.currentTarget.name;
    this.setState({ [valueInput]: event.currentTarget.value.trimLeft() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;
    let expression = /^\d+/;
    if (!name || !number || expression.test(number) === false) {
      return toast('Please fill all fields in the correct format');
    }

    const findName = contacts.find(findContact => {
      return findContact.name === name;
    });

    if (findName) {
      toast(`${name} is already in the contacts`);
      this.reset();
    } else {
      addContact(name, number);
      this.reset();
    }
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.container}>
        <h2>Add new contacts</h2>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <Button text="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
