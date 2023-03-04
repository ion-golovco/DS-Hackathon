import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { ContractsCollection } from "/imports/api/contracts";

import React from "react";

import { Main } from "./Main";
import { Dashboard } from "./Dashboard";

export const App = () => {
  const tasks = useTracker(() => ContractsCollection.find({}).fetch());
  return (
    <Router className="App">
      <Switch>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Switch>
    </Router>
  );
};
