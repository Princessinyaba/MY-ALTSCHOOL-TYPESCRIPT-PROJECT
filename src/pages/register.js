// pages/register.js
import { useState } from 'react';
import { useAuth } from '../authContext';
import { useRouter } from 'next/router';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link'; // Import Link from next
import '../style/register.css'; // Import the custom CSS
import Navbar from './navbar';
import '../style/styles.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      router.push('/');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="register-container">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Card className="card-container">
              <Card.Body>
                <h1 className="mb-4">Register</h1>
                <Form onSubmit={handleRegister}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Register
                  </Button>
                </Form>

                <div className="mt-3">
                  <p>
                    Already have an account?{' '}
                    <Link href="/" className="login-link">
                      Login
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Register;
