import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.scss";

import Home from "./components/dashboard";
import { Login, Register } from "./components/user";

function App() {
  return (
    <Router>
      <Container fluid className="App">
        <Row>
          <Col>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
