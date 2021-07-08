import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import bitcoin from "../../assets/bitcoin2.jpg";
import News from "../news/News";
import Subscription from "../subscription/Subscription";

export default function Home() {
  return (
    <>
      <Header />
      <main className="Container" id="main">
        <Container fluid>
          <Row>
            <Col sm={8} className="p-4">
              <Image src={bitcoin} className="banner-img" />
              <Card className="mt-4">
                <Card.Header as="h5">What is cryptocurrency?</Card.Header>
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
                  <Card.Text>
                    Blockchain is the technology that enables cryptocurrency to
                    function. Blockchain is a decentralized system that
                    organizes and records transactions across multiple
                    computers. The security of this technology is part of its
                    attraction. We may be aware with the most popular versions,
                    Bitcoin and Ethereum, but according to CoinLore, there are
                    over 5,000 other cryptocurrencies in circulation. While this
                    statement is accurate, it falls short of capturing what
                    makes Bitcoin so special and enticing to so many investors.
                  </Card.Text>
                </Card.Body>
              </Card>
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
                <Card.Body className="news-list">
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
