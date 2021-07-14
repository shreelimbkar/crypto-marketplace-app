import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import auth from "../../auth";

export default function header() {
  return (
    <>
      <Navbar sticky="top">
        <Navbar.Brand href="/">
          <img
            alt="Shri's Cryptocurrency MarketPlace"
            src={logo}
            width="48"
            height="48"
            className="d-inline-block"
          />{" "}
          <h1 className="d-inline-block m-0 align-middle">
            Shri Cryptocurrency MarketPlace
          </h1>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {auth.isAuthenticated() && (
              <>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </>
            )}

            {!auth.isAuthenticated() && (
              <>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
