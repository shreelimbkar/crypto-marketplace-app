import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {
    const [initialData, setInitialData] = useState([{}]);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setInitialData(data));
    }, []);

    return (
        <Container fluid className="App">
            <Row>
                <Col>
                    <h1>Login</h1>
                    <p>{initialData.title}</p>
                </Col>
            </Row>
        </Container>
    )
}
