/*import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (event) => {
    if (event.target.name === 'email') {
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For now, let's just display a success message
    alert('Thanks for connecting!');
  };

  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="container mx-auto text-center md:w-3/5 mx-auto text-white">
        <h1 className="text-4xl font-bold mb-5 border-b-2 w-32 mx-auto border-indigo-600 pb-2">
          Contact Me
        </h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="text-left mb-4">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange} className="rounded p-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="text-left mb-4">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" value={email} onChange={handleChange} className="rounded p-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="text-left mb-4">
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" value={message} onChange={handleChange} className="rounded p-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-black rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;*/

import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
    
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact
