import React, { useState, useContext, useEffect } from 'react';
import './auth.css'
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import validEmail from "../../utils/emailValidation";

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, username, email, password, password2 } = user;
  const { registerUser, error, clearErrors, success, clearSuccess } = authContext;
  const {alerts,setAlert} = alertContext;

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }

    if (success) {
      props.history.push('/api/users/login');
      setAlert('Registration successful, please login...', 'success');
      clearErrors();
      clearSuccess();
    }

  }, [error, success]);


  const onChange = e => setUser({
    ...user,
    [e.target.name]: e.target.value
  });

  const onsubmit = e => {
    e.preventDefault();
    if (!firstName || !lastName || !username || !email || !password || !password2) {
      alerts.length === 0 && setAlert('All fields are not allowed to be empty!', 'danger')
    } else if (!validEmail(email)) {
      alerts.length === 0 && setAlert('Please enter a valid email address...', 'danger')
    } else if (password.length < 8) {
      alerts.length === 0 && setAlert('Password must be at least 8 characters... ', 'danger')
    } else if(password !== password2) {
      alerts.length === 0 && setAlert("Passwords don't match...", 'danger')
    } else {
       registerUser({
         firstName, lastName, username, email, password,
       });
    }
  };

  return (
    <div className="container">
      <form className="card form" onSubmit={onsubmit}>
        <h3 className="text-heading text-center">Sign Up</h3>
        <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={onChange} />
        <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={onChange} />
        <input type="text" name="username" value={username} placeholder="Username" onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="Email" onChange={onChange} />
        <input type="password" name="password" value={password} placeholder="Password" onChange={onChange} />
        <input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={onChange} />
        <div>
          <button className="btn btn-primary btn-lg">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

