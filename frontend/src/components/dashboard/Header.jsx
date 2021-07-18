import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  const history = useHistory();
  let user = useContext(GlobalContext);
  user = user?.token || {
    token: sessionStorage.getItem("token"),
  };
  const logout = () => {
    sessionStorage.removeItem("token");
    history.push("/");
  };
  console.log("header user", user);
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
            {user?.token ? (
              <>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </>
            ) : (
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
