import React, { useState } from 'react';

//State function to handle form submission 
const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const validateForm = () => {
    let valid = true;

    // Validate name field
    const nameInput = document.getElementById('name');
    if (!nameInput.value) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    // Validate email field
    const emailInput = document.getElementById('email');
    if (!emailInput.value) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
      if (!validateEmail(emailInput.value)) {
        setEmailInvalid(true);
        valid = false;
      } else {
        setEmailInvalid(false);
      }
    }

    return valid;
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5" style={{ width: '50%' }}>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            onBlur={() => setNameError(!document.getElementById('name').value)} //onBlur event handler to check if the field is empty
          />
          {nameError && <p className="text-danger">Name is required</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            onBlur={() => setEmailError(!document.getElementById('email').value)}
          />
          {emailError && <p className="text-danger">Email is required</p>}
          {emailInvalid && <p className="text-danger">Invalid email address</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required></textarea>
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default Contact;


