import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { github, resume } from "../assets/index";
import homeLogo from "../assets/images/light.jpg"; // Assuming there's an image file called "homeLogo.png" in the "../assets" directory

function Home() {
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Lets work together!
            </h1>

            <h3 className="heading">
              I am a web developer with a background in Neuroscience and Coaching Psychology. I have a passion for innovation.
            </h3>

            <div style={{ padding: 50, textAlign: "center" }}>
              <a href="#" className="home-icon">
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </Col>
          <Col md={5} style={{ paddingBottom: 15 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;

//assets and class names (home-section, home-content, home-header, heading, home-icon, etc.)
