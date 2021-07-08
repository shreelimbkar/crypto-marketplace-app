import React from "react";
import { Image, ListGroup } from "react-bootstrap";

export default function NewsList({ data }) {
  console.log("artiles", data);
  return (
    <>
      <ListGroup.Item as="li">
        <a href={data.url} alt={data.title} target="_blank" rel="noreferrer">
          <Image src={data.urlToImage} className="news-img" />
          {data.title}
        </a>
      </ListGroup.Item>
    </>
  );
}
