import {
  CLEAR_FILTER,
  SET_FILTER,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT
} from "../types";

export default (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          return contact.id === payload.id ? payload : contact
        })
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_FILTER:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const reg = new RegExp(`${payload}`, 'gi');
          return contact.name.match(reg) || contact.email.match(reg);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
}