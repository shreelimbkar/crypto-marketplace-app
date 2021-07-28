import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import jwt_decode from "jwt-decode";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  const history = useHistory();
  let userDetails = null;
  let userFirstName,
    userRole = "";
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
    userRole = JSON.parse(userDetails.sub)[0].role;
  }
  return (
    <>
      <Navbar sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="Shri's Cryptocurrency MarketPlace"
              src={logo}
              width="48"
              height="48"
              className="d-inline-block"
            />{" "}
            <Navbar.Brand
              as="h1"
              className="d-none d-sm-inline-block m-0 p-0"
              style={{ fontSize: "2rem", verticalAlign: "middle" }}
            >
              Shri Cryptocurrency MarketPlace
            </Navbar.Brand>
            {/* <h1 className="d-inline-block m-0 align-middle"></h1> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" navbarScroll>
              {user?.token ? (
                <>
                  {user?.token && (
                    <span className="nav-link font-weight-bold">
                      Welcome {userFirstName} |{" "}
                    </span>
                  )}
                  <Link to="/" className="nav-link" title="Home">
                    Home
                  </Link>
                  <Link to="/dashboard" className="nav-link" title="Dashboard">
                    Dashboard
                  </Link>
                  {user?.token && userRole === "admin" && (
                    <Link to="/articles" className="nav-link" title="Articles">
                      Articles
                    </Link>
                  )}
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
        </Container>
      </Navbar>
    </>
  );
}
