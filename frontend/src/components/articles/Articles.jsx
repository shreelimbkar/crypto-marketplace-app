import React, { useState, useEffect } from "react";

import Header from "../dashboard/Header";
import Footer from "../dashboard/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import Subscription from "../subscription/Subscription";
import ArticlesList from "./ArticlesList";
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
  const [showArticles, setShowArticles] = useState(true);
  const [isArticleAdded, setIsArticleAdded] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [articles, setarticles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // load all articles on page load
  useEffect(() => {
    axios
      .get("/api/articles")
      .then((response) => {
        const result = JSON.parse(response.data.data);
        // console.log("Articles = ", result);
        setShowArticles(false);
        setarticles(result);
      })
      .catch((error) => console.log(error));
  }, [isArticleAdded]);

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
            setShowArticles(true);
            setIsArticleAdded("article added");
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
            </Col>
            <Col sm={4} className="p-4">
              <Card className="mb-4">
                <Card.Header as="h5">Newsletter Subscription</Card.Header>
                <Card.Body>
                  <Subscription />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="p-4">
              <Card>
                <Card.Header as="h5">All Articles</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Special title treatment</Card.Title> */}
                  <Card.Text as="div">
                    <ListGroup as="ul">
                      {showArticles ? (
                        <div className="text-center">
                          <Spinner
                            as="span"
                            animation="border"
                            size="lg"
                            role="status"
                            aria-hidden="true"
                          />
                        </div>
                      ) : (
                        articles.map((art, index) => {
                          return <ArticlesList key={index} data={art} />;
                        })
                      )}
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="p-4">
              <Card>
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
                      <Row>
                        <Col sm={6}>
                          <button
                            type="submit"
                            className="btn btn-dark btn-lg btn-block"
                            style={{
                              backgroundColor: "#293250",
                              color: "#fff",
                            }}
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
                        </Col>
                        <Col sm={6}>
                          <button
                            type="reset"
                            className="btn btn-dark btn-lg btn-block"
                            style={{
                              backgroundColor: "#293250",
                              color: "#fff",
                            }}
                          >
                            Reset
                          </button>
                        </Col>
                      </Row>
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
