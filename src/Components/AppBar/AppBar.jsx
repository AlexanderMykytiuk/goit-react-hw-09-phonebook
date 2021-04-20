import React from 'react';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import styles from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <div className={styles.containerHeader}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <Authorization />}
      </div>
    </header>
  );
};
const mapStateToPros = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToPros)(AppBar);
