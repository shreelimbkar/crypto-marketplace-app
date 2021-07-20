import React from "react";
import { ListGroup } from "react-bootstrap";

export default function ArticlesList({ data }) {
  return (
    <>
      <ListGroup.Item as="li">{data.title}</ListGroup.Item>
    </>
  );
}
