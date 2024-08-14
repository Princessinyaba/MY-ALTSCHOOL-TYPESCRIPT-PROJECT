// pages/index.js
import { useState, useEffect } from 'react';
import { useAuth } from '../authContext';
import { useRouter } from 'next/router';
import { Container, Form, Button, Row, Col, Card} from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa'; // Import the Font Awesome Google icon
import Link from 'next/link'; // Import Link from next
import Navbar from './navbar';
import '../style/globals.css'; // Import the custom CSS

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { user, login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error('Google login error', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Card className="card-container">
              <Card.Body>
                <h1 className="mb-4">Login</h1>
                <Form onSubmit={handleLogin}>
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
                    Login
                  </Button>
                </Form>

                <Button
                  variant="outline-primary"
                  className="mt-3 d-flex align-items-center justify-content-center"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle className="me-2" /> Login with Google
                </Button>

                <div className="mt-3">
                  <p>
                    Don't have an account?{' '}
                    <Link href="/register" className="register-link">
                      Register
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

export default Index;
