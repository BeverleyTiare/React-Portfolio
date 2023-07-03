import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import homeLogo from "../assets/images/BW AVATAR.png";


function Home() {
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h2 style={{ paddingBottom: 50 }} className="heading">
              Let's work together!
            </h2>

            <h5 className="heading">
              Hi, I'm Beverley <span role="img" aria-label="wave">👋</span>
            </h5>

            <h6>
              I am a web developer with a background in Neuroscience <br></br>and Coaching Psychology <br></br> I have a passion for innovation and collaboration. <br></br>Got some questions? Contact me.
            </h6>
          </Col>

          <Col md={5} style={{ paddingBottom: 30 }}>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
