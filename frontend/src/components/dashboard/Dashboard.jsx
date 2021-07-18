import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bitcoin from "../../assets/bitcoin.jpg";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="Container" id="main">
        <Container fluid>
          <Row>
            <Col sm={8} className="p-4">
              <Image src={bitcoin} className="banner-img" />
              <Card className="mt-4">
                <Card.Header as="h5">Cryptocurrency Dashboard</Card.Header>
                <Card.Body>
                  {/* <Card.Title>Special title treatment</Card.Title> */}
                  <Card.Text>
                    Cryptocurrency is a type of online payment that may be used
                    to buy and sell products and services. Many businesses have
                    created their own currencies, known as tokens, that can be
                    exchanged for the goods or services that the business
                    offers. Consider them to be arcade tokens or casino chips.
                    To obtain the item or service, we will need to swap actual
                    money for bitcoin.
                  </Card.Text>
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
