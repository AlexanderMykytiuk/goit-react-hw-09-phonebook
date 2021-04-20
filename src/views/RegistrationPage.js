import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import operation from '../redux/Auth/auth-operation';
import styles from './common.module.scss';
import { TextField, Button } from '@material-ui/core';

function RegistrationPage() {
  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  //  handleChange = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmit = useCallback(e => dispatch(operation.registration(e)), [
    dispatch,
  ]);
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.LoginRegistrationPage}>
      <h2>Please register</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.margin}>
          <TextField
            label="Name"
            variant="outlined"
            className={styles.textField}
            size="small"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
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
export default RegistrationPage;
