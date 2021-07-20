import React, { useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import axios from "axios";

import NewsList from "./NewsList";

export default function News() {
  const [data, setData] = useState([]);
  const [showNewsLoader, setShowNewsLoader] = useState(true);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        const result = JSON.parse(response.data.data);
        setData(result);
        setShowNewsLoader(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ListGroup as="ul">
        {showNewsLoader ? (
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
          data?.articles.map((news, index) => {
            return <NewsList key={index} data={news} />;
          })
        )}
      </ListGroup>
    </>
  );
}
