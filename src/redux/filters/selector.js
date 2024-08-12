export const selectFilteredContacts = (state) => {
    const { filter, contacts } = state;
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.items.filter(({ name, phone }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      phone.includes(normalizedFilter)
    );
  };
  