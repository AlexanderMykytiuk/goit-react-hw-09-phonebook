import { connect } from 'react-redux';
import { contactsActions } from '../../redux/Contacts';
import Filter from './Filter';
import { getFilter } from '../../redux/Contacts/contacts-selectors';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onHandleInputSearch: e =>
    dispatch(contactsActions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
