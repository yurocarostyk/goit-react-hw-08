import React from 'react';
import './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => (
  <div className="login-container">
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;
