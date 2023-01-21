import React, { useEffect, useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://cherry-solutions.com/wp-content/uploads/2021/04/Cherry_logo.png"
              width="90%"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className="here" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link className="link-color"  href="./consulting">Consulting</Nav.Link> */}
              <NavDropdown className="link-color" title="Professional Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./consulting">All Professional Services</NavDropdown.Item>
              <NavDropdown.Divider /> 
                <NavDropdown.Item href="./consulting">Management Operating System (MOS)</NavDropdown.Item>
                <NavDropdown.Item href="./consulting">Effective Management and Decision Making</NavDropdown.Item>
                <NavDropdown.Item href="./consulting#applied-intelligence">Applied Intelligence (AI)</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="./consulting#performance-intelligence">Performance Intelligence (PI)</NavDropdown.Item>
                <NavDropdown.Item href="./consulting#capa">CAPA: Corrective Action Preventative Action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="link-color" href="Software">Software</Nav.Link>
              <NavDropdown className="link-color" title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="link-color" href="./about-us">
                About Us
              </Nav.Link>
              <Nav.Link className="link-color contact" eventKey={2} href="./contact-us">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
