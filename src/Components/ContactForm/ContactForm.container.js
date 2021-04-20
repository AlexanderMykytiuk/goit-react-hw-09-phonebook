import { connect } from 'react-redux';
import { contactsOperation } from '../../redux/Contacts';
import ContactForm from './ContactForm';
import { getContacts } from '../../redux/Contacts/contacts-selectors';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) =>
    dispatch(contactsOperation.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
