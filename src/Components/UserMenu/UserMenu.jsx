import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import authOperation from '../../redux/Auth/auth-operation';
import { TextField, Button } from '@material-ui/core';
import styles from './UserMenu.module.scss';
import kotik from './icon.png';
import InputIcon from '@material-ui/icons/Input';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <div className={styles.greet}>
      <span>Welcome, {name}! </span>
      <img src={avatar} alt="Vendeta" width="40" className={styles.icon} />
    </div>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
      <InputIcon className={styles.input} />
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: kotik,
});

const mapDispatchToProps = {
  onLogout: authOperation.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
