import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">

    
   <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5>Finance Tracker</h5>
            <p className="small">
              Track your expenses, manage your budget, and stay financially
              organised.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
              <li><a href="/signup" className="text-light text-decoration-none">Sign Up</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: support@businessexpense.com</p>
            <p className="small mb-0">© {new Date().getFullYear()} Finance Tracker</p>
          </Col>
        </Row>
      </Container>
      </footer>
  )
}
