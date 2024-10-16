import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess {...formData} />;
  }

  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            name="message" 
            rows={3} 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
