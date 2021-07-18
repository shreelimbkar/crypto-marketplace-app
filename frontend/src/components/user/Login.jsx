import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Link, Redirect } from "react-router-dom";
import logo from "../../assets/logo.svg";

import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

export default function Login() {
  const [showLoader, setShowLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const { setUser } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    // console.log("DATA =", data);
    if (JSON.stringify({}) === "{}" && data) {
      setShowLoader(true);
      axios
        .post("/api/users/login", data)
        .then((response) => {
          // console.log("response ", response);
          if (response.data?.success && response.data?.data) {
            const result = response.data.data;
            setUser({
              token: result,
            });
            sessionStorage.setItem("token", result);
            setShowLoader(false);
            // console.log("ReSULT = ", result);
            // auth.login();
            // history.push("/dashboard");
          } else {
            setShowLoader(false);
            setSuccessMsg("You forgot your email or password. Try again!");
          }
        })
        .catch((error) => {
          setShowLoader(false);
          setSuccessMsg("You forgot your email or password. Try again!");
          console.log(error);
        });
      setTimeout(() => {
        data = {};
        setShowLoader(false);
        setSuccessMsg("");
        // reset();
      }, 3000);
    }
  };
  return !sessionStorage.getItem("token") ? (
    <Container fluid className="App">
      <Row className="pt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <p className="text-center">
            <Link to="/">
              <img
                alt="Shri's Cryptocurrency MarketPlace"
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
            onSubmit={handleSubmit(submitForm)}
          >
            {successMsg && (
              <p className="text-center text-danger">{successMsg}</p>
            )}
            <h3 className="text-center">Log in</h3>

            <div className="form-group m-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                id="email"
                autoFocus
                autoComplete="off"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="p-1 m-0 text-danger">Enter valid email address</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors?.password && (
                <p className="p-1 m-0 text-danger">
                  Password is required. Please make sure your password is
                  between 4 and 15 characters.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              style={{ backgroundColor: "#293250", color: "#fff" }}
            >
              Log in
              {showLoader && (
                <div className="float-right">
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              )}
            </button>
            <p className="pt-2">
              <Link to="/register">Create new account? Register!</Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  ) : (
    <Redirect to="/dashboard" />
  );
}
