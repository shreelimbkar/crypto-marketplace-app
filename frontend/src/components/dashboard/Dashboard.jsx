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
                          <th>24th Change</th>
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
                              <td>{coin.symbol.toUpperCase()}</td>
                              <td>{coin.current_price}</td>
                              <td>{coin.current_price}</td>
                              <td>{coin.market_cap}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
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
