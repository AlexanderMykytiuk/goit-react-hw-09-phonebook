import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../redux/Auth/auth-operation';
import styles from './common.module.scss';
import { TextField, Button } from '@material-ui/core';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  const onLogin = useCallback(e => dispatch(operation.login(e)), [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.LoginRegistrationPage}>
      <h2>Please sign in to your account</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.margin}>
          <TextField
            label="E-mail"
            variant="outlined"
            className={styles.textField}
            size="small"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.margin}>
          <TextField
            label="Password"
            variant="outlined"
            className={styles.textField}
            size="small"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            className={styles.button}
            type="submit"
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
