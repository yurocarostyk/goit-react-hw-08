import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css'; 

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div className={styles.container}>
      <span className={styles.welcome}>Welcome, {name}</span>
      <button className={styles.logoutButton} onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
