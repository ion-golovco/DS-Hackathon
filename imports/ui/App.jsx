import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import React from "react";

import { Main } from "./Main";
import { Dashboard } from "./Dashboard";

export const App = () => {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Switch>
    </Router>
  );
};
