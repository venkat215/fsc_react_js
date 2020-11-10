import React from "react";

import MainBoard from "../components/MainBoard";
import Carousel from "../components/Carousel";
import Container from "react-bootstrap/esm/Container";

function HomePage(props) {
  document.title = "FSC - Home";

  return (
    <div>
      <Container fluid={true}>
        <MainBoard
          title={props.title}
          subTitle={props.subTitle}
          text={props.text}
        />
      </Container>
      <Container>
        <Carousel />
      </Container>
    </div>
  );
}

export default HomePage;
