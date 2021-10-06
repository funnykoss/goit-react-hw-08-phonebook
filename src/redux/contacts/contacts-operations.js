import axios from 'axios';
import shortid from 'shortid';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';
axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContacts = (name, number) => async dispatch => {
  const contact = {
    id: shortid.generate(),
    name,
    number,
  };
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
  addContacts,
  deleteContacts,
};
