import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Components/landing';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import reportWebVitals from './reportWebVitals';
let routes = (
  <Switch>
    <Route exact path="/">
  <Home />
    </Route>
  </Switch>
);
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
        {routes}
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
