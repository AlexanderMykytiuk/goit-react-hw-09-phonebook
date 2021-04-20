import React from 'react';

import styles from './common.module.scss';
const HomePage = () => (
  <div className={styles.mainTitle}>
    <h1>Welcome to the PhoneBook!</h1>
    <img
      className={styles.image}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_VjX2WgLFFX9DA9ONGER3v51M4CyKhkuJgDROsvU00gfkHoAgId6mvKxoPe_v3kCypQ&usqp=CAU"
      alt=""
    />
  </div>
);

export default HomePage;
