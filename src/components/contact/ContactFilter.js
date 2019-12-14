import React, { useRef, useEffect, useContext } from 'react';
import ContactContext from "../../context/contacts/contactContext";
import SearchIcon from '../../assets/img/Search-Zoom.svg'


const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const {filtered, clearFilter, filterContacts} = contactContext;

  const onChange = e => {
    return  text.current.value
      ? filterContacts(e.target.value)
      :clearFilter()
  };

  useEffect(() => {
    if (!filtered) {
      text.current.value = ''
    }
  }, [filtered]);

  return (
    <div style={{ position: 'relative' }} >
      <input type="text" ref={text} style={{ textAlign: 'left', background: '#fff' }} placeholder="Filter Contacts..." onChange={onChange} />
      <img src={SearchIcon} alt="..." style={{ width: '2rem', position: 'absolute', right: '2%', top: '40%', transform: 'translate(-50%, -50%)' }}/>
    </div>
  );
};

export default ContactFilter;