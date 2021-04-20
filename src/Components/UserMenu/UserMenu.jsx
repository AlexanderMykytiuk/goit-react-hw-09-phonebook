import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import authOperation from '../../redux/Auth/auth-operation';

import styles from './UserMenu.module.scss';
import kotik from './icon.png';
import InputIcon from '@material-ui/icons/Input';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => dispatch(authOperation.logout()), [
    dispatch,
  ]);

  return (
    <div>
      <div className={styles.greet}>
        <span>Welcome, {name}! </span>
        <img src={kotik} alt="cat" width="40" className={styles.icon} />
      </div>
      <button type="button" onClick={onLogout} className={styles.button}>
        Logout
        <InputIcon className={styles.input} />
      </button>
    </div>
  );
};

export default UserMenu;