import React, { Component } from "react";
import "./header.css";

import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
    /* For Show or Hide Component */
    this.state = {
      isShow: this.props.isShow,
      linksShow: this.props.linksShow
    };
  }

  /* Render Component */
  render() {
    return (
      <header>
        {/* If state isShow is true, show header if state isShow is false, hide header */}
        {this.state.isShow ? (
          <Navbar bg={this.props.theme} expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* Show or hide links */}
            {this.state.linksShow ? (
              <Navbar.Collapse id="basic-navbar-nav">
                {/* ml-auto para alinhar à direita, mr-auto para alinhar à esquerda */}
                <Nav className="ml-auto">
                  {/* Mapping all links */}
                  {this.props.links.map(link => {
                    /* Return a single link */
                    return (
                      <Nav.Link key={link.title} href={link.url}>
                        {link.title}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            ) : null}
          </Navbar>
        ) : null}
      </header>
    );
  }
}

export default Header;
