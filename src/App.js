import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import Contact from './components/ContactList/Contact.jsx';
import s from './App.module.css';
import { contactsOperations } from './redux/contacts';
import * as fetchApi from './services/fetchApi';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { contacts, setContacts } = useState('');

  useEffect(() => {
    fetchApi.getContacts().then(setContacts);
  }, [setContacts]);
  return (
    <>
      <section className={s.section}>
        <ContactForm />
        <Contact />
        <Filter />
        <ContactList />
      </section>
    </>
  );
}
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
