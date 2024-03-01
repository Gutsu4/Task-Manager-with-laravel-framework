import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('UserID:', userID, 'Password:', password);

    axios.post('http://127.0.0.1:8000/api/login', {
        userId: userID,
        password: password,
      })
      .then(response => {
        console.log(response.data);
        navigate('/home');
      })
      .catch(error => {
        console.error('Error:', error.response.data);
      });


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

export function AddTaskForm(){

    return null;
}

export function EditTaskForm(){

    return null;
}
