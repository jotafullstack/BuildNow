import React from "react";
import "./header.css";

import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function Header() {
  return <header className=""><Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* ml-auto para alinhar à direita, mr-auto para alinhar à esquerda */}
    <Nav className="ml-auto">
      <Nav.Link href="#home">A</Nav.Link>
      <Nav.Link href="#link">B</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar></header>;
}
