import React from "react";

import MainBoard from "../components/MainBoard";
import Content from "../components/Content";

import PersonalImage from "../resources/images/personal_image.jpg";
import Resume from "../resources/files/Resume.pdf";

import Button from "react-bootstrap/Button";

function AboutPage(props) {
  return (
    <div>
      <MainBoard
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />

      <Content>
        <p
          style={{
            marginBottom: "2%",
          }}
        >
          <Button
            variant="dark"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Button>
        </p>

        <div className="lead font-weight-light">
          <img
            style={{
              width: "300px",
              height: "350px",
              float: "left",
              marginRight: "2%",
            }}
            className="personal-image"
            src={PersonalImage}
            alt="Not available"
          ></img>

          <div style={{ textAlign: "justify" }}>
            <p>
              From Automobile Engineering in Chennai, IN to Project / Operations
              and Production Management in Christchurch, NZ to Advisory Support
              Associate in Ernst & Young, Bangalore, IN to German Catalog
              Associate in Amazon....... hang on I was 23 already with no
              exposure to programming :(
            </p>

            <p>
              Okay, before I narrate any further, my name is Venaktesh and I am
              from Chennai, India. And now my story... It all started in 2015
              when I was with Amazon.com. The work atmosphere made me understand
              the importance of automation and there I was, taking my baby steps
              with programming. The first computer language that I learnt was
              VBA which I used for MS Excel automations. Post getting bored of
              it, I was looking to learn something new and fell in love at first
              sight with Python. The syntax looked so simple. Well when I began,
              I didn't know that I'll be able to do so much with Python more
              than general purpose programming.{" "}
              <b>
                Data Analysis, Visualization, Machine Learning, Deep Learning,
                Image processing
              </b>{" "}
              and what not? As I was progessing, I found another affair with
              SQL.{" "}
              <b>
                Currently I am with Instabase as a full time Application
                engineer.
              </b>
            </p>

            <p>
              So why this website? I thought I wanted to showcase my knowledge
              to others through which I'll also be able to learn new skills.
              During the process of creating this website, I explored into front
              end development. I've built this website with React 17 and Django
              Rest framework. Well that's enough of myself I guess and feel free
              to contact me for anything related to{" "}
              <b>VBA, Python, Javascript, SQL, HTML or CSS</b>. I'll learn from
              you, and I hope it will be vice-versa too.
            </p>

            <p>
              Thanks to all those Youtube tutors, people who share their
              solutions on Stack overflow and other Internet forums. My
              knowledge is purely from these sources and without them, I won't
              be having a career in this field. <br></br>
              <br></br>
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <p>
              <em>
                தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக், கற்றனைத் தூறும் அறிவு.
                -- திருக்குறள் 396
              </em>
            </p>

            <p>
              <em>
                The deeper a well is dug, the more the water that springs; the
                more one learns, the more the wisdom it brings.. -- Thirukkural
                396
              </em>
            </p>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;
