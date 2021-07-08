import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

import NewsList from "./NewsList";

export default function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        const result = JSON.parse(response.data.data);
        setData(result);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ListGroup as="ul">
        {!data?.articles ? (
          <div>Loading...</div>
        ) : (
          data?.articles.map((news, index) => {
            return <NewsList key={index} data={news} />;
          })
        )}
      </ListGroup>
    </>
  );
}
