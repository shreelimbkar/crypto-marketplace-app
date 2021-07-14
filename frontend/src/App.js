import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

import { ProtectedRoute } from "./protected.route";
import { Home, Dashboard } from "./components/dashboard";
import { Login, Register } from "./components/user";
import auth from "./auth";

function App() {
  return (
    <Router>
      <Container fluid className="App">
        <Row>
          <Col className="p-0">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* {console.log("isauthenticated: ", auth.isAuthenticated())} */}
              <ProtectedRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
