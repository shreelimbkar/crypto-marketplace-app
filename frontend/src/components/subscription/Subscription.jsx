import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Subscription() {
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    // console.log(JSON.stringify(data));
    let postData = {
      emailid: data.email,
    };
    if (e.target[0].value) {
      axios
        .post("/api/subscribe", postData)
        .then((response) => {
          const result = JSON.parse(response.data.data);
          result &&
            setSuccessMsg("Congratulations! You have successfully subscribed.");
          setTimeout(() => {
            postData = {};
            e.target[0].value = "";
            setSuccessMsg("");
          }, 2000);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="align-items-center">
          <Col sm={12} className="my-1">
            <p>
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
          </Col>
          <Col sm={8} className="my-1">
            <Form.Control
              id="emailid"
              type="email"
              autoComplete="off"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  message: "Incorrect email format",
                },
              })}
              style={{ border: errors.email && "1px solid red" }}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Subscribe</Button>
          </Col>
          {errors.email && <Col>{errors.email.message}</Col>}
          {successMsg && <Col style={{ color: "#60a906" }}>{successMsg}</Col>}
        </Row>
      </Form>
    </>
  );
}
