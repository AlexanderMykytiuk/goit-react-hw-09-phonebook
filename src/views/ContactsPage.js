import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from '../Components/ContactList';
import ContactForm from '../Components/ContactForm';
import Filter from '../Components/Filter';
import { connect } from 'react-redux';
import contactsOperation from '../redux/Contacts/contacts-operation';
import Spinner from '../Components/Spinner';
import styles from './common.module.scss';

class ContactsPage extends React.Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className={styles.contactContainer}>
        <ContactForm />
        <Filter />
        {this.props.isLoading && <Spinner />}
        <ContactList />
        <ToastContainer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
// export default App;
