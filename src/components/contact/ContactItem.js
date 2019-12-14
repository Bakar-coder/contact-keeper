import React, { useContext } from 'react';
import ContactContext from "../../context/contacts/contactContext";
const Contact = ({contact}) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent } = contactContext;
  const {id, name, email, phone, type } = contact;
  return (
    <div className="card">
      <h3> <span className="text-heading">{name}</span>  <span
        className={type === 'personal' ? "badge badge-primary": "badge badge-success"}>
        {type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </h3>
      <ul>
        {email && <li>{email}</li>}
        {phone && <li>{phone}</li>}
      </ul>
      <p>
        <button className="btn btn-primary" onClick={() => setCurrent(contact)}>Edit</button> {'  '}
        <button className="btn btn-danger"  onClick={() => deleteContact(id)}>Delete</button>
      </p>
    </div>
  );
};

export default Contact;