import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Login } from './components/user';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
