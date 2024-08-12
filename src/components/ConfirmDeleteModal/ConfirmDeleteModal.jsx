import React from 'react';
import styles from './ConfirmDeleteModal.module.css';

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this contact?</p>
        <div className={styles.buttons}>
          <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
          <button onClick={onRequestClose} className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
