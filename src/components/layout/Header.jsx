import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";


export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container fluid>
        <Navbar.Brand as={Link} to="/">
          BusinessExpense
        </Navbar.Brand>

       {/*  <Navbar.Toggle aria-controls="main-navbar" /> */}

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/signup">
            <MdExitToApp />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
