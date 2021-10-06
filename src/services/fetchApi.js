import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3004';

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addNewContact = async newContact => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const deleteContact = async id => {
  try {
    const response = axios.delete(`/contats/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const filterContact = async id => {
  try {
    const response = axios.get(`/contats/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
