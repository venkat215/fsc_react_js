import React from "react";
// import Container from "react-bootstrap/esm/Container";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Footer.css";

function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Last updated: 9th November, 2020
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Developed by Venkatesh K.M.
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;