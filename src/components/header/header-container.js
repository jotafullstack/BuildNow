import React, { Component } from "react";
import "./header.css";

import { Navbar, Nav, Button } from "react-bootstrap";

import { connect } from "react-redux";

/* LinkMenu Component Props its title, url, subItemShow, subItens */
import LinkMenu from "./LinkMenu";

class Header extends Component {
  /* Construtor for getting props and setting states */
  constructor(props) {
    super(props);
  }

  /* Render Component */
  render() {
    return (
      <header>
        {/* Show or Hide Header */}
        {this.props.HeaderConfig.isShow ? (
          <Navbar bg={this.props.HeaderConfig.theme} expand="lg">
            {/* Brand Logo */}
            {this.props.HeaderConfig.brandShow ? (
              <Navbar.Brand href={this.props.HeaderConfig.brand.url}>
                {this.props.HeaderConfig.brand.title}
              </Navbar.Brand>
            ) : null}
            {/* Add Menu Toogle in Mobile*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* Show or hide links */}
            {this.props.HeaderConfig.menuShow ? (
              <Navbar.Collapse id="basic-navbar-nav">
                {/* ml-auto para alinhar à direita, mr-auto para alinhar à esquerda */}
                <Nav className="ml-auto">
                  {this.props.HeaderConfig.linksShow
                    ? this.props.HeaderConfig.links.map(link => {
                        /* Return a single link */
                        return (
                          <LinkMenu
                            key={link.title}
                            title={link.title}
                            url={link.url}
                            subItemShow={link.subItemShow}
                            subItens={link.subItens}
                          />
                        );
                      })
                    : null}
                  {/* Show or Hide Call To Action */}
                  {this.props.HeaderConfig.ctaShow ? (
                    <Button variant={this.props.HeaderConfig.cta.variant}>
                      {this.props.HeaderConfig.cta.title}
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

export default connect(state => ({ HeaderConfig: state.HeaderConfig }))(Header);
