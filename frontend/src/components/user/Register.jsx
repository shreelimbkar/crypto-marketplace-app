import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Register() {
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
        .post("/api/users/register", data)
        .then((response) => {
          // console.log("response====", response);
          const result = response.data;
          result && setSuccessMsg("You have successfully registered.");
          setTimeout(() => {
            data = {};
            setSuccessMsg("");
            reset();
          }, 2000);
        })
        .catch((error) => console.log(error));
    }
  };
  // console.log(errors);
  return (
    <Container fluid className="App" id="register">
      <Row className="pt-2">
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
            onSubmit={handleSubmit(submitForm)}
          >
            {successMsg && (
              <p className="text-center" style={{ color: "#00154f" }}>
                {successMsg}
              </p>
            )}
            <h3 className="text-center">Register</h3>

            <div className="form-group mb-1">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className={
                  (errors.firstName && "required form-control") ||
                  "form-control"
                }
                placeholder="First name"
                name="firstName"
                id="firstName"
                autoComplete="off"
                {...register("firstName", { required: true })}
              />
              {errors?.firstName && (
                <p className="p-1 m-0 text-danger">First Name is required</p>
              )}
            </div>

            <div className="form-group m-1">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lastName"
                id="lastName"
                autoComplete="off"
                {...register("lastName", { required: true })}
              />
              {errors?.lastName && (
                <p className="p-1 m-0 text-danger">Last Name is required</p>
              )}
            </div>

            <div className="form-group m-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                id="email"
                autoComplete="off"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="p-1 m-0 text-danger">Enter valid email address</p>
              )}
            </div>

            <div className="form-group m-1">
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
                <p className="p-1 m-0 text-danger">Password is required</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
              />
              {errors?.confirmPassword && (
                <p className="p-1 m-0 text-danger">Password should match</p>
              )}
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
