import { connect } from 'react-redux';
import { contactsOperation } from '../../redux/Contacts';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../redux/Contacts/contacts-selectors';

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperation.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
