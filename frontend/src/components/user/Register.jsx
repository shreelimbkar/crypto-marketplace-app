import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { Container, Row, Col } from "react-bootstrap";

export default function Register() {
  return (
    <Container fluid className="App" id="register">
      <Row className="pt-5">
        <Col md={{ span: 4, offset: 4 }}>
          <p className="text-center">
            <Link to="/">
              <img
                alt="Shri Cryptocurrency MarketPlace"
                src={logo}
                width="64"
                height="64"
                className="d-inline-block"
              />
            </Link>
          </p>
          <form
            className="p-3"
            style={{ backgroundColor: "#ffd55a", color: "#293250" }}
          >
            <h3 className="text-center">Register</h3>

            <div className="form-group">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="firstname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="lastname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password</label>
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
            <p className="pt-2">
              <Link to="/login">Already registered?</Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
