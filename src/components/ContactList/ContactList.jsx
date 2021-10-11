import React from 'react';
import s from '../ContactList/ContactsList.module.css'
// import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts)
  const dispatch = useDispatch();
  return (
     <div className={s.container}>
    <ul>
     
      {
        contacts.map(({id, name, number}) =>(
          <li className={s.item} key={id}>
            {name} : {number}
            <button className={s.button}
              type='button'
              onClick={() => dispatch(contactsOperations.deleteContacts(id))} >
           
            Delete
            </button>
          </li>
        ))
      }
      
   </ul>
  </div>
  )
}

export default ContactList;


