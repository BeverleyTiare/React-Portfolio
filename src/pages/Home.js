import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import homeLogo from "../assets/images/BW AVATAR.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container fluid className="home-section">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h2 style={{ paddingBottom: 50 }} className="heading">
              Let's work together!
            </h2>
            <br/>
            <h5 className="heading">
              Hi, I'm Beverley <span class="hand-wave" role="img" aria-label="wave">👋</span>
            </h5>
            <br/>
            <h6>
              I am a web developer with a background in Neuroscience <br/> and Coaching Psychology <br></br><br/> I have a passion for innovation and collaboration. <br></br><br/>Got some questions? <Link to="/contact"> Contact me.</Link>
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
