import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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

const initialState = {
  name: null,
  email: null,
};

const user = createReducer(initialState, {
  [registrationSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [registrationrError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});
const isLogedIn = createReducer(false, {
  [registrationSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,

  [registrationrError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isLogedIn,
  token,
  error,
});
