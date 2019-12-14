import React, { useReducer }  from 'react';
import AlertContext from "./alertContext";
import AlertReducer from './alertReducer';
import {SET_ALERT, REMOVE_ALERT} from '../types';
import uuid from "uuid";


const AlertState = (props) => {
  const initialState = [];
  const alertReducer = useReducer(AlertReducer, initialState);
  const [state, dispatch] = alertReducer;

  const setAlert = (msg, type) => {
    const id = uuid.v4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000)
  };

  return <AlertContext.Provider value={{
    alerts: state,
    setAlert
  }}>{props.children}</AlertContext.Provider>
};

export default AlertState;
