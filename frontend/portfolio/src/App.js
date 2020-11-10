import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import UnderDevelopment from "./pages/UnderDevelopmentPage";

// import Footer from "./components/Footer";
// import Navbar from "react-bootstrap/esm/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Full Stack Crafts",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "HELLO WORLD",
        subTitle: "Checkout my apps below",
        text: "Some of them may require login. More on the way !",
      },
      about: {
        title: "ABOUT ME",
        subTitle: "",
        text:
          "Thank you for your interest in my profile. Read further to know more about me.",
      },
      contact: {
        title: "WHAT'S UP?",
        text:
          "Expect a response within 2 days if you have provided a valid email ID.",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar logged_in={this.state.logged_in} />

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <AboutPage
                title={this.state.about.title}
                subTitle={this.state.about.subTitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                text={this.state.contact.text}
              />
            )}
          />

          <Route
            path="/under_development"
            render={() => <UnderDevelopment title={this.state.contact.title} />}
          />
          {/* <Footer/> */}
        </Container>
      </Router>
    );
  }
}

export default App;
