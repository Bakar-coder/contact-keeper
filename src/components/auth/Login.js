import React, { useState, useContext, useEffect } from 'react';
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const {loginUser, error, success, clearErrors} = authContext;
  const {alerts, setAlert} = alertContext;
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (error) {
      alerts.length === 0 && setAlert(error, 'danger');
      clearErrors()
    }
  }, [error, success]);

  const { email, password } = user;

  const onChange = e => setUser({
    ...user,
    [e.target.name]: e.target.value
  });

  const onsubmit = e => {
    e.preventDefault();
    if ( !email || !password ) {
      setAlert('All fields are not allowed to be empty!', 'danger')
    } else {
      loginUser(user);
    }
  };

  return (
    <div className="container">
      <form className="card form" onSubmit={onsubmit}>
        <h3 className="text-heading text-center">Sign In</h3>
        <input type="email" name="email" value={email}  placeholder="Email" onChange={onChange} />
        <input type="password" name="password" value={password}  placeholder="Password" onChange={onChange} />
        <div>
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
