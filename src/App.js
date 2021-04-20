import React, { Suspense, lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import authOperation from './redux/Auth/auth-operation';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Spinner from './Components/Spinner';
import routes from './routes';
import { Wave } from 'jparticles';
import styles from './App.module.css';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage.js'));
const ContactsPage = lazy(() => import('./views/ContactsPage.js'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const RegistrationPage = lazy(() => import('./views/RegistrationPage.js'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    new Wave('#demo', {
      num: 3,
      line: true,
      lineColor: [
        'rgba(0, 190, 112, 0.5)',
        'rgba(0, 190, 112, 0.7)',
        'rgba(0, 190, 112, 0.9)',
      ],
      lineWidth: [0.5, 0.7, 0.9],
      offsetLeft: [2, 1, 0],
      offsetTop: 0.5,
      crestHeight: [10, 14, 18],
      crestCount: 2,
      speed: 0.1,
    });
  }, []);
  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <div id="demo" className={styles.demo}></div>
      <Container>
        <ToastContainer />
        <Suspense fallback={<Spinner />}>
          <AppBar />
          <Switch>
            {/* <Route exact path={routes.home} component={HomePage} /> */}
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PrivateRoute exact path={routes.contacts} redirectTo="/login/">
              <ContactsPage />
            </PrivateRoute>
            <PublicRoute
              exact
              path={routes.login}
              restricted
              redirectTo="/contacts/"
            >
              <LoginPage />
            </PublicRoute>
            <PublicRoute
              exact
              path={routes.registration}
              restricted
              redirectTo="/contacts/"
            >
              <RegistrationPage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}
export default App;
