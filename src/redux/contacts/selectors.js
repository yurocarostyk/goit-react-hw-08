export const selectAllContacts = (state) => state.contacts;
export const selectFilteredContacts = (state, filter) => {
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
