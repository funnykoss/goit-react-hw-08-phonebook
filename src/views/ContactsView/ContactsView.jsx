import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations } from "../../redux/contacts";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";
import s from './ContactsView.module.css';

export default function ContactsViewPage() {
      const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);
    
    return (
         <div className={s.container}>
        <Container>
     <h1 className={s.title}>
                {' '}
               Phonebook
                 </h1>
            <ContactForm />
            {/* <h2>Contacts</h2> */}
            <Filter />
            <ContactList />
            </Container>
            </div>
    )
}