import React from 'react';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsPage.module.css'; // Import the CSS module

const ContactsPage = () => (
  <div className={styles.contactsPage}>
    <h1>Your Contacts</h1>
    <div className={styles.formContainer}>
      <ContactForm />
    </div>
    <div className={styles.filterContainer}>
      <Filter />
    </div>
    <div className={styles.contactListContainer}>
      <ContactList />
    </div>
  </div>
);

export default ContactsPage;
