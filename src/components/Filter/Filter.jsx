import React from 'react';
import shortid from 'shortid';
import s from '../Filter/Filter.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors} from '../../redux/contacts';
import { setFilter } from '../../redux/contacts';
 const Filter = ({ value, onChange })=> {
    return (
        <label className={s.label}
            htmlFor={shortid.generate()}>
            Find contact by name
            <input className={s.input}
                name="filter"
                type='text'
                value={value}
                onChange={onChange}/>
        </label>
    )
}

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(setFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.prototype = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}