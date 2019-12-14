import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contacts from "./components/contact/Contacts";
import Layout from "./components/Layouts/Layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/Layouts/Alerts";


const App = () => {
  return (
    <Fragment>
      <Layout>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="item">
            <Alerts/>
          </CSSTransition>
        </TransitionGroup>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/api/users/register" component={Register} />
          <Route exact path="/api/users/login" component={Login} />
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;
