import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import jwt_decode from "jwt-decode";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  const history = useHistory();
  let userDetails = null;
  let userFirstName = "";
  let user = useContext(GlobalContext);
  user = user?.token || {
    token: sessionStorage.getItem("token"),
  };
  const logout = () => {
    sessionStorage.removeItem("token");
    history.push("/");
  };
  // console.log("header user", user);
  if (user?.token) {
    userDetails = jwt_decode(user.token);
    userFirstName = JSON.parse(userDetails.sub)[0].firstName;
  }
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
                {user?.token && (
                  <span className="nav-link font-weight-bold">
                    Welcome {userFirstName} |{" "}
                  </span>
                )}
                <Link to="/dashboard" className="nav-link" title="Dashboard">
                  Dashboard
                </Link>
                <Link to="/articles" className="nav-link" title="Articles">
                  Articles
                </Link>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    logout();
                  }}
                  title="Logout"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {!user?.token && (
                  <span className="nav-link font-weight-bold">
                    Welcome Guest |{" "}
                  </span>
                )}
                <Link to="/register" className="nav-link" title="Register">
                  Register
                </Link>
                <Link to="/login" className="nav-link" title="Log In">
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
