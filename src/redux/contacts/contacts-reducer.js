import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './contacts-type';
import itemsState from '../../contact.json';
import {
  fetchContactSuccess,
  fetchContactError,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  setFilter,
} from './contacts-actions';

const items = createReducer(itemsState, {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  error,
  filter,
});
