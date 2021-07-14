import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import auth from "../../auth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

export default function Login() {
  const history = useHistory();
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    // console.log("DATA =", data);
    if (JSON.stringify({}) === "{}" && data) {
      axios
        .post("/api/users/login", data)
        .then((response) => {
          if (response.data.success && response.data.data.length > 2) {
            // const result = JSON.parse(response.data.data)[0];
            // console.log("ReSULT = ", result);
            auth.login();
            history.push("/");
          } else {
            setSuccessMsg("You forgot your email or password. Try again!");
          }
          setTimeout(() => {
            data = {};
            setSuccessMsg("");
            reset();
          }, 3000);
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(errors);
  return (
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
            </button>
            <p className="pt-2">
              <Link to="/register">Create new account? Register!</Link>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
