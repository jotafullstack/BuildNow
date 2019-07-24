import React, { Component } from "react";

import { Nav, NavDropdown } from "react-bootstrap";

class LinkMenu extends Component {
  render() {
    if (!this.props.subItemShow) {
      return (
        <Nav.Link key={this.props.title} href={this.props.url}>
          {this.props.title}
        </Nav.Link>
      );
    } else {
      return (
        <NavDropdown title={this.props.title} id="basic-nav-dropdown">
          {this.props.subItens.map(subItem => {
            return (
              <NavDropdown.Item href={subItem.url}>
                {subItem.title}
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
      );
    }
  }
}

export default LinkMenu;
