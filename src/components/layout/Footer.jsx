
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="mt-5 mt-md-6 bg-dark text-light py-4" >
   <Container >
        <Row className="text-center justify-content-center">
          <Col md={2} className="mb-3">
            <h5>Finance Tracker</h5>
            <p className="small">
              Track your expenses, manage your budget, and stay financially
              organised.
            </p>
          </Col>

          <Col md={2} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
              <li><a href="/signup" className="text-light text-decoration-none">Sign Up</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: support@financetracker.com</p>
            <p className="small mb-0">© {new Date().getFullYear()} Finance Tracker</p>
          </Col>
        </Row>
      </Container>
      </footer>
  )
}
