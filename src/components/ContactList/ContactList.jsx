import React, { useState } from 'react';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            {contact.name}: {contact.phone}
            <button onClick={() => handleDeleteClick(contact)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onDelete={handleDeleteConfirm}
      />
    </>
  );
};

export default ContactList;
