import React from "react";
import ReactDom from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactState from "./context/contacts/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

ReactDom.render(
  <BrowserRouter>
    <AuthState>
      <AlertState>
      <ContactState>
        <App />
      </ContactState>
      </AlertState>
    </AuthState>
  </BrowserRouter>,
  document.getElementById("root")
);
