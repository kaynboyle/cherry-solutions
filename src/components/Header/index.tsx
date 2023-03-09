import React, { useEffect, useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// "https://cherry-solutions.com/wp-content/uploads/2021/04/Cherry_logo.png"
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="xl" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={require("../../assets/images/cherry-america.png")}
              width="90%"
              height="90"
              className="d-inline-block align-top brand-hover"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className="here" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link className="link-color"  href="./consulting">Consulting</Nav.Link> */}
              <Nav.Link className="link-color" href="./">
                Home
              </Nav.Link>
              <NavDropdown className="link-color" title="Professional Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./consulting">Professional Services</NavDropdown.Item>
              <NavDropdown.Divider /> 
                <NavDropdown.Item href="./consulting#MOS">Management Operating System (MOS)</NavDropdown.Item>
                <NavDropdown.Item href="./consulting">Effective Management and Decision Making</NavDropdown.Item>
                <NavDropdown.Item href="./consulting#applied-intelligence">Applied Intelligence (AI)</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="./consulting#performance-intelligence">Performance Intelligence (PI)</NavDropdown.Item>
                <NavDropdown.Item href="./consulting#capa">CAPA: Corrective Action Preventative Action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="link-color" title="Software" id="collasible-nav-dropdown">
              <NavDropdown.Item href="./Software">Software</NavDropdown.Item>
              <NavDropdown.Divider /> 
                <NavDropdown.Item href="./Software#cherry-COLA">Cherry COLA</NavDropdown.Item>
                <NavDropdown.Item href="./Software#cherry-PIE">Cherry PIE</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="link-color" href="./about-us">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
