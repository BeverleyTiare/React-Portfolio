import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function About() {
  return (
    <Container className="about-section" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left",  
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
            <div>
            <div style={{padding:"91.67% 0 0 0", position: "relative"}}><iframe src="https://player.vimeo.com/video/842391142?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position: "absolute", top:0,left:0,width:"100%",height:"100%",}} title="BW Portfolio Proj"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </div>
            
            <h5 class="mt-4" >My focus is on exploring innovative collaborations using my diverse skills and expertise to contribute to web solutions for advancement of neuroscience research, health, and performance psychology with teams and individuals</h5>
            
          </Col>
        </Row>
        <h3 className="project-heading" style={{ textAlign: "center",listStyleType: 'none', paddingBottom: "20px" }}>
          Professional <strong className="indigo">Skillset </strong>
        </h3>
        <ul>
          <li>Neuroscience</li>
          <li>Coaching Psychology</li>
          <li>Performance Psychology</li>
          <li>Innovative Web Solutions</li>
        </ul>
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
