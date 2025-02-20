import React from "react";
import './Navbar.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/Logo.png"; 

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="p-3">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand Name with Logo */}
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo"  className="" /> {/* Adjust size if needed */}
          {/* TravelSite */}
        </Navbar.Brand>

        {/* Hamburger Menu Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className=" m-auto" id="name">
            <Nav.Link href="#destinations" className="black">Destinations</Nav.Link>
            <Nav.Link href="#hotels" className="black">Hotels</Nav.Link>
            <Nav.Link href="#flights" className="black">Flights</Nav.Link>
            <Nav.Link href="#bookings" className="black">Bookings</Nav.Link>
            <Nav.Link href="#login" className="black">Login</Nav.Link>
            <Nav.Link href="#services" className="black services">Sign Up</Nav.Link>

            {/* Dropdown Menu */}
            <NavDropdown title="EN " id="none" className="black">
              <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
