import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { AiFillGithub } from "react-icons/ai";

// <Row>
// <Col md="4" className="footer-body">
//   <ul className="footer-icons">
//     <li className="social-icons">
//       <a
//         href="https://github.com/BeverleyTiare"
//         style={{ color: "white" }}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {/* <AiFillGithub /> */}
//       </a>
//     </li>
//   </ul>
// </Col>
// </Row>

function Footer() {
  return (
    <footer>
      <Container fluid className="footer">
       
        <p>© 2021 Beverley Tiare</p>
      </Container>
    </footer>
  );
}

export default Footer;


//DTODO class names (footer, footer-body, footer-icons, social-icons