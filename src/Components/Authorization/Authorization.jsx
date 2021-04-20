import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Authorization.module.scss';
import InputIcon from '@material-ui/icons/Input';

const Authorization = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul>
        <li className="navbar-brand">
          <NavLink
            to={routes.registration}
            className={styles.current}
            activeClassName={styles.selected}
          >
            Registration
          </NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink
            to={routes.login}
            className={styles.current}
            activeClassName={styles.selected}
          >
            Login
            <InputIcon className={styles.input} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Authorization;
