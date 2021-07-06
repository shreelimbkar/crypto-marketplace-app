import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";

export default function header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="./">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
