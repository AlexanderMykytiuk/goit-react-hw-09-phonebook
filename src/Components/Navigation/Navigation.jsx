import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';

import SvgIcon from '@material-ui/core/SvgIcon';

import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => {
  return (
    <div>
      <NavLink
        className={styles.svg}
        exact
        to={routes.home}
        className={styles.current}
        activeClassName={styles.selected}
        id="home"
      >
        Home{' '}
        <SvgIcon className={styles.home}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </NavLink>

      <div className={styles.contacts}>
        {isAuthenticated && (
          <NavLink
            exact
            to={routes.contacts}
            className={styles.current}
            activeClassName={styles.selected}
            id="contacts"
          >
            Contacts
          </NavLink>
        )}
      </div>
    </div>
  );
};

const mapStateToPros = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToPros)(Navigation);

// export default Navigation;
