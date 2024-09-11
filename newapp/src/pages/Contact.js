import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; 

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setFeedback('Form submitted successfully!');
      }
    } catch (error) {
      setFeedback('There was an error submitting the form.');
      console.error('Error submitting the form:', error.response || error.message);
    }
  };

  return (
    <div className="contact-wrapper">
      <h2 className='contact-us-title'>Contact Us</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {feedback && <div className="feedback">{feedback}</div>}
      </div>
    </div>
  );
}

export default Contact;
