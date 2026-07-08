
import { Navbar, Nav, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
  import { UserContext, useUser } from "../../context/UserContext"; 
import { useContext } from "react";




export const Header = () => {
const handleOnLogoOut= ()=>{
  localStorage.removeItem("accessJWT")
  Alert("")
   setUser({}) 

}

  const { user } = useContext(UserContext);
 

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Finance Tracker
        </Navbar.Brand>
       {/*  <Navbar.Toggle aria-controls="main-navbar" /> */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {
              user?._id ? (
                <>
            <Nav.Link as={Link} to="/dashboard"> <MdDashboardCustomize /> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/transaction"> <GrTransaction />  Transaction</Nav.Link>
            <Nav.Link onClick ={handleOnLogoOut}as={Link} to="/logout"></Nav.Link>
                </>
              ) :(
                <>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                </>
              )
            }
            <MdExitToApp  />LogOut
          
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
