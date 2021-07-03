import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Login, Register } from "./components/user";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
