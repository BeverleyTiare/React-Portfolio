import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "../Components/AboutCard";
import img from "../assets/images/BW AVATAR.png";

function About() {
  return (
    <Container fluid className="about-section" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left",  // Align text to the left
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <AboutCard
              imageUrl={img}
              className="profile-img"
              title="Beverley Tiare"
              text="I am a web developer with a background in Neuroscience and Coaching Psychology. I have a passion for innovation."
            />
          </Col>
        </Row>
        <h3 className="project-heading" style={{ textAlign: "left", paddingBottom: "20px" }}>
          Professional <strong className="indigo">Skillset </strong>
         <ul>
            <li>Neuroscience</li>
            <li>Coaching Psychology</li>
            <li>Performance Psychology</li>
            <li>Innovative Web Solutions</li>
          </ul>
        </h3>
        <Row style={{ justifyContent: "flex-start", paddingBottom: "50px" }}>
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
