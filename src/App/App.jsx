import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { PrivateRoute } from '../components/PrivateRoute/PrivatRoute';
import { RestrictedRoute } from '../components/RestrictedRoute/RestrictedRoute';
import styles from './App.module.css'; 

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      {isRefreshing ? (
        <div className={styles.loading}>Refreshing user...</div>
      ) : (
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
              />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
