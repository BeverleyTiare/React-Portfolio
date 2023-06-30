import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { github, resume } from "../assets/index";
import Aboutcard from "../components/AboutCard";
import img from "../assets/images/light.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <Aboutcard
              img={img}
              alt="Beverley Tiare"
              className="profile-img"
              title="Beverley Tiare"
              text="I am a web developer with a background in Neuroscience and Coaching Psychology. I have a passion for innovation."
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="indigo">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <i className="fab fa-html5"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i className="fab fa-css3-alt"></i>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <i className="fab fa-js"></i>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;



//TODO: class names (about-section, profile-img, project-heading, indigo, tech-icons, etc.),