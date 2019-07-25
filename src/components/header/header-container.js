import React, { Component } from "react";
import "./header.css";

import { Navbar, Nav, Button } from "react-bootstrap";

import { connect } from "react-redux";

/* LinkMenu Component Props its title, url, subItemShow, subItens */
import LinkMenu from "./LinkMenu";

function headerActive(isShow) {
  return {
    type: "HEADER_ACTIVE",
    isShow
  };
}

const Header = ({ HeaderConfig, dispatch }) => (
  <header>
    {/* Show or Hide Header */}
    {HeaderConfig.isShow ? (
      <Navbar bg={HeaderConfig.theme} expand="lg">
        {/* Brand Logo */}
        {HeaderConfig.brandShow ? (
          <Navbar.Brand href={HeaderConfig.brand.url}>
            {HeaderConfig.brand.title}
          </Navbar.Brand>
        ) : null}
        {/* Add Menu Toogle in Mobile*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Show or hide links */}
        {HeaderConfig.menuShow ? (
          <Navbar.Collapse id="basic-navbar-nav">
            {/* ml-auto para alinhar à direita, mr-auto para alinhar à esquerda */}
            <Nav className="ml-auto">
              {HeaderConfig.linksShow
                ? HeaderConfig.links.map(link => {
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
              {HeaderConfig.ctaShow ? (
                <Button
                  variant={HeaderConfig.cta.variant}
                  onClick={() => dispatch(headerActive(HeaderConfig.isShow))}
                >
                  {HeaderConfig.cta.title}
                </Button>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        ) : null}
      </Navbar>
    ) : null}
  </header>
);

export default connect(state => ({ HeaderConfig: state.HeaderConfig }))(Header);
