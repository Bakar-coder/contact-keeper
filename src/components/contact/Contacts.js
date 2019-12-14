import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactForm from "./ContactForm";
import Contact from "./ContactItem";
import "./contact.scss";
import ContactContext from "../../context/contacts/contactContext";
import ContactFilter from "./ContactFilter";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered} = contactContext;

  return (
    <div className="container">
      <div className="contacts">
        <div className="card-container">
          <ContactForm/>
        </div>

        <div className="card-container">
           <ContactFilter/>
           <TransitionGroup>
             {
               filtered
                 ? filtered.map((contact, index) =>  <CSSTransition
                   key={index} timeout={300} classNames="item">
                   <Contact  contact={contact}/>
                 </CSSTransition>)
                 : contacts.map((contact, index) =>  <CSSTransition key={index}  timeout={300} classNames="item">
                   <Contact  contact={contact}/>
                 </CSSTransition>)
             }
           </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Contacts;