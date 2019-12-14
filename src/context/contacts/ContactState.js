import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import uuid from "uuid";
import {
  CLEAR_FILTER,
  SET_FILTER,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Johnson",
        email: "contact@johnson.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 2,
        name: "peter peterson",
        email: "contact-peter@gmail.com",
        phone: "333-333-3333",
        type: "personal"
      },
      {
        id: 3,
        name: "Sam Samson",
        email: "contact@samson.com",
        phone: "444-444-4444",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };

  const contactReducer = useReducer(ContactReducer, initialState);
  const [state, dispatch] = contactReducer;

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const filterContacts = text => {
    dispatch({ type: SET_FILTER, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        setCurrent,
        deleteContact,
        clearCurrent,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
