import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT,
  AUTH_ERROR } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload.message,
        success: payload.success,
        loading: false
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        success: true
      };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null,
        success: payload.success,
        error: payload.message,
        loading: false,
        token: null,
        user: null
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    case 'CLEAR_SUCCESS':
      return {
        ...state,
        success: null
      };
    default:
      return state;
  }
}