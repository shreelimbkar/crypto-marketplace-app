import React, { useState, useEffect } from "react";

import Parser from "html-react-parser";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card, Image, Spinner } from "react-bootstrap";
import axios from "axios";
import bitcoin from "../../assets/bitcoin2.jpg";
import News from "../news/News";
import Subscription from "../subscription/Subscription";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [articles, setarticles] = useState([]);
  // load all articles on page load
  useEffect(() => {
    setShowLoader(true);
    axios
      .get("/api/articles")
      .then((response) => {
        const result = JSON.parse(response.data.data);
        console.log("Articles = ", result);
        setarticles(result);
        setShowLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setShowLoader(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="Container" id="main">
        <Container fluid>
          <Row>
            <Col sm={8} className="p-4">
              <Image src={bitcoin} className="banner-img" />
              {showLoader ? (
                <div className="text-center p-3">
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
                  return (
                    <Card className="mt-4" key={index}>
                      <Card.Header as="h5">{art.title}</Card.Header>
                      <Card.Body>{Parser(art.description)}</Card.Body>
                    </Card>
                  );
                })
              )}
            </Col>
            <Col sm={4} className="p-4">
              <Card className="mb-4">
                <Card.Header as="h5">Newsletter Subscription</Card.Header>
                <Card.Body>
                  <Subscription />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header as="h5">Cryptocurrency News</Card.Header>
                <Card.Body className="news-list" style={{ maxHeight: "100vh" }}>
                  <News />
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
