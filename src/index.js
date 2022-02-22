import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import reportWebVitals from './reportWebVitals';
let routes = (
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/about" title="About">
      <Expenses />
    </Route>
    <Route exact path="/user" title="User">
      <Invoices />
      </Route>
  </Switch>
);
ReactDOM.render(
  <React.StrictMode>
    <Router>
        {routes}
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
