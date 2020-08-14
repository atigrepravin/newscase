import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import "./app.css";
import { routes } from "../../routes";

function App() {
  return (
    <Router>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/search">Search</NavLink></li>
      </ul>
      <Switch>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />
        })}
      </Switch>
    </Router>
  )
}

export default App;
