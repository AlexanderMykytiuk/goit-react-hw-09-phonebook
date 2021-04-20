import React, { Suspense, lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
// import ContactsPage from './views/ContactsPage';
// import HomePage from './views/HomePage';
// import LoginPage from './views/LoginPage';
// import RegistrationPage from './views/RegistrationPage';
import authOperation from './redux/Auth/auth-operation';
import { useDispatch } from 'react-redux';

import { Switch } from 'react-router-dom';
import Spinner from './Components/Spinner';
import routes from './routes';
import { Wave } from 'jparticles';
import styles from './App.module.css';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "Home-page" */),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage.js' /* webpackChunkName: "Contacts-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "Login-page" */),
);
const RegistrationPage = lazy(() =>
  import(
    './views/RegistrationPage.js' /* webpackChunkName: "Registration-page" */
  ),
);
// useEffect вызывается каждый раз когда обновляется компонент

function App() {
  // componentDidMount() {
  //     this.props.onGetCurrentUser();
  //     new Particle('#demo', {
  //       proximity: 90,
  //       range: 130,
  //       maxSpeed: 0.6,
  //       lineShape: 'spider',
  //       parallax: true,
  //     });
  //   }
  const dispatch = useDispatch();

  useEffect(() => {
    new Wave('#demo', {
      num: 3,
      // Draw line
      line: true,
      // The colors of the three lines in sequence
      lineColor: [
        'rgba(0, 190, 112, 0.5)',
        'rgba(0, 190, 112, 0.7)',
        'rgba(0, 190, 112, 0.9)',
      ],
      // The width of the three lines in turn
      lineWidth: [0.5, 0.7, 0.9],
      // The offset value of the three lines from the left in turn
      offsetLeft: [2, 1, 0],
      // All three lines are 0.75 times the height of the top offset container
      offsetTop: 0.5,
      // The height of the crests of the three lines in sequence
      crestHeight: [10, 14, 18],
      // All three lines have only two crests
      crestCount: 2,
      speed: 0.1,
    });
    // передаем массив зависимостей(при каком значении должно выполнятся), если не передавать то useEffect выполняется при каждом изменении стейта,
    // либо же передавать пустой массив для рендeра- 1раз
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
              // component={LoginPage}
              restricted
              redirectTo="/contacts/"
            >
              <LoginPage />
            </PublicRoute>
            <PublicRoute
              exact
              path={routes.registration}
              // component={RegistrationPage}
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

// const mapDispathToProps = {
//   onGetCurrentUser: authOperation.getCurrentUser,
// };
