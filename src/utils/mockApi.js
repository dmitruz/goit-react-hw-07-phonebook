import axios from 'axios';

axios.defaults.baseURL = 'https://623dd67be8fbc4f162683dd2.mockapi.io';

export const addContactApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(({ data }) => data)
    .catch(err => err);
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => err);
};

export const deleteContactApi = id => {
  return axios
    .delete(`/contacts/${id}`)
    .then(() => id)
    .catch(err => err);
};