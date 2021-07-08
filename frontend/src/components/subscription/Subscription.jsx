import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Subscription() {
  return (
    <>
      <Form>
        <Row className="align-items-center">
          <Col sm={12} className="my-1">
            <p>
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
          </Col>
          <Col sm={8} className="my-1">
            <Form.Control id="emailid" placeholder="Enter your email" />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Subscribe</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
