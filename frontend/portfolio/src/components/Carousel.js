import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TodoLogo from "../resources/images/todo_app_logo.png";
import SentimentAnalysisLogo from "../resources/images/sentiment_analysis.jpg";
import DVizLogo from "../resources/images/dviz_app_logo.png";
import WebScrapLogo from "../resources/images/wev_scrapper.png";

import Card from "../components/Card2";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Todos",
          subTitle: "Make your Todo list",
          imgSrc: TodoLogo,
          link: "under_development",
          linkText: "Under development",
          selected: false,
        },
        {
          id: 1,
          title: "Sentiment Analysis",
          subTitle: "Check the sentiment of a tweet",
          imgSrc: SentimentAnalysisLogo,
          link: "under_development",
          linkText: "Under development",
          selected: false,
        },
        {
          id: 2,
          title: "Data Vizualisation",
          subTitle: "Sachin Tendulkar's career visualized with Tableau",
          imgSrc: DVizLogo,
          link: "under_development",
          linkText: "Under development",
          selected: false,
        },
        {
          id: 3,
          title: "Web scrapper",
          subTitle: "Search on Amazon",
          imgSrc: WebScrapLogo,
          link: "under_development",
          linkText: "Under development",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row md={2} sm={1} lg={4}>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
