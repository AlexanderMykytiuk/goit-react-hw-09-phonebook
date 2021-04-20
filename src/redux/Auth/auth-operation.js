import axios from 'axios';
import actions from './auth-actions';
const {
  registrationRequest,
  registrationSuccess,
  registrationrError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = actions;

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const registration = userData => async dispatch => {
  dispatch(registrationRequest());
  const response = await axios.post('users/signup', userData);
  dispatch(registrationSuccess(response.data));
  console.log(response.data);
  token.set(response.data.token);
  try {
  } catch (error) {
    dispatch(registrationrError(error.message));
  }
};
const login = userData => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('users/login', userData);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    dispatch(loginError(error.message));
  }
};
const logout = () => async dispatch => {
  dispatch(logoutRequest());
  await axios.post('users/logout');
  dispatch(logoutSuccess());
  token.unset();
  try {
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    autorization: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default { registration, login, logout, getCurrentUser };
