import React, { Component } from "react";
import "./header.css";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

class LinkMenu extends Component {
  render() {
    if (!this.props.subItem) {
      return (
        <Nav.Link key={this.props.title} href={this.props.url}>
          {this.props.title}
        </Nav.Link>
      );
    } else {
      return (
        <NavDropdown title={this.props.title} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      );
    }
  }
}

// return <LinkMenu title={link.title} url={link.url} />;

class Header extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
    /* For Show or Hide Component */
    this.state = {
      isShow: this.props.isShow,
      menuShow: this.props.menuShow,
      linksShow: this.props.linksShow,
      ctaShow: this.props.ctaShow
    };
  }

  /* Render Component */
  render() {
    return (
      <header>
        {/* Show or Hide Header */}
        {this.state.isShow ? (
          <Navbar bg={this.props.theme} expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* Show or hide links */}
            {this.state.menuShow ? (
              <Navbar.Collapse id="basic-navbar-nav">
                {/* ml-auto para alinhar à direita, mr-auto para alinhar à esquerda */}
                <Nav className="ml-auto">
                  {this.state.linksShow
                    ? this.props.links.map(link => {
                        /* Return a single link */
                        return (
                          <LinkMenu
                            title={link.title}
                            url={link.url}
                            subItem={link.subItem}
                          />
                        );
                      })
                    : null}
                  {/* Show or Hide Call To Action */}
                  {this.state.ctaShow ? (
                    <Button variant={this.props.cta.variant}>
                      {this.props.cta.title}
                    </Button>
                  ) : null}
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
