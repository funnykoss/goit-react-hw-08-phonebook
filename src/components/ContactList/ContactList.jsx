import React from 'react';
import s from '../ContactList/ContactsList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { useSelector } from 'react-redux';

const ContactList = ({  onDeleteContact  }) => {
  const contacts = useSelector(state=>contactsSelectors.getVisibleContacts(state))
  return (
    <ul>
      {
        contacts.map(({id, name, number}) =>(
          <li className={s.item} key={id}>
            {name} : {number}
            <button className={s.button}
              type='button'
              onClick={() => onDeleteContact(id)} >
           
            Delete
            </button>
          </li>
        ))
      }
   </ul>
  )
}


const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
 });

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}


