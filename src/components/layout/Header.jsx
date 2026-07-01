import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { UserContext } from "../../main";


export const Header = () => {

  const useUser = () => useContext(UserContext)
  const data = useUser()
  console.log(data)
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Finance Tracker
        </Navbar.Brand>

       {/*  <Navbar.Toggle aria-controls="main-navbar" /> */}

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard"> <MdDashboardCustomize /> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/transaction"> <GrTransaction />  Transaction</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/logout">
            <MdExitToApp />LogOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
