import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
// import ContactsPage from './views/ContactsPage';
// import HomePage from './views/HomePage';
// import LoginPage from './views/LoginPage';
// import RegistrationPage from './views/RegistrationPage';
import authOperation from './redux/Auth/auth-operation';
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
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
class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
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
  }
  render() {
    return (
      // <Container>
      <div>
        <div id="demo" className={styles.demo}></div>
        <Container>
          <ToastContainer />
          <Suspense fallback={<Spinner />}>
            <AppBar />
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <PrivateRoute
                exact
                path={routes.contacts}
                component={ContactsPage}
                redirectTo="/login/"
              />
              <PublicRoute
                exact
                path={routes.login}
                component={LoginPage}
                restricted
                redirectTo="/contacts/"
              />
              <PublicRoute
                exact
                path={routes.registration}
                component={RegistrationPage}
                restricted
                redirectTo="/contacts/"
              />
            </Switch>
          </Suspense>
        </Container>
      </div>
      //  {/* </Container> */}
    );
  }
}

// function App() {
//   return (
//     <Container>
//       <ToastContainer />
//       <AppBar />
//       <Route exact path={routes.home} component={HomePage} />
//       <Route exact path={routes.contacts} component={ContactsPage} />
//       <Route exact path={routes.login} component={LoginPage} />
//       <Route exact path={routes.registration} component={RegistrationPage} />
//     </Container>
//   );
// }
const mapDispathToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(null, mapDispathToProps)(App);
