import React from 'react';
import shortid from 'shortid';
import s from '../Filter/Filter.module.css'
import { contactsSelectors} from '../../redux/contacts';
import { setFilter } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
   const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
    return (
        <label className={s.label}
            htmlFor={shortid.generate()}>
            Find contact by name
            <input className={s.input}
                name="filter"
                type='text'
                value={value}
                onChange={event=>dispatch(setFilter(event.target.value))}/>
        </label>
    )
}



export default Filter;

