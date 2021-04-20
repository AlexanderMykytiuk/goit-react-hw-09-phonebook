// создает мемоизированный селектор
import { createSelector } from '@reduxjs/toolkit';
export const getIsLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );
  },
);
// то что было до createSelector

// export const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getContacts(state);
//   const normalizedContact = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedContact),
//   );
// };
