import { useState } from 'react';
import { db } from '../firebaseConfig';
import { useAuth } from '../authContext';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import Navbar from './navbar';
import QRCode from 'qrcode.react';
import '../style/dashboard.css';

const Shorten = () => {
  const { user } = useAuth();
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

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
      setShowQRCode(true);
    } catch (error) {
      console.error('Error shortening URL', error);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${shortUrl}_qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <Navbar />
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
                      {showQRCode && (
                        <>
                          <QRCode
                            id="qrcode"
                            value={shortUrl}
                            size={150}
                            level={"H"}
                            includeMargin={true}
                          />
                          <div className="mt-3">
                            <Button variant="secondary" onClick={downloadQRCode}>
                              Download QR Code
                            </Button>
                          </div>
                        </>
                      )}
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
