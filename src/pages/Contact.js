import React from 'react';
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container fluid>
      <Container>
        <section className="contact">
          <h2 className="contact__title">Contact Us</h2>
          <form className="contact__form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </Container>
    </Container>
  );
};

export default Contact;
