import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Spinner,
  Table,
} from "react-bootstrap";
import bitcoin from "../../assets/bitcoin.jpg";
import axios from "axios";
import News from "../news/News";
import Subscription from "../subscription/Subscription";

export default function Dashboard() {
  const [cryptodata, setCryptodata] = useState({});
  const [showNewsLoader, setShowNewsLoader] = useState(true);
  const getCryptoData = async () => await axios.get("/api/cryptos");

  useEffect(() => {
    const data = getCryptoData();
    data
      .then((res) => {
        setCryptodata(res.data);
        setShowNewsLoader(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const formatInPercent = (num) => `${Number(num).toFixed(2)}%`;
  const formatInDollar = (num, maxDigits) =>
    Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
      maxDigits,
    }).format(num);

  return (
    <>
      <Header />
      <main className="Container" id="main">
        <Container fluid>
          <Row>
            <Col sm={8} className="p-4">
              <Image src={bitcoin} className="banner-img" />
              <Card className="mt-4">
                <Card.Header as="h5">
                  Top 100 Cryptocurrency Prices by Market Cap
                </Card.Header>
                <Card.Body>
                  <Card.Text as="div">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Symbol</th>
                          <th>24h Change</th>
                          <th>Price</th>
                          <th>Market cap</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showNewsLoader ? (
                          <tr>
                            <td colSpan="5">
                              <div className="text-center">
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="lg"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          cryptodata.map((coin, index) => (
                            <tr key={coin.id}>
                              <td>{index + 1}</td>
                              <td>
                                <Image
                                  src={coin.image}
                                  style={{
                                    width: 25,
                                    height: 25,
                                    marginRight: 10,
                                  }}
                                  className="banner-img"
                                />
                                {coin.symbol.toUpperCase()}
                              </td>
                              <td>
                                <span
                                  className={
                                    coin.price_change_percentage_24h > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }
                                >
                                  {formatInPercent(
                                    coin.price_change_percentage_24h
                                  )}
                                </span>
                              </td>
                              <td>{formatInDollar(coin.current_price, 20)}</td>
                              <td>{formatInDollar(coin.market_cap, 12)}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
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
                <Card.Body className="news-list" style={{ maxHeight: "none" }}>
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
