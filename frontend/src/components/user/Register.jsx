import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";

import { Container, Row, Col } from "react-bootstrap";

export default function Register() {
  return (
    <Container fluid className="App">
      <Row className="pt-5">
        <Col md={{ span: 4, offset: 4 }}>
          {/* <p>{initialData.title}</p> */}
          <form
            className="p-5"
            style={{ backgroundColor: "#ffd55a", color: "#293250" }}
          >
            <h3 className="text-center">Register</h3>

            <div className="form-group">
              <label for="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstname"
              />
            </div>

            <div className="form-group">
              <label for="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastname"
              />
            </div>

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
              Register
            </button>
            <Link to="/">Login</Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
