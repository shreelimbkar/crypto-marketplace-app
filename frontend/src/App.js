import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

import { ProtectedRoute } from "./protected.route";
import { Home, Dashboard } from "./components/dashboard";
import { Login, Register } from "./components/user";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Container fluid className="App">
        <Row>
          <Col className="p-0">
            <Switch>
              <GlobalContext.Provider value={{ user, setUser }}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
              </GlobalContext.Provider>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
