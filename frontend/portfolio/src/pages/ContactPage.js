import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import MainBoard from "../components/MainBoard";
import Content from "../components/Content";

import "./ContactPage.css";

import Axios from "axios";

import LinkedInIcon from "../resources/images/linkedin_icon.png";
import InstagramIcon from "../resources/images/instagram_icon.png";
import GithubIcon from "../resources/images/github_icon.png";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios.post(
      "http://localhost:8000/api/external_user/external_user_message/",
      this.state
    )
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  componentDidMount() {
    document.title = "FSC - Contact";
  }

  render() {
    return (
      <div>
        <MainBoard title={this.props.title} text={this.props.text} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="fullname">Full Name</Form.Label>
              <Form.Control
                id="fullname"
                name="fullname"
                type="input"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="dark"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">
                Thank you for your message. I will revert back in a couple of
                days.
              </p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Error</p>
            )}
          </Form>

          <div className="social-media-links">
            <a
              className="social-media-icon"
              href="https://www.linkedin.com/in/venkatkm215"
              target="_blank"
            >
              <img
                src={LinkedInIcon}
                alt="https://www.linkedin.com/in/venkatkm215"
              ></img>
            </a>

            <a
              className="social-media-icon"
              href="https://github.com/venkat215"
              target="_blank"
            >
              <img src={GithubIcon} alt="https://github.com/venkat215"></img>
            </a>

            <a
              className="social-media-icon"
              href="https://www.instagram.com/venkatesh_km_/"
              target="_blank"
            >
              <img
                src={InstagramIcon}
                alt="https://www.instagram.com/venkatesh_km_/"
              ></img>
            </a>
          </div>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
