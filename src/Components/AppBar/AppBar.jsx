import React from 'react';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <div className={styles.containerHeader}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Authorization />}
      </div>
    </header>
  );
};

export default AppBar;