import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter),
    );
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  getFilter,
  getVisibleContacts,
};
