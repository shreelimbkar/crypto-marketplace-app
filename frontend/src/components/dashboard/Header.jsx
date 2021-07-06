import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">
          <img
            alt="Shri's Cryptocurrency MarketPlace"
            src={logo}
            width="48"
            height="48"
            className="d-inline-block"
          />{" "}
          Shri Cryptocurrency MarketPlace
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/login" className="nav-link">
              Log In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
