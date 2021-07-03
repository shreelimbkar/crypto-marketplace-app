import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import { Container, Row, Col } from "react-bootstrap";

export default function Login() {
  //   const [initialData, setInitialData] = useState([{}]);

  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((data) => setInitialData(data));
  //   }, []);

  return (
    <Container fluid className="App">
      <Row className="pt-5">
        <Col md={{ span: 4, offset: 4 }}>
          {/* <p>{initialData.title}</p> */}
          <form
            className="p-5"
            style={{ backgroundColor: "#ffd55a", color: "#293250" }}
          >
            <h3 className="text-center">Log in</h3>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label for="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="pwd"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              style={{ backgroundColor: "#293250", color: "#fff" }}
            >
              Log in
            </button>
            <Link to="/register">Register</Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
