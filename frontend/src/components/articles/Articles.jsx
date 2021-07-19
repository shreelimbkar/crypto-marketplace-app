import React, { useState } from "react";

import Header from "../dashboard/Header";
import Footer from "../dashboard/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  Spinner,
} from "react-bootstrap";
import bitcoin from "../../assets/bitcoin1.jpg";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});

export default function Articles() {
  const [showLoader, setShowLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    if (JSON.stringify({}) === "{}" && data) {
      setShowLoader(true);
      axios
        .post("/api/article", data)
        .then((response) => {
          const result = response.data;
          result && setSuccessMsg("Your article has successfully added.");
          setTimeout(() => {
            data = {};
            setShowLoader(false);
            setSuccessMsg("");
            reset();
          }, 2000);
        })
        .catch((error) => {
          setShowLoader(false);
          console.log(error);
        });
    }
  };
  return (
    <>
      <Header />
      <main className="Container" id="main">
        <Container fluid>
          <Row>
            <Col sm={8} className="p-4">
              <Image src={bitcoin} className="banner-img" />
              <Card className="mt-4">
                <Card.Header as="h5">Add Ariticles</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Articles on cryptocurrency are welcome to be added. Users
                    can follow the latest trends and news about various
                    Cryptocurrencies.
                  </Card.Text>
                  <form onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group mb-1">
                      <label htmlFor="title">Article title</label>
                      <input
                        type="text"
                        className={
                          (errors.title && "required form-control") ||
                          "form-control"
                        }
                        placeholder="Article title"
                        name="title"
                        id="title"
                        autoFocus
                        autoComplete="off"
                        {...register("title", { required: true })}
                      />
                      {errors?.title && (
                        <p className="p-1 m-0 text-danger">
                          Article title is required
                        </p>
                      )}
                    </div>
                    <div className="form-group mb-1">
                      <label htmlFor="description">Article description</label>
                      <Form.Group>
                        <Form.Control
                          className={
                            (errors.title && "required mb-1") || "mb-1"
                          }
                          name="description"
                          id="description"
                          {...register("description", { required: true })}
                          as="textarea"
                          rows={6}
                        />
                      </Form.Group>
                      {errors?.description && (
                        <p className="p-1 m-0 text-danger">
                          Article description is required
                        </p>
                      )}
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                        style={{ backgroundColor: "#293250", color: "#fff" }}
                      >
                        Add Article
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
                    </div>
                    {successMsg && (
                      <p className="text-center" style={{ color: "#00154f" }}>
                        {successMsg}
                      </p>
                    )}
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
