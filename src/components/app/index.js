import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "fontsource-roboto";

import "./app.css";
import { routes } from "../../routes";
import PrimarySearchAppBar from "../navbar";

function App() {
  return (
    <Router>
      <PrimarySearchAppBar />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
