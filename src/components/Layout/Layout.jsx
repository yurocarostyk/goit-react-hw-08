import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.layoutContainer}>
    <AppBar className={styles.appBarSpacing} />
    <main className={styles.mainContent}>
      <Outlet />
    </main>
  </div>
);

export default Layout;
