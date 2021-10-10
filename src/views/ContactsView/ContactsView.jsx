import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";
import Container from "../../components/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsViewPage() {
    const contacts = useSelector(contactsSelectors.getVisibleContacts)
      const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);
    
    return (
        
        <Container>
        <ContactForm />
        {contacts.length > 0 && (
        <>
            <Filter />
            <ContactList />
        </>
        )}
        </Container>
    )
}