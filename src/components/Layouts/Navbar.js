import React, { Fragment, useState } from 'react';
import {Link} from "react-router-dom";
import NavIcon from '../../assets/img/menu.svg';
import "./navbar.scss";

const Navbar = () => {
  const [state, setState] = useState({
    isOpen: false
  });

  const { isOpen } = state;

  const toggleNav = () => {
    setState({isOpen: !isOpen})
  };

  return (
    <Fragment>
      <nav className="navbar">
        <div className="container navbar-content">
          <h3 className="logo"><Link to="/">Contact Keeper</Link></h3>
          <img src={NavIcon} alt="menu" style={{ height: '4.2rem' }} className="nav-icon" onClick={toggleNav} />
          <ul className="list-group">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/api/users/register">Register</Link></li>
            <li className="list-item"><Link to="/api/users/login">Login</Link></li>
          </ul>
        </div>
      </nav>

      <div className={isOpen ? 'toolbar-open' : 'toolbar'}>
        <div className="toolbar-header">
          <h3>Contact Keeper</h3>
        </div>
        <div className="toolbar-content">
          <ul >
            <li><Link to="/" onClick={toggleNav}>Home</Link></li>
            <li ><Link to="/api/users/register" onClick={toggleNav}>Register</Link></li>
            <li ><Link to="/api/users/login" onClick={toggleNav}>Login</Link></li>
          </ul>
        </div>
      </div>

      <div className={isOpen ? "back-drop-open": "back-drop"} onClick={toggleNav}/>
    </Fragment>
  );
};

export default Navbar;