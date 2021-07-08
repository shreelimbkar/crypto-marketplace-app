import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

import NewsList from "./NewsList";

export default function News() {
  const [data, setData] = useState([]);
  const apikey = "cbce94fb8af54702ab0a55a412420aa8";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=cryptocurrency&sortBy=popularity&apiKey=${apikey}`
      )
      .then((response) => {
        setData(response.data);
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
