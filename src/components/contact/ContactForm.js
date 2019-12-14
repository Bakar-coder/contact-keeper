import React, { useState, useContext, useEffect } from 'react';
import ContactContext from "../../context/contacts/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {current, addContact, updateContact, clearCurrent} = contactContext;
  const [contact , setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current) {
      setContact(current)
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      })
    }
  }, [current]);

  const {name, email, type, phone} = contact;

  const onChange = e => setContact({
    ...contact,
    [e.target.name]: e.target.value
  });

  const onsubmit = e => {
    e.preventDefault();
    if (current) {
      updateContact(contact)
    } else {
      addContact(contact)
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
    clearAll();
  };

  const clearAll = () => {
    clearCurrent()
  };

  return (
    <form className="card" onSubmit={onsubmit}>
      <h3 className="text-heading text-center">{ current ? "Edit Contact" : "Add Contact"  }</h3>
      <input type="text" name="name" value={name} placeholder="Name" onChange={onChange} required/>
      <input type="email" name="email" value={email} placeholder="Email" onChange={onChange} required/>
      <input type="text" name="phone" value={phone} placeholder="Phone" onChange={onChange} required/>
      <h4>Contact Type</h4>
       <div className="form-group">
         <input
           type="radio"
           className="radio-input"
           name="type" value="personal"
           checked={type === 'personal'}
           onChange={onChange} id="personal"/>
         <label htmlFor="personal"> <span className="radio-button"/>{' '} Personal</label>
       </div>

      <div className="form-group">
        <input
          type="radio"
          className="radio-input"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange} id="professional"/>
        <label htmlFor="professional"> <span className="radio-button"/>{' '} Professional</label>
      </div>

      <div>
        <button className="btn btn-primary btn-lg">{ current ? "Update Contact" : "Add Contact"  }</button> {' '}
        {current && <button className="btn btn-success btn-lg" onClick={clearAll}>Clear</button>}
      </div>
    </form>
  );
};

export default ContactForm;