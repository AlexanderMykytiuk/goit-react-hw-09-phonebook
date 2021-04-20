import axios from 'axios';
import actions from './contacts-actions';
const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = actions;

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const response = await axios.get('/contacts');
    dispatch(fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};
const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());
  try {
    const response = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = contactID => async dispatch => {
  dispatch({
    type: deleteContactRequest(),
  });
  try {
    await axios.delete(`./contacts/${contactID}`);
    dispatch(deleteContactSuccess(contactID));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export default { addContact, deleteContact, fetchContacts };
