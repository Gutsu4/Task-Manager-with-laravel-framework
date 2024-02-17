import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function LoginForm() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserID:', userID, 'Password:', password);
    // TODO: API処理
  };

  return (
    <Container className="pt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserID">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your User ID with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
