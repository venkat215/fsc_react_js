import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainBoard(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            <h1 className="display-1 pb-5">{props.title}</h1>
            <h6 className="display-4 font-weight-light">{props.subTitle}</h6>
            <h3 className="lead font-weight-light">{props.text}</h3>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default MainBoard;
