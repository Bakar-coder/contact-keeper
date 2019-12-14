import React, { useReducer } from 'react';
import AuthContext from "./authContext";
import AuthReducer from './AuthReducer';
import setAuthToken from "../../utils/setAuthToken";
import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOGOUT,
  AUTH_ERROR } from '../types';

const AuthState = (props) => {
  const initialState = {
    token: null,
    isAuthenticated: false,
    loading: true,
    success: null,
    error: null,
    user: null
  };

  const authReducer = useReducer(AuthReducer, initialState);
  const [state, dispatch] = authReducer;

  // Load User

  // Register User
  const registerUser =  async user => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/users/register', user, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: REGISTER_FAIL, payload: {
          message: e.response.data.message,
          success: e.response.data.success
        } })
    }
  };

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  const clearSuccess = () => dispatch({ type: 'CLEAR_SUCCESS' });

  // Login User
  const loginUser =  async user => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/users/login', user, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    } catch (e) {
      dispatch({ type: LOGIN_FAIL, payload: {
          message: e.response.data.message,
          success: e.response.data.success
        } })
    }
  };


  // Logout User

  // Clear Errors


  return (
    <AuthContext.Provider value={{
      isAuthenticated: state.isAuthenticated,
      token: state.token,
      error: state.error,
      loading: state.loading,
      user: state.user,
      success: state.success,
      registerUser,
      loginUser,
      clearErrors,
      clearSuccess
    }}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
