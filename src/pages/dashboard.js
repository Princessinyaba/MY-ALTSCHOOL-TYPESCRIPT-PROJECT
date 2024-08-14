// pages/shorten.js
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { useAuth } from '../authContext';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import Navbar from './navbar';
import '../style/dashboard.css';

const Shorten = () => {
  const { user } = useAuth();
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to shorten URLs');
      return;
    }

    const shortCode = Math.random().toString(36).substring(2, 8);
    const generatedShortUrl = `${window.location.origin}/${shortCode}`;

    try {
      await setDoc(doc(db, 'urls', shortCode), {
        longUrl,
        shortUrl: generatedShortUrl,
        createdBy: user.uid,
        createdAt: serverTimestamp()
      });
      setShortUrl(generatedShortUrl);
    } catch (error) {
      console.error('Error shortening URL', error);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="shorten-container">
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Card className="card-container">
              <Card.Body>
                <h1 className="mb-4">Shorten URL</h1>
                <Form onSubmit={handleShorten}>
                  <Form.Group controlId="formBasicUrl">
                    <Form.Label>Long URL</Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="Enter long URL"
                      value={longUrl}
                      onChange={(e) => setLongUrl(e.target.value)}
                      required
                      className="form-control"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Shorten
                  </Button>
                </Form>

                {shortUrl && (
                  <div className="mt-3">
                    <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Shorten;
