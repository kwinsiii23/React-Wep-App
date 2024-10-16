import React from 'react';
import { Container } from 'react-bootstrap';

const SubmissionSuccess = ({ name, email, message }) => {
  return (
    <Container className="mt-5">
      <h2>Thank you, {name}!</h2>
      <p>Your message has been successfully sent.</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Message:</strong> {message}</li>
      </ul>
    </Container>
  );
}

export default SubmissionSuccess;


