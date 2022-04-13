import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { LoaderSpinner } from '../Spinner/Spinner';
import { useFetchContactsQuery } from '../../redux/Phonebook/ContactSlice';
import css from './Phonebook-css/Phonebook.module.css';

export const Phonebook = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  const onChange = e => setFilter(e.target.value);

  const onFilteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <div className={css.phonebookBox}>
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />

      <h2>Contacts</h2>
      {data && data.length !== 0 ? (
        <Filter value={filter} onChange={onChange} />
      ) : (
        <h3>Your contacts list is empty</h3>
      )}

      {isFetching && <LoaderSpinner />}
      {data && <ContactList contacts={onFilteredContacts()} />}

      <Toaster position="top-right" />
    </div>
  );
};