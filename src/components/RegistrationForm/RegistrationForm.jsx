import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css'; 

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.formContainer}>
          <div className={styles.formField}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <Field type="text" name="name" className={styles.formInput} />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <Field type="email" name="email" className={styles.formInput} />
            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="password" className={styles.formLabel}>Password</label>
            <Field type="password" name="password" className={styles.formInput} />
            <ErrorMessage name="password" component="div" className={styles.errorMessage} />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
